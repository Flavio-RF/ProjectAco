const { Jobs, Clients } = require("../models");
const { Op } = require("sequelize");

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
      const { date, state, startDate, endDate } = req.query;

      const where = {
        ...(date && { date }),
        ...(state && { state }),
        ...(startDate &&
          endDate && {
            date: {
              [Op.between]: [startDate, endDate],
            },
          }),
      };

      const jobs = await Jobs.findAll({
        attributes: { exclude: ["ClientId"] },
        where: Object.keys(where).length !== 0 ? where : undefined,
      });

      res.status(200).json(jobs);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error to get jobs." });
    }
  },

  showJob: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await Jobs.findByPk(id, {
        include: {
          model: Clients,
          attributes: ["name", "email", "address", "zone", "phone", "mobile"],
        },
        attributes: { exclude: ["ClientId"] },
      });
      if (!job) {
        res.status(400).json({ error: "Job not found." });
      } else {
        res.status(200).json(job);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error." });
      console.log(error);
    }
  },

  updateJob: async (req, res) => {
    const { state, date, time, plague, observations, reason } = req.body;

    try {
      const foundedTask = await Jobs.findByPk(req.params.id);
      if (!foundedTask) {
        res.status(404).json({ error: "Task not found" });
        return;
      }
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
