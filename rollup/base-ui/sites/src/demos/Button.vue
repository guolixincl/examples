<template>
  <div class="hello">
    <my-button>Hello</my-button>
  </div>
</template>

<script>
import { Button } from '@lib/Button'

export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button
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
