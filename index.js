const request = require("axios");
const { author, version } = require("./package.json");
  async user(user) {
  if (!user) throw Error('Please enter instagram username');
    const data = await request.get("https://instagram.hanifdwyputra.xyz/?username=" + user).then(res => res.data.graphql.data);
    return data;
  };
 };

module.exports = instagram;
