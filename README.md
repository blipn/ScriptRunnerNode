**ScriptRunnerNode**

let you run some bash commands in a shell from node.js

This package run with no dependency 

Working on node 6

---

**Launch as Standalone :**

`chmod +x ./script.js`

`./script.js` or `sudo ./script.js`

---

**Or import it :**

```javascript
const SRN = require("./script");
SRN.runCommand('ls -al', () => {
  console.log('it works');
});
```
**Or** 
```javascript
SRN.runCommands(['echo SRN','ls','ls -al', 'echo it works']);
```