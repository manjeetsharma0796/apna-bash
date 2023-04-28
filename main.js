const fs = require('fs');
const {myBash} = require('./lib/bash-lib.js');

const main = function() {
  const argument = process.argv[2];
  const content = fs.readFileSync(argument, 'utf-8');
  const commands = content.split('\n');

  console.log(content);
  console.log(commands);
};

main();
