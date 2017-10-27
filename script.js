#!/usr/bin/env node
// This script run synchronously the Commands in data.json data field
'use strict';

const { exec } = require('child_process');
const data = require('./data.json');

function runCommands(cmds) {
  if(cmds && cmds.length > 0){
    runCommand(cmds[0], ()=> {
      cmds.splice(0,1);
      runCommands(cmds);
    });
  }
}

function runCommand(cmd, next) {
  let res = "";
  const run = exec(cmd);

  run.stdout.on('data', (data) => {
    res+=data;
    console.log(`${data}`);
  });

  run.stderr.on('data', (data) => {
    res+=data;
    console.error(`ERROR: ${data}`);
  });

  run.on('close', (code) => {
    if(code !== 0){
      console.error(`ERROR: child process exited with code ${code}`);
    }
    if(next){
      next(res);
    }
  });
}

runCommands(data.data);

module.exports = {
  runCommand,
  runCommands,
};