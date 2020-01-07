
const fs = require('fs')

const OUTPUT_DIR = 'lib'
const COMPONENTS_DIR = 'components'

// create dir if not exist
function makesure(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

module.exports = {
  OUTPUT_DIR,
  COMPONENTS_DIR,
  makesure
}