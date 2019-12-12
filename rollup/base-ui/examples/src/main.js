import Vue from 'vue'
import App from './App.vue'

// import MyComponent from '../../dist/base-ui.es'
// Vue.use(MyComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
