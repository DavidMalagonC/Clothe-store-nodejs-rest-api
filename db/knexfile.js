module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'clothes_store',
      user:     'root',
      password: 'secret'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}