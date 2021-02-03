const fetch = require("node-fetch");
async function user(user, sessionID) {
  if (!user) throw Error('Please enter instagram username');
    var data;
    try {
      data = await fetch("https://api.hansputera.me/instagram/" + user).then(res => res.json());
  } catch {
    throw Error('Sorry the server is unavailable or cannot get profile match that username')
  }
  return data.graphql.user
};
module.exports = { user }
