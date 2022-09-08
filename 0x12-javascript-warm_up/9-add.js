#!/usr/bin/node
const args = [parseInt(process.argv[2]), parseInt(process.argv[3])];
function add (a, b) {
  return (a + b);
}
console.log(add(args[0], args[1]));
