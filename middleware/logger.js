module.exports = {
  logger: function (req, res, next) {
    req.time = Date.now();

    console.log(`Method: ${req.method} URL: ${req.url}`);

    next();
  },
};
