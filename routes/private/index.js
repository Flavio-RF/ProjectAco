const ClientsRoutes = require("./Clients.routes");
const JobsRoutes = require("./Jobs.routes");
const { expressjwt } = require("express-jwt");
const { Router } = require("express");
const jwtSecret = process.env.JWT_SECRET;

const router = Router();

router.use(expressjwt({ secret: jwtSecret, algorithms: ["HS256"] }));

router.use("/clients", ClientsRoutes, JobsRoutes);

module.exports = router;
