const login = (req, res) => {
  res.status(200).send({ message: "Login route" });
};

const register = (req, res) => {
  res.status(200).send({ message: "Register route" });
};

module.exports = { login, register };
