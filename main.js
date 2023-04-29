const fs = require('fs');
const {myBash} = require('./lib/bash-lib.js');

const parseScript = function(file) {
  const scriptFile = file;
  const scriptContent = fs.readFileSync(scriptFile, 'utf-8').trim();
  const commands = scriptContent.split('\n');

  return commands;
};

const execute = function(commands) {
  const outputs = [];
  let pwd = process.env.PWD;

  for(command of commands) {
    let result = myBash(command, pwd);
    pwd = result.pwd;

    if(result.output !== '') {
      outputs.push(result.output);
    }
  }

  return outputs;
};

const main = function() {
  const commands = parseScript(process.argv[2]);
  console.log(execute(commands));
};

console.log(main());
