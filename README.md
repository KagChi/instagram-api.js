## Instalation
```bash
npm install instagram-api.js
```

## Requirement
- NodeJS v14.0.0 or newer

## Usage
```js
const { user } = require("instagram-api.js");

(async () => {
    const userInfo = await user("mrbeast");
    console.log(userInfo);
})();
```