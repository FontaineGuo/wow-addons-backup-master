import Vue from 'vue'
import VueI18n from "vue-i18n"
import App from './App.vue'


Vue.use(VueI18n);

const en = require("../i18n/en.json");
const zhcn = require("../i18n/zh-cn.json");


const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    zhcn
  }
})


Vue.config.productionTip = false

new Vue({
  compoents:{App},
  render: h => h(App),
  i18n,
  template: "<App/>",
}).$mount('#app')
