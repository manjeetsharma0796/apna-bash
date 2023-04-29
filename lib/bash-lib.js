const fs = require('fs');
const {pwd, ls, cd} = require('./commands.js');
const operations = {pwd, ls, cd};

const read = function(file) {
  return fs.readFileSync(file, 'utf-8');
};

const commandLine = {command: '', argument: ''};

const parse = function(script) {
  const commandLines = script.trim().split('\n');

  const commandSet = commandLines.map(function(element){
    return command = element.split(" ");
  });

  return commandSet;
};


const execute = function(commandSet, environment) {
  return commandSet.reduce(function(output, command){
    const currentCommand = operations[command[0]];
    const arg = command[1];
    const currentOutput = currentCommand(environment, arg);
    output.push(currentOutput);
    return output;
  }, [])
};

exports.read = read;
exports.parse = parse;
exports.execute = execute;
