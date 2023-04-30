const fs = require('fs');
const {read, parse, execute} = require('./lib/bash-lib.js');

const main = function() {
  const pwd = process.env.PWD;
  const environment = {pwd};
  const script = read(process.argv[2]);
  const commandLines = parse(script);
  //console.log(commandLines);
  const output = execute(commandLines, environment);
  console.log(output);
};

main();
