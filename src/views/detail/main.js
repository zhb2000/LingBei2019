import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [{ path: '/App.vue', component: App }]

const router = new VueRouter({ routes: routes })

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
