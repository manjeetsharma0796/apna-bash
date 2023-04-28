const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {presentWorkingDirectory, listDirectories} = require('../main.js');

describe("Testing presentWorkingDirectory", function() {
  it("should give current working directory", function() {
    deepStrictEqual(presentWorkingDirectory(), "/Users/manjeet/workspace/JS/apna-bash");
  })
})

describe("Testing listDirectories", function() {
  it("should give all files and directory from pwd", function() {
    deepStrictEqual(listDirectories(), [ '.git', '.gitignore', 'apnaBash.ab', 'main.js', 'test' ]);
  })
})
