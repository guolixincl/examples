
let demoRouters = []
// const files = require.context('../views', false, '')
const demoFiles = require.context('../demos', false)
demoFiles.keys().forEach(file => {
  // file demo: ./button, ./button.vue, ./text,
  if (file.indexOf('.vue') < 0) {
    // fileBase demo: button, text
    const fileBase = file.substr(file.lastIndexOf('/') + 1)
    demoRouters.push({
      path: '/' + fileBase.toLowerCase(),
      name: fileBase,
      component: demoFiles(file).default
    })
  }
})

export { demoRouters }
