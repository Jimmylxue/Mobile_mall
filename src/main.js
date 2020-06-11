import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/css/resetUI.css'
import 'vant/lib/button/style'; //Vant的css样式

import {Tabbar,TabbarItem,Toast,NavBar } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Toast).use(NavBar)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
