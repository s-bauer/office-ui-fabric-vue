const typescriptPath = 'node ' + require.resolve('typescript/lib/tsc');
const exec = require('child_process').exec;

exec(typescriptPath + " -outdir dist", {
    cwd: process.cwd(),
});
