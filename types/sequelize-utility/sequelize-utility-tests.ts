import { Sequelize, Options, Model } from 'sequelize'
import { SequelizeHelper } from 'sequelize-utility'

const dbConfig: Options = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  dialect: 'postgres',
  logging: false,
  timezone: '+07:00',
  define: {
    underscored: true
  }
}

const sequelize = new Sequelize(dbConfig)
const dbHelper = new SequelizeHelper([sequelize], Sequelize)

dbHelper.closeAllConnections()
dbHelper.dropAllTablesFromAllConnections()
dbHelper.dropAllTablesFromConnection(sequelize)
dbHelper.establishConnections()
dbHelper.sync()
dbHelper.syncAllForce()
dbHelper.syncForce()