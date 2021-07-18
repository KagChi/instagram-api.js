const fetch = require("node-fetch");
/**
 * @example user("mrbeast", "yoUrnIceSessionID")
 * @example user("mrbeast")
 * @param {string} user 
 * @param {string} sessionID 
 */
async function user(user, sessionID) {
  if (!user) throw Error('Please enter instagram username');
  let data;
  try {
    if(sessionID) {
     data = await fetch(`https://instagram.com/${user}/?__a=1`, { headers: { cookie: `sessionid=${sessionID}` } }).then(x => x.json())
   } else {
     data = await fetch(`https://instagram.com/${user}/feed/?__a=1`).then(x => x.json())
   }
} catch {
    throw Error('Sorry the server is unavailable or cannot get profile match that username')
  }
  return data.graphql.user
};
module.exports = { user }
