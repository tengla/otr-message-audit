// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user:     process.env.PGUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 1,
      max: 5
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user:     process.env.PGUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 1,
      max: 5
    },
    migrations: {
      tableName: 'migrations'
    }
  },
};
