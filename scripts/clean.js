'use strict';

require('../lib/babel-hook');

const path = require('path');
const rmrf = require('../src/packages/fs').rmrf;

Promise.all([
  rmrf(path.join(__dirname, '..', 'dist')),
  rmrf(path.join(__dirname, '..', 'docs')),
  rmrf(path.join(__dirname, '..', 'test', 'dist')),
  rmrf(path.join(__dirname, '..', 'test', 'test-app', 'dist'))
]).then(() => {
  process.exit(0);
}).catch(() => {
  process.exit(1);
});
