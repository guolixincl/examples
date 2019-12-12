const CONFIG = {
  host: 'localhost',
  port: 3306,
  user: 'user',
  password: 'user123',
  database: 'mysql'
}
const mysql = require('mysql')
const pool = mysql.createPool(CONFIG)

const run = (command, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if(error) reject('mysql connection error')
      
      console.log(command)
      connection.query(command, params, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  })
}

module.exports = {
  run
}