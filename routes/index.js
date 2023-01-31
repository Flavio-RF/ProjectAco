const privateRoutes = require("./private/index");
const tokenGenerate = require("./public/tokenGenerate");

module.exports = (app) => {
  app.use(tokenGenerate);
  app.use(privateRoutes);
};
