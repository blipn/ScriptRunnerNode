**ScriptRunnerNode**

Lets you run some bash commands in a shell from node.js

This package runs with no dependency 

Working on node 6

---

**Launch as Standalone :**

`chmod +x ./script.js`

`./script.js` or `sudo ./script.js`

---

**Or import it :**

```javascript
SRN.runCommand('echo yes', (res) => {
  if(res.includes('yes')){
    console.log('it works, I got a yes !');
  }
});
```
**Or** 
```javascript
SRN.runCommands(['echo SRN','ls','ls -al', 'echo it works']);
```