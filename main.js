const fs = require('fs');
const {presentWorkingDirectory, myBash} = require('./lib/bash-lib.js');

const main = function() {
  const scriptFile = process.argv[2];
  const scriptContent = fs.readFileSync(scriptFile, 'utf-8');
  const commandN = scriptContent.split('\n');
  const commands = commandN.slice(0, commandN.length - 1);
  const outputs = [];
  let pwd = process.env.PWD;

  for(command of commands) {
    let rename = myBash(command, pwd);
    if(rename.output !== '') {
      outputs.push(rename.output);
    }

    pwd = rename.pwd;
  }

  return outputs;
};

console.log(main());
