// const os = require('os');
const path = require('path');
const fs = require('fs');
// const util = require('util');

const DEV_FOLDER = 'dev';
const DEV_FILE_PATH = path.join(DEV_FOLDER, 'testfile1');

fs.mkdir(DEV_FOLDER, (err) => {
  if (err.code !== 'EEXIST') throw err;
  fs.open(DEV_FILE_PATH, 'w', (er, fd) => {
    if (er) throw er;
    fs.writeFile(fd, 'Hellow world!', (e) => {
      if (e) throw e;
    });
  });
});

