import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home.vue")
  },
  {
    path:'/cart',
    name:'cart',
    meta:{
      tab:true,
      msg:'jimmy'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
