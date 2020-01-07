<template>
  <div id="demoPage">
    <div class="demo" v-for="router in routers" :key="router.name">
      <h2>{{router.name + ' 示例'}}</h2>
      <router-link :to="router.path">Demo</router-link>
      <br/><br/>
      <router-link :to="'/doc/' + router.name">Doc</router-link>
    </div>
  </div>
</template>

<script>
import { demoRouters } from '../utils'

export default {
  data: function () {
    return {
      routers: demoRouters
    }
  }
}
</script>
