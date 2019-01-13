const rimraf = require('rimraf').sync;
const path = require('path');

[
    'dist',
    'temp',
    'types',
    '.rpt2_cache',
    'node_modules',
    'package-json.lock'
].forEach(folder => {
    rimraf(path.resolve(process.cwd(), folder));
});
