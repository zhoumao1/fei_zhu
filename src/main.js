import Vue from 'vue'
import App from './App'

// import Element from 'element-ui'
// 引入 适配文件

import './assets/js/adjust_two'
import './assets/css/base.css'
import './plugins/element.js'

// Vue.use(Element)

new Vue({
	el: '#app',
	render: c => c(App)
})