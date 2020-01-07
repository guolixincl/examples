<template>
  <div>
    <markdown-it-vue :content="content"/>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue
  },
  computed: {
    content () {
      let result = ''
      try {
        const file = require(`@lib/${this.$route.params.component}/README.md`)
        if (file) {
          result = file
        }
      } catch (error) {
      }
      return result
    }
  }
}
</script>
