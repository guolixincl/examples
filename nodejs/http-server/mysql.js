var mysql = require('mysql')
var config = {
  host     : 'localhost',
  user     : 'user',
  password : 'user123',
  database : 'mysql'
}
var connection = mysql.createConnection(config);

connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

connection.query('SELECT * from my_users', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()