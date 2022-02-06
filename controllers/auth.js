const { encrypt, compare } = require("../services/crypto");
const { generateOTP } = require("../services/otp");
const { sendMail } = require("../services/mail");
const User = require("../models/user");

module.exports.logout = async (req, res) => {
  console.log("Logout initiated");
  const { otp } = req.body;
  const user = await User.findOne({
    otp,
  });
  if (!user) {
    return res.status(404).json({ message: "Invalid OTP!" });
  }
  const filter = { otp: otp };
  const updatedUser = await User.updateOne(filter, {
    $set: { active: false, otp: null },
  });
  return res.status(200).json({ message: "User signed out!" });
};

module.exports.signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  const isExisting = await findUserByEmail(email);
  if (isExisting) {
    return res.send(`Account with email ${email} already exists`).status(400);
  }
  // create new user
  const newUser = await createUser(name, email, password);
  if (!newUser[0]) {
    return res.status(400).send({
      message: "Unable to create new user",
    });
  }
  res.send(newUser).status(201);
};

module.exports.verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateUserSignUp(email, otp);
  res.send(user);
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return false;
  }
  return user;
};

const createUser = async (name, email, password) => {
  const hashedPassword = await encrypt(password);
  const otpGenerated = generateOTP();
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    otp: otpGenerated,
  });
  if (!newUser) {
    return [false, "Unable to sign you up"];
  }
  try {
    await sendMail({
      to: email,
      OTP: otpGenerated,
    });
    return [true, newUser];
  } catch (error) {
    return [false, "Unable to sign up, Please try again later", error];
  }
};

const validateUserSignUp = async (email, otp) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return [false, "User not found"];
  }
  if (user && user.otp !== otp) {
    return [false, "Invalid OTP"];
  }
  const updatedUser = await User.findByIdAndUpdate(user._id, {
    $set: { active: true },
  });
  return [true, updatedUser];
};
