const basicInfo = require("./info");
const server = require("./server");
const tags = require("./tags");
const component = require("./components");

module.exports = {
  ...basicInfo,
  ...server,
  ...tags,
  ...component,
};
