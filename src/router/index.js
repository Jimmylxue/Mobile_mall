import Vue from "vue";
import VueRouter from "vue-router";
// import vuex from 'vuex'

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
    meta:{
      tab:true
    },
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
  },
  {
    path:'/Community',
    name:'Community',
    meta:{
      tab:true,
      msg:'jimmy'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Community.vue"),
      children:[
        {
          path:'chatList',
          name:'chatList',
          meta:{
            tab:true
          },
          component:()=>import('../components/Community/chatList.vue')}
      ],
  },
  {
    path:'/GoodDetail',
    name:'GoodDetail',
    meta:{
      tab:false
    },
    component:()=>import('../views/Gooddetail')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 路由守卫
// router.beforeEach(()=>{
//   console.log(this)
//   // mapMutations.changeTabState(to.meta.tab)
//   // $store.commit('changeTabState',to.meta.tab)
// })

export default router;
