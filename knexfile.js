require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_USER_PW,
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    ssl: {
      rejectUnauthorized: false
    }
  }
};
