# instagram-api.js

## Instalation
To Use Api Install Package First
```bash
npm install @kagchi/kag-api
yarn add @kagchi/kag-api
```
A instagram api wrapper
## Usage
```js
const InstaClient = require("instagram-api.js")
const api = new InstaClient()
(async() => {
const userinfo = await api.user("mrbeast")
console.log(userinfo)
}()
