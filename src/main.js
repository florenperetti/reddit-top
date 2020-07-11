import Vue from 'vue'
import App from './App.vue'
import store from './store'
import DrawerLayout from 'vue-drawer-layout'

Vue.config.productionTip = false
Vue.use(DrawerLayout)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
