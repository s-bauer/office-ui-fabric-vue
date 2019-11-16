$distFolder = Join-Path $PSScriptRoot "..\dist"

npm run build --prefix "$PSScriptRoot\..\" 2>&1 | Write-Host

$deploymentConfigs = az webapp deployment list-publishing-profiles -n "office-vue-fabric" --resource-group "default-rg" | ConvertFrom-Json
$ftpConfig = $deploymentConfigs | Where-Object { $_.profileName -eq "office-vue-fabric - FTP" }
$ftpUrl = $ftpConfig.publishUrl.Replace("ftp://", "ftp://$($ftpConfig.userName):$($ftpConfig.userPWD)@").Replace("site/wwwroot", "")


Add-Type -Path "$PSScriptRoot\WinSCPnet.dll"
$sessionOptions = New-Object WinSCP.SessionOptions
$sessionOptions.ParseUrl($ftpUrl)

$session = New-Object WinSCP.Session
$session.Open($sessionOptions)
$session.RemoveFiles("site/wwwroot/**")
$session.PutFiles("$distFolder\*", "/site/wwwroot/")
$session.Dispose()
