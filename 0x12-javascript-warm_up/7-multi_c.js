#!/usr/bin/node
const a = parseInt(process.argv[2]);
if (a) {
  for (let i = 0; i < a; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of ocurrences');
}
