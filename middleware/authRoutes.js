const verifyToken = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res
      .status(401)
      .json({ error: "invalid token, or no authorization token was found" });
  } else {
    next(err);
  }
};

module.exports = { verifyToken };
