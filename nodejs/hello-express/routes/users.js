var express = require('express');
var router = express.Router();
var command = require('../db/command')
var mysql = require('../db/sql')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await mysql.run(command.SELECTALL)
    res.send(result)
  } catch(err) {
    res.status(500).send(err)
  }
});

router.get('/delete', async (req, res, next) => {
  try {
    const id = req.query.id
    console.log(id, command.DELETE)
    const result = await mysql.run(command.DELETE, id)
    res.send(result)
  } catch(err) {
    res.status(500).send(err)
  }
});

router.get('/:user_id', async (req, res, next) => {
  try {
    const id = req.params.user_id
    const result = await mysql.run(command.SELECT, id)
    res.send(result)
  } catch(err) {
    res.status(500).send(err)
  }
});

module.exports = router;
