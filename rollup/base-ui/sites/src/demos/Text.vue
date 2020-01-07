<template>
  <div class="hello">
    <h1>Text Demo</h1>
    <my-text>Hello</my-text>
  </div>
</template>

<script>
import { Text } from '@lib/Text'

export default {
  name: 'HelloWorld',
  components: {
    [Text.name]: Text
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
