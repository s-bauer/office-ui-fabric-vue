const typescriptPath = 'node ' + require.resolve('typescript/lib/tsc');
const exec = require('child_process').exec;

const child = exec(typescriptPath + " -outdir dist", {
    cwd: process.cwd(),
});

child.stdout.on("data", data => console.log(data));
child.stderr.on("data", data => console.log(data));
