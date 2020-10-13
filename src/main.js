import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'; // 富文本基于quill
import { getToken } from './utils/token'
import '@/styles/index.scss'
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

router.beforeEach(function (to, from, next) {
  if (getToken() == null && to.path != '/login') {
    //next可以传递一个路由对象作为参数 表示需要跳转到的页面
    next({path: '/login'})
  } else {
    next(); //表示已经登录
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
