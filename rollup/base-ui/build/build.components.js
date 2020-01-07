const rollup = require('rollup')
const chalk = require('chalk');
const glob = require('glob')
const path = require('path')
const fs = require('fs')
const { OUTPUT_DIR, COMPONENTS_DIR, makesure } = require('./config.js')
const { getRollupConfig } = require('./rollup.components.config.js')

makesure(OUTPUT_DIR)

function build() {
  const componentsPath = glob.sync(`./${COMPONENTS_DIR}/!(*.*)`)
  componentsPath.forEach(componentPath => {
    // get componet folder name
    const componentDir = path.parse(componentPath).base

    // create destination folder
    makesure(`${OUTPUT_DIR}/${componentDir}`)

    // build static files to destination
    buildStaticFiles(componentDir)

    // rollup files to destination
    buildComponents(componentDir)
  })
}

function buildStaticFiles(component) {
  const filesPath = glob.sync(`./${COMPONENTS_DIR}/${component}/*.md`)
  filesPath.forEach(file => {
    const fileBase = path.parse(file).base
    const desFile = `${OUTPUT_DIR}/${component}/${fileBase}`
    fs.copyFileSync(file, desFile)
  })
}

async function buildComponents(componentDir) {
  const componentConfig = getRollupConfig(componentDir)

  try {
    const bundle = await rollup.rollup(componentConfig.inputOptions)
    await bundle.write(componentConfig.outputOptions);
    console.log('component ' + componentDir + ' are build successfully')
  } catch (error) {
    console.log(chalk.red(error))
  }
}

console.log(chalk.yellow('begin to build components...'))

build()