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

const myBash = function(commands) {
  let pwd = presentWorkingDirectory();
  let path = "";

  for(const command of commands) {
    if(command === 'pwd') {
      return presentWorkingDirectory();
    }

    if(command === 'ls') {
      return listDirectories();
    }

    if((/cd/).test(command)) {
      path = ("./").concat(command.replace("cd ", ""));
      pwd = changeDirectory(path, pwd);
    }
  }
};

exports.presentWorkingDirectory = presentWorkingDirectory;
exports.listDirectories = listDirectories;
exports.myBash = myBash;
exports.changeDirectory = changeDirectory;
