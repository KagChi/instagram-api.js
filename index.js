const request = require("axios");
const { author, version } = require("./package.json");
module.exports = class KagApi {
  constructor() {
    this.version = version;
    this.author = author;
  }
  async instagram(user) {
  if (!user) throw Error('Please enter instagram username');
    const data = await request.get("https://instagram.hanifdwyputra.xyz/?username=" + user).then(res => res.data.graphql);
    return data;
  };
 };
