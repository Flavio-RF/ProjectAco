# Proyecto ACO

Este proyecto es una aplicación web construida con Node.js y Express. Está diseñada para permitir la creación de bases de datos relacionales utilizando Sequelize. El proyecto también incluye scripts para realizar migraciones y semillas de datos.

## Dependencias

Este proyecto depende de los siguientes paquetes:

- bcryptjs
- cors
- dotenv
- express
- express-jwt
- express-validator
- jsonwebtoken
- moment
- mysql2
- pg
- pg-hstore
- sequelize

## Scripts disponibles

Este proyecto incluye los siguientes scripts:

- `dev`: inicia el servidor en modo desarrollador usando nodemon.

- `start`: inicia el servidor en modo producción usando node.

- `migrate:up`: ejecuta todas las migraciones.

- `migrate:undo`: deshace la última migración realizada.

- `migrate:undo:all`: deshace todas las migraciones realizadas.

- `seed:up`: ejecuta todas las seeders.

- `seed:undo`: deshace la última seed realizada.

- `seed:undo:all` : deshace todas las seeds realizadas.

- `init` : inicializa el proyecto creando la base de datos y ejecutando todas las migraciones y seeds disponibles.

# Como iniciar el proyecto:

### instalar modulos:
- "npm i"

### configurar archivo ".env"
- DB_USER="root"

- DB_PASSWORD="root"

- DB_NAME="db_test"

- DB_PORT="0000"

- JWT_SECRET="secret"

- APP_ENV="test"

### se inicializa con:
- "npm run dev"
