const fs = require('fs');

const pwd = function({pwd}) {
  return pwd;
};

const ls = function({pwd}) {
  return fs.readdirSync(pwd);
};

const removeSingleDot = function(pathTokens) {
  const tokens = pathTokens.filter(function(token) {
    if(token !== '.') {
      return token;
    }
  })
  tokens.unshift('');

  return tokens;
};

const resolve = function(path) {
  const pathTokens = removeSingleDot(path.split('/'));

  return pathTokens.reduce(function(path, token){

    if(token === '..'){
      path.pop();
      return path;
    } 

    if(`(/^\w/).test(token)`) {
      path.push(token);
      return path;
    }
  }, []).join('/');
};

const cd = function(environment, path) {
  const potentialPwd = (path.startsWith('/')) ? path : `${environment.pwd}/${path}`;
  if(fs.existsSync(potentialPwd)) {
    environment.pwd = resolve(potentialPwd);
    return environment.pwd;
  }

  return "Directory or path does not exists";
};

const echo = function(text) {
  return text;
};

exports.pwd = pwd;
exports.ls = ls;
exports.cd = cd;
exports.resolve = resolve;
exports.echo = echo;
