import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'

Vue.use(axios)
Vue.use(ElementUI);
Vue.config.productionTip = false

window.onload = function() {
  window.viewportUnitsBuggyfill.init({
      hacks: window.viewportUnitsBuggyfillHacks
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
