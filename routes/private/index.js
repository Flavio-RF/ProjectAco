const ClientsRoutes = require("./Clients.routes");
const JobsRoutes = require("./Jobs.routes");
const { expressjwt } = require("express-jwt");
const { Router } = require("express");
const { verifyToken } = require("../../middleware/authRoutes");
const jwtSecret = process.env.JWT_SECRET;

const router = Router();

// router.use(verifyToken);

router.use(
  expressjwt({ secret: jwtSecret, algorithms: ["HS256"] }),
  verifyToken
);

router.use("/clients", ClientsRoutes, JobsRoutes);

module.exports = router;
