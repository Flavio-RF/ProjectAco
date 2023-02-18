require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");
const { sequelize } = require("./models");

app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

sequelize
  .authenticate()
  .then(() => {
    console.log("conect to DB");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
