const fs = require('fs');
const file = process.argv[2] || null;
if (file) {
    fs.mkdir(file, console.log('Folder has been created'));
} else {
    console.log('Folder name must be provided');
}

