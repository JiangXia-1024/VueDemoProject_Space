// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.config.keyCodes.f2 = 113
// 全局注册组件
// Vue.components("User",user)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('dateFormat', function (dateStr, pattern = "") {
  // 根据给定的时间字符串，得到特定的时间
  var dt = new Date(dateStr)

  //   yyyy-mm-dd
  var y = dt.getFullYear()
  var m = dt.getMonth() + 1
  var d = dt.getDate()

  // return y + '-' + m + '-' + d



  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${m}-${d}`
  } else {
    var hh = dt.getHours()
    var mm = dt.getMinutes()
    var ss = dt.getSeconds()

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})

Vue.directive('focus', {
  bind: function (el) { 
  },
  inserted: function (el) { 
    el.focus()

  },
  updated: function (el) {  
  }
})

Vue.directive('color', {

  bind: function (el, binding) {
    el.style.color = binding.value
  }
})
