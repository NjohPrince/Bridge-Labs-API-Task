const basicInfo = require("./info");
const server = require("./server");
const tags = require("./tags");
const component = require("./components");
const user = require("./users");

module.exports = {
  ...basicInfo,
  ...server,
  ...tags,
  ...user,
  ...component,
};
