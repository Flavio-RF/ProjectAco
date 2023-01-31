const { Jobs, Clients } = require("../models");

module.exports = {
  createJob: async (req, res) => {
    try {
      const ClientId = req.params.id;

      const { state, date, time, plague, observations, reason } = req.body;

      const createJobs = await Jobs.create({
        state,
        date,
        time,
        plague,
        observations,
        reason,
        ClientId,
      });

      res.status(201).json(createJobs);
    } catch (error) {
      res.status(400).json({ error: "Cannot create a new job." });
      console.log(error);
    }
  },
  showJobs: async (req, res) => {
    try {
      const allJobs = await Jobs.findAll({
        where: {
          state: false,
        },
      });
      res.status(200).json(allJobs);
    } catch (error) {
      res.status(400).json({ error: "Error to get jobs." });
      console.log(error);
    }
  },
  showJob: async (req, res) => {
    try {
      const Job = await Jobs.findByPk(req.params.id);
      if (!Job) {
        res.status(400).json({ message: "Job not found." });
      } else {
        res.status(200).json(Job);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error." });
      console.log(error);
    }
  },
  updateJob: async (req, res) => {
    const { state, date, time, plague, observations, reason } = req.body;
    try {
      const updatedRows = await Jobs.update(
        {
          state,
          date,
          time,
          plague,
          observations,
          reason,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (updatedRows) {
        res.json({ message: "Update successful." });
      } else {
        console.log("Jobs not found");
        res.status(400).json({ error: "Jobs not found." });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error." });
    }
  },
  destroyJob: async (req, res) => {
    try {
      const destroyedJobs = await Jobs.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!destroyedJobs) {
        res.status(400).json({ message: "Job not found." });
      } else {
        res.json({ message: "Delete successful." });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error." });
      console.log(error);
    }
  },
};
