const fs = require('fs');
const {pwd, ls, cd, echo} = require('./commands.js');
const operations = {pwd, ls, cd, echo};

const read = function(file) {
  return fs.readFileSync(file, 'utf-8');
};

const parse = function(script) {
  const commandLines = script.trim().split('\n');

  const commandWithArgSet = commandLines.map(function(commandLine){
    return commandLine.split(" ");
  });

  return commandWithArgSet;
};

const execute = function(commandWithArgSet, environment) {
  return commandWithArgSet.reduce(function(output, command){
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
