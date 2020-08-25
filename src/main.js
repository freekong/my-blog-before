import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// el-input框只能输入数字限制
Vue.directive('enterNumber', {
  inserted: function (el) {
    el.addEventListener("keypress", function(e) {
      e = e || window.event;
      let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode;
      let re = /\d/;
      if (!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    });
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
