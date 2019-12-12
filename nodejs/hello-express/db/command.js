const INSERT = 'INSERT INTO user (id, name, age) values (0, ?, ?)'
const SELECTALL = 'select * from my_users'
const SELECT = 'select * from my_users where id = ?'
const DELETE = 'delete from my_users where id = ?'
const UPDATE = 'update my_users set name=?, age=? where id=?'

module.exports = {
  INSERT,
  SELECTALL,
  SELECT,
  DELETE,
  UPDATE
}