require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");
const { sequelize } = require("./models");

const PORT = 3000;
app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log("conect to DB");
    })
    .catch((error) => {
      console.log(error);
    });
});
