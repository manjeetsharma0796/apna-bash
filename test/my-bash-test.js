const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {presentWorkingDirectory, listDirectories, myBash, changeDirectory} = require('../lib/bash-lib.js');

describe("Testing presentWorkingDirectory", function() {
  it("should give back psedo pwd", function() {
    deepStrictEqual(presentWorkingDirectory('workspace'),'workspace');
  });
});

describe("Testing listDirectories", function() {
  it("should give all files and directory from pwd", function() {
    deepStrictEqual(listDirectories('.'), [ '.git', '.gitignore', 'apnaBash.ab', 'lib', 'main.js', 'test', 'workspace']);
  });
});

describe("Testing changeDirectory", function() {
  it("should give true as given path exists", function() {
    deepStrictEqual(changeDirectory('/Users/manjeet/workspace/JS/apna-bash/test'), '/Users/manjeet/workspace/JS/apna-bash/test');
  });
});
