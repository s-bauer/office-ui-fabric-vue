const rollupPath = 'node ' + require.resolve('rollup/bin/rollup');
const execSync = require('child_process').execSync ;

execSync("node ../../scripts/clean.js");

function execRollup(options) {
    execSync(rollupPath + options, {
        cwd: process.cwd(),
        stdio: "inherit"
    });
}


execRollup(" -c");
