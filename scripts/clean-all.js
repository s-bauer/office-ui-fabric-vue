const rimraf = require('rimraf').sync;
const path = require('path');
const fs = require("fs");

[
    'dist',
    'temp',
    'types',
    '.rpt2_cache',
    'node_modules',
    'package-lock.json'
].forEach(folder => {
    rimraf(path.resolve(process.cwd(), folder));
});


