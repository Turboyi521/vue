import Vue from 'vue'
import App from './components3/App.vue'
import './base.css'

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(App)
})