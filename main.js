const fs = require('fs');
const {myBash} = require('./lib/bash-lib.js');

const main = function() {
  const scriptFile = process.argv[2];
  const scriptContent = fs.readFileSync(scriptFile, 'utf-8');
  const commands = scriptContent.split('\n');

  for(command of commands) {
    let display = myBash(command);
    console.log(display);
  }
};

main();
