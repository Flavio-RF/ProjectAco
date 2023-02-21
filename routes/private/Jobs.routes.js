const { Router } = require("express");
const Jobs = require("../../controllers/JobsController");
const { validatorMiddlewareBuilder } = require("../../middleware/validator");
const {
  validateCreateJobs,
  validateUpdateJobs,
} = require("../../validations/jobsValidations");

const router = Router();

router.get("/tasks", Jobs.showJobs);

router.post(
  "/:id/newtasks",
  validatorMiddlewareBuilder(validateCreateJobs),
  Jobs.createJob
);

router.get("/tasks/:id/edit", Jobs.showJob);

router.patch(
  "/tasks/:id/edit",
  validatorMiddlewareBuilder(validateUpdateJobs),
  Jobs.updateJob
);

router.delete("/tasks/:id/del", Jobs.destroyJob);

module.exports = router;
