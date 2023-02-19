module.exports = {
  logger: function (req, res, next) {
    req.time = new Date().toLocaleString({ hour12: false });

    console.log(`Method: ${req.method} URL: ${req.url} Time: ${req.time}`);

    next();
  },
};
