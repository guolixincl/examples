const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const CleanCSS = require('clean-css')
const fs = require('fs')
const path = require('path')
const { OUTPUT_DIR, COMPONENTS_DIR } = require('./config')

function getRollupConfig(component) {
  const componentDir = path.resolve(OUTPUT_DIR, component)
  const inputOptions = {
    input: `${COMPONENTS_DIR}/${component}/index.js`, // 入口
    plugins: [
      // css({output: 'dist/base-ui.css'}),
      css({
        output(style) {
          // 压缩 css 写入 dist/base-ui.css
          fs.writeFileSync(`${componentDir}/index.css`, new CleanCSS().minify(style).styles)
        }
      }),
      vue({
        // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
        css: false,
        normalizer: '~rollup-plugin-vue/runtime/normalize',
        // styleInjector: '~rollup-plugin-vue/runtime/browser',
      }),
      // terser(),
      resolve(),
      babel({
        exclude: ['node_modules/**']
      }),
      commonjs()
    ]
  }

  const outputOptions = {
    file: `${componentDir}/index.js`,
    format: 'umd',
    name: 'my'
  }

  return {
    inputOptions,
    outputOptions
  }
}

module.exports = {
  getRollupConfig
}