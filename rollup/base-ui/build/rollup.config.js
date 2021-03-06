import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only' // 提取css
import CleanCSS from 'clean-css'   // 压缩css
import { writeFileSync, existsSync, mkdirSync } from 'fs' // 写文件

module.exports = {
  input: 'components/index.js', // 入口
  output: [{
    file: 'lib/base-ui.umd.js', // 打包文件名
    name: 'base-ui',
    format: 'umd', // 打包模块支持方案，可选 amd, cjs, es, iife, umd
  }, {
    file: 'lib/base-ui.es.js',
    format: 'es'
  }],
  plugins: [
    // css({output: 'lib/base-ui.css'}),
    css({
      output(style) {
        // 压缩 css 写入 lib/base-ui.css
        if (!existsSync('lib')) {
          mkdirSync('lib')
        }
        writeFileSync('lib/base-ui.css', new CleanCSS().minify(style).styles)
      }
    }),
    vue({
      // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
      css: false,
      normalizer: '~rollup-plugin-vue/runtime/normalize',
      // styleInjector : '~rollup-plugin-vue/runtime/browser',
    }),
    // terser(),
    resolve(),
    babel({
      exclude: ['node_modules/**']
    }),
    commonjs()
  ]
}