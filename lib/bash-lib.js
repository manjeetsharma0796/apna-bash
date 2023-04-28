const fs = require('fs');

const presentWorkingDirectory = function() {
  const {PWD} = process.env;
  return PWD;
};

const listDirectories = function() {
  return fs.readdirSync('.');
};

const changeDirectory = function(path, pwd) {
  if(fs.existsSync(path)) {
    return pwd.concat(path.replace(".", ""))
  }
};

const myBash = function(command) {
  let pwd = presentWorkingDirectory();
  let path = "";

  if(command === 'pwd') {
    return presentWorkingDirectory();
  }

  if(command === 'ls') {
    return listDirectories();
  }

  if((/cd/).test(command)) {
    path = ("./").concat(command.replace("cd ", ""));
    pwd = changeDirectory(path, pwd);
    return pwd;
  }
};

exports.presentWorkingDirectory = presentWorkingDirectory;
exports.listDirectories = listDirectories;
exports.myBash = myBash;
exports.changeDirectory = changeDirectory;
