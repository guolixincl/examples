<template>
  <div class="hello">
    {{msg}}
    <my-button></my-button>
  </div>
</template>

<script>
import { Button } from '../../../dist/button/index.es'

export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button
  },
  props: {
    msg: String
  }
}
</script>
