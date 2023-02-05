const jwt = require("jsonwebtoken");
const { verifyCredentials } = require("../utils/password");

module.exports = {
  login: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await verifyCredentials(email, password);
      if (user) {
        const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        res.json({
          accessToken: token,
        });
      } else {
        res.status(400).json({ error: "invalid credentials." });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error." });
    }
  },
};
