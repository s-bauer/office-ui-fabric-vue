$rootFolder = Join-Path (Get-Location) "..\"
$distFolder = Join-Path $rootFolder "dist"
$archiveFile = Join-Path $distFolder "deploy.zip"

Set-Location "..\"
npm run build 2>&1
Set-Location ".\scripts"

$deploymentConfigs = az webapp deployment list-publishing-profiles -n "office-vue-fabric" --resource-group "EUW_default" | ConvertFrom-Json
$ftpConfig = $deploymentConfigs | Where-Object { $_.publishMethod -eq "FTP" }
$ftpUrl = $ftpConfig.publishUrl.Replace("ftp://", "ftp://$($ftpConfig.userName):$($ftpConfig.userPWD)@").Replace("site/wwwroot", "")


Add-Type -Path "WinSCPnet.dll"
$sessionOptions = New-Object WinSCP.SessionOptions
$sessionOptions.ParseUrl($ftpUrl)

$session = New-Object WinSCP.Session
$session.Open($sessionOptions)
$session.RemoveFiles("site/wwwroot/**")
$session.PutFiles("$distFolder\*", "/site/wwwroot/")
$session.Dispose()
