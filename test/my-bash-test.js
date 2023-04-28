const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {presentWorkingDirectory, listDirectories, myBash} = require('../main.js');

describe("Testing presentWorkingDirectory", function() {
  it("should give current working directory", function() {
    deepStrictEqual(presentWorkingDirectory(), "/Users/manjeet/workspace/JS/apna-bash");
  });
});

describe("Testing listDirectories", function() {
  it("should give all files and directory from pwd", function() {
    deepStrictEqual(listDirectories(), [ '.git', '.gitignore', 'apnaBash.ab', 'main.js', 'test' ]);
  });
});

describe("Testing myBash", function() {
  it("should execute pwd, when pwd is provided as command", function() {
    deepStrictEqual(myBash(['pwd']), "/Users/manjeet/workspace/JS/apna-bash")
  });

  it("should execute ls, when ls is provided as command", function() {
    deepStrictEqual(myBash(['ls']), [ '.git', '.gitignore', 'apnaBash.ab', 'main.js', 'test'])
  });
});
