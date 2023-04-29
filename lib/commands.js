const fs = require('fs');

const pwd = function({pwd}) {
  return pwd;
};

const ls = function({pwd}) {
  return fs.readdirSync(pwd);
};

const resolve = function(path) {
  const pathTokens = path.split('/');
  console.log(pathTokens);
  return pathTokens.reduce(function(path, token){

    if(token === '..'){
      path.pop();
      return path;
    } 
    if(`(/^\w/).test(token)`) {
      path.push(token);
      return path;
    }
    return path;
  }, []).join('/');
};

const cd = function(environment, path) {
  const potentialPwd = (path.startsWith('/')) ? path : `${environment.pwd}/${path}`;
  if(fs.existsSync(potentialPwd)) {
    environment.pwd = resolve(potentialPwd);
    return environment.pwd;
  }

  return "Directory or path doesn't exists";
};

exports.pwd = pwd;
exports.ls = ls;
exports.cd = cd;
