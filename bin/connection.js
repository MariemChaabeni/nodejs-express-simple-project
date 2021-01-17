const Sequelize = require('sequelize')

/** authentification  */
const sequelize = new Sequelize(
  'nodejs',
  "root",
  "root",
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    // logging: false,
    // define: { paranoid: true },
    dialectOptions: {
      // options: {
      // 
      encrypt: false
      // }
    },
    pool: {
      idle: 30000,
      min: 1,
      max: 20
    }
  }
)

/** synchronize the database (create models where they arn't created yet) */
sequelize
  .sync()
  .then(() => {
    console.log('Connection with dataBase has been established!')
  })
  .catch(err => {
    console.log(err)
  })

module.exports = sequelize
