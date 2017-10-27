ScriptRunnerNode

Launch as Standalone :

`chmod +x ./script.js`

`sudo ./script.js`

Or import it :

```javascript
const SRN = require("./script");
SRN.runCommand('ls -al', () => {
  console.log('it works');
});
```
Or 
```javascript
SRN.runCommands(['echo SRN','ls','ls -al', 'echo it works']);
```