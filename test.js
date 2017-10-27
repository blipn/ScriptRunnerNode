#!/usr/bin/env node
// This script shows how to use this module

const SRN = require("./script");

SRN.runCommand('ls -al', () => {
  console.log('it works');
});

SRN.runCommands(['echo SRN','ls','ls -al', 'echo it works']);