const fs = require('fs');

const presentWorkingDirectory = function(pwd) {
  return pwd;
};

const listDirectories = function(pwd) {
  return fs.readdirSync(pwd);
};

const changeDirectory = function(path, pwd) {
  if(fs.existsSync(path)) {
    return pwd + '/' + path;
  }

  return 1;
};

const myBash = function(command, pwd) {
  const outputAndPwd = {output: '', pwd: pwd};
  if(command === 'pwd') {
    outputAndPwd.output = presentWorkingDirectory(pwd);
    return outputAndPwd;
  }

  if(command === 'ls') {
    outputAndPwd.output = listDirectories(pwd);
    return outputAndPwd;
  }

  if((/^cd/).test(command)) {
    path = command.replace("cd ", "");
    outputAndPwd.pwd = changeDirectory(path, pwd);
    return outputAndPwd;
  }
};

exports.presentWorkingDirectory = presentWorkingDirectory;
exports.listDirectories = listDirectories;
exports.myBash = myBash;
exports.changeDirectory = changeDirectory;
