#!/usr/bin/node

/* writes a string to a file */
const fs = require('fs');
const args = process.argv;
fs.writeFile(args[2], args[3], function (err) {
    if (err) {
	console.log(err);
    }
});
