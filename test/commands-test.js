const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {pwd, ls, cd, echo} = require('../lib/commands.js')

describe("Testing commands", function() {
  describe("Testing pwd", function() {
    it("Should give pwd back when provided environment-pwd", function() {
      strictEqual(pwd({pwd: 'Users/system'}), 'Users/system');
    })
  })

  describe("Testing ls", function() {
    it("Should give list of directory and file when provided environment-pwd", function() {
      deepStrictEqual(ls({pwd: './test'}), ['commands-test.js']);
    })
  })

  describe("Testing cd", function() {
    it("Should give pwd back when provided environment", function() {
      deepStrictEqual(cd({pwd: process.env.PWD}, 'test'), '/Users/manjeet/workspace/JS/apna-bash/test');
    })
  })
})
