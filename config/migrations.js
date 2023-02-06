require("dotenv").config();

const { exec } = require("child_process");

module.exports = {
  migrate: () => {
    exec(
      `npx sequelize db:migrate --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  migrateRollback: () => {
    exec(
      `npx sequelize db:migrate:undo --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  migrateReset: () => {
    exec(
      `npx sequelize db:migrate:undo:all --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  seed: () => {
    exec(
      `npx sequelize-cli db:seed:all --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  seedRollBack: () => {
    exec(
      `npx sequelize-cli db:seed:undo --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  seedReset: () => {
    exec(
      `npx sequelize-cli db:seed:undo:all --env ${process.env.APP_ENV}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      }
    );
  },
  init: () => {
    exec(
      `npx sequelize-cli db:migrate:undo:all --env ${process.env.APP_ENV}; npx sequelize-cli db:migrate --env ${process.env.APP_ENV}; npx sequelize-cli db:seed:all --env ${process.env.APP_ENV};`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`${stdout}`);
        }

        console.log(`${stdout}`);
        console.warn(`${stderr}`);
      },
      console.log(
        `npx sequelize-cli db:migrate:undo:all --env ${process.env.APP_ENV}; npx sequelize-cli db:migrate --env ${process.env.APP_ENV}; npx sequelize-cli db:seed:all --env ${process.env.APP_ENV}`
      )
    );
  },
};
