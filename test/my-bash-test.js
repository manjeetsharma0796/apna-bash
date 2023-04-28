const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {presentWorkingDirectory} = require('../main.js');

describe("Testing presentWorkingDirectory", function() {
  it("should give current working directory", function() {
    strictEqual(presentWorkingDirectory(), "/Users/manjeet/workspace/JS/apna-bash");
  })
})
