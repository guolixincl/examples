export default {
  input: "main.js",
  output: [{
     file: 'dist/bundle.js',
     format: 'cjs'
  }, {
     file: 'dist/umd.js',
     format: 'umd',
     name: 'myBundleName'
  }]
}