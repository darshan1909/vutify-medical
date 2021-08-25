import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// import gallery from './views/gallery';
// import Home from './viewsHome';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  // gallery,
  // Home,
  render: h => h(App)
}).$mount('#app')



