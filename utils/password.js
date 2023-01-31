const bcrypt = require("bcryptjs");
const { Users } = require("../models");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const verifyCredentials = async (email, password) => {
  try {
    const user = await Users.findOne({
      where: { email },
    });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return user;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
  verifyCredentials,
};
