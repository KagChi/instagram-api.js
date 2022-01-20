## Instalation
```bash
npm install instagram-api.js
```
## Usage
```js
const { user } = require("instagram-api.js");

(() => {
    const userInfo = await user("mrbeast");
    console.log(userInfo);
})();
```