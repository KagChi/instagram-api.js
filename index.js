const fetch = require("node-fetch");
/**
 * 
 * @param {string} user 
 * @param {string} sessionID 
 */
async function user(user, sessionID) {
  if (!user) throw Error('Please enter instagram username');
  try {
    var data;
    try {
      data = await fetch("https://api.hansputera.me/instagram/" + user).then(res => res.json());
    } catch {
      data = await fetch(`https://instagram.com/${user}/?__a=1`, { headers: { cookie: `sessionid=${sessionID}` } }).then(x => x.json())
    }
  } catch {
    throw Error('Sorry the server is unavailable or cannot get profile match that username')
  }
  return data.graphql.user
};
module.exports = { user }
