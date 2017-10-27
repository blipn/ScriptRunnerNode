#!/usr/bin/env node
// This script run synchronously the Commands in data.json data field
'use strict';

const { spawn } = require('child_process');

const data = require('./data.json');

function runCommands(cmds) {
  if(cmds.length > 0){
    runCommand(cmds[0][0], cmds[0][1], ()=> {
      cmds.splice(0,1);
      runCommands(cmds);
    });
  }
}

function runCommand(cmd, params, next) {
  const run = spawn(cmd, params);

  run.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  run.stderr.on('data', (data) => {
    console.error(`ERROR: ${data}`);
  });

  run.on('close', (code) => {
    if(code !== 0){
      console.error(`ERROR: child process exited with code ${code}`);
    }
    if(next){
      next();
    }
  });
}

runCommands(data.data);