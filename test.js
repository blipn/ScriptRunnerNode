#!/usr/bin/env node
// This script shows how to use this module

const SRN = require("./script");

SRN.runCommand('echo yes', (res) => {
  if(res.includes('yes')){
    console.log('it works ! i got a yes');
  }
});

SRN.runCommands(['echo SRN','ls','ls -al', 'echo it works']);