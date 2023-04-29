const fs = require('fs');
const {presentWorkingDirectory, myBash} = require('./lib/bash-lib.js');

const main = function() {
  const scriptFile = process.argv[2];
  const scriptContent = fs.readFileSync(scriptFile, 'utf-8');
  const commands = scriptContent.split('\n');
  commands.splice(-1);
  const outputs = [];
  let pwd = process.env.PWD;

  for(command of commands) {
    let result = myBash(command, pwd);

    if(result.output !== undefined) {
      outputs.push(result.output);
    }

    pwd = result.pwd;
  }

  return outputs;
};

console.log(main());
