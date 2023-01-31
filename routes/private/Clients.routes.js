const { Router } = require("express");
const clients = require("../../controllers/ClientsController");
const { validateClient } = require("../../validations/ClientsValidations");
const { validatorMiddlewareBuilder } = require("../../middleware/validator");

const router = Router();

// router.get("/inicio", clients.showClients);
router.get("/", clients.showClients);
router.post(
  "/crear",
  validatorMiddlewareBuilder(validateClient),
  clients.createClient
);
router.get("/:id/editar", clients.showClient);
router.patch(
  "/:id/editar",
  validatorMiddlewareBuilder(validateClient),
  clients.updateClient
);
router.delete("/:id/borrar", clients.destroyClient);

// router.get("/clientes/:id/ficha", clients.showClients);
// router.get("/clientes/ficha/:id/editar", clients.showClients);
// router.get("/clientes/ficha/:id/borrar", clients.showClients);

module.exports = router;
