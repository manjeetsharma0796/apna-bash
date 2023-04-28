#! /bin/bash
const fs = require('fs');

const presentWorkingDirectory = function() {
  const {PWD} = process.env;
  return PWD;
};

const listDirectories = function() {
  return fs.readdirSync('.');
};

const content = fs.readFileSync('./apnaBash.ab', 'utf-8');
const commands = content.split('\n');

const myBash = function(commands) {
  for(const command of commands) {
    if(command === 'pwd') {
      console.log(presentWorkingDirectory());
    }
  }
};

exports.presentWorkingDirectory = presentWorkingDirectory;
exports.listDirectories = listDirectories;
