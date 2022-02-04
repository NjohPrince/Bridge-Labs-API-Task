const createUser = require("./createUser");
const loginUser = require("./login");

module.exports = {
  paths: {
    "/v1/signup": {
      ...createUser,
    },
    "/v1/verify-otp": {
      ...loginUser,
    },
  },
};
