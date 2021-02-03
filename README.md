# instagram-api.js

## Instalation
To Use Api Install Package First
```bash
npm install instagram-api.js
yarn add instagram-api.js
```
A instagram api wrapper
## Usage
```js
const api = require("instagram-api.js")
(async() => {
    const sessionID = "your instagram sessionid" //optional but optimal
    const userinfo = await api.user("mrbeast", sessionID)
    console.log(userinfo)
}()
```