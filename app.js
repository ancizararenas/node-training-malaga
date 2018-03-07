const os = require("os");
const fs = require("fs");
const path = require("path");
const util = require("util");
const debuglog = util.debuglog('module3');
const debuglogdoc = util.debuglog('module3-doc');

// OS Module - Show information about the OS
debuglogdoc("Information about OS functions for v6 --> https://nodejs.org/docs/latest-v6.x/api/os.html");
console.log(`The machine has ${os.cpus().length} CPUs with ${Math.floor(os.totalmem() / (1024 * 1024))} MB of memory space, but we only have ${Math.floor(os.freemem() / (1024 * 1024))} MB free.`);

// Path module - Show information about Paths
debuglogdoc("Information about PATH functions for v6 --> https://nodejs.org/docs/latest-v6.x/api/path.html");
var homedir = os.homedir();     
console.log("Home dir (by OS) > " + homedir);
var homedirname = path.dirname(homedir);
console.log("Home dir name from path (by Path) > " + homedirname);
var formatPath = JSON.stringify(path.parse(homedir));
console.log(`Home dir parsed (by Path) > ${formatPath}`);

// FS Module - Show information about the FileSystem
debuglogdoc("Information about FS functions for v6 --> https://nodejs.org/docs/latest-v6.x/api/fs.html");
fs.readdir(homedir, function(err, filenames) {
    filenames.forEach(function(fileName){
        console.log(`File stored in the folder > ${fileName}`);
    })    
});

// Util Module - Utilities
debuglogdoc("Information about Util functions for v6 --> https://nodejs.org/docs/latest-v6.x/api/util.html");
debuglog(util.format("Formating string %s and a number %d", "StringValue", 0));

