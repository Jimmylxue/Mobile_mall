import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/css/resetUI.css'
import 'vant/lib/button/style'; //Vant的css样式

import {
  Tabbar,
  TabbarItem,
  Toast,
  NavBar,
  Icon,
  Search,
  PullRefresh,
  Swipe,
  SwipeItem,
  Lazyload,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Toast)
  .use(NavBar)
  .use(Icon)
  .use(Search)
  .use(PullRefresh)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
