const fs = require('fs');

const presentWorkingDirectory = function(pwd) {
  return pwd;
};

const listDirectories = function(pwd) {
  return fs.readdirSync(pwd);
};

const changeDirectory = function(path, pwd) {
  if(fs.existsSync(path)) {
    return path;
  }

  return 1;
};

const myBash = function(command, pwd) {
  const rename = {pwd: pwd};
  if(command === 'pwd') {
    rename.output = presentWorkingDirectory(pwd);
    return rename;
  }

  if(command === 'ls') {
    rename.output = listDirectories(pwd);
    return rename;
  }

  if((/cd/).test(command)) {
    path = command.replace("cd ", "");
    path = pwd + '/' + path;
    rename.pwd = changeDirectory(path, pwd);
    return rename;
  }
};

exports.presentWorkingDirectory = presentWorkingDirectory;
exports.listDirectories = listDirectories;
exports.myBash = myBash;
exports.changeDirectory = changeDirectory;
