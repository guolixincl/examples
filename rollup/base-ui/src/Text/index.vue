<template>
  <h1>Hello World</h1>
</template>

<script>
export default {
  name: 'my-text',
  created() {
    console.log('hello world')
  }
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>