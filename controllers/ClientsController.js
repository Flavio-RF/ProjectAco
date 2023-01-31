const { Clients, Jobs } = require("../models");

module.exports = {
  createClient: async (req, res) => {
    try {
      const createClient = await Clients.create({
        name: req.body.name,
        address: req.body.address,
        zone: req.body.zone,
        email: req.body.email,
        phone: req.body.phone,
        mobile: req.body.mobile,
      });
      res.status(201).json(createClient);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  showClients: async (req, res) => {
    try {
      const clients = await Clients.findAll();
      res.status(200).json(clients);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  showClient: async (req, res) => {
    try {
      const client = await Clients.findByPk(req.params.id, {
        include: {
          model: Jobs,
        },
      });
      console.log(client);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  updateClient: async (req, res) => {
    try {
      const foundedClient = await Clients.findByPk(req.params.id);
      if (!foundedClient) {
        res.status(404).json({ error: "Client not found" });
        return;
      }
      await Clients.update(
        {
          name: req.body.name,
          address: req.body.address,
          zone: req.body.zone,
          email: req.body.email,
          phone: req.body.phone,
          mobile: req.body.mobile,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.json({ message: "Update successful." });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  destroyClient: async (req, res) => {
    const destroyedClient = await Clients.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!destroyedClient) {
      res.status(400).json({ error: `Not found ID: ${req.params.id}` });
    } else {
      res.json({ message: "Delete successful" });
    }
  },
};
