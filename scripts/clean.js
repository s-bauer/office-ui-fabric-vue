const rimraf = require('rimraf').sync;
const path = require('path');

[
    'dist',
    'temp',
    '.rpt2_cache'
].forEach(folder => {
    rimraf(path.resolve(process.cwd(), folder));
});
