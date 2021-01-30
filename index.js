const request = require("axios");
  async function user(user) {
  if (!user) throw Error('Please enter instagram username');
    const data = await request.get("https://api.hansputera.me/instagram/" + user).then(res => res.data.results.graphql.user);
    return data;
  };

module.exports = { user };
