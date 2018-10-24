import Vue from 'vue'
import App from './App.vue'
import Annuncement from './Annuncement.vue'
import Article from './Article.vue'
Vue.component("app-article",Article)
Vue.component("app-annuncement",Annuncement)
new Vue({
  el: '#app',
  render: h => h(App)
})
