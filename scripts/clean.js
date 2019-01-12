const rimraf = require('rimraf').sync;
const path = require('path');

[
    'dist',
    'temp',
    'types',
].forEach(folder => {
    rimraf(path.resolve(process.cwd(), folder));
});
