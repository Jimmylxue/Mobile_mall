<template>
  <div id="app">
    <router-view>132456</router-view>
    <footer v-show="tabState" >
      <van-tabbar v-model="active">
        <van-tabbar-item to="/home" icon="bag-o">首页</van-tabbar-item>
        <van-tabbar-item to="/cart" badge="5" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/Community" icon="friends-o">社群</van-tabbar-item>
        <van-tabbar-item icon="diamond-o">会员商城</van-tabbar-item>
        <van-tabbar-item dot icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
// import footbar from '@/components/public/footBar'
import {mapMutations,mapState} from 'vuex'
export default {
  // components:{
  //   footbar
  // }
  data(){
    return {
      active:0,
      share_show:null
    }
  },
  computed:{
    ...mapState(['tabState'])
  },
  watch:{
    $route(to){
      if(to.meta.tab){
        this.changeTabState(to.meta.tab)
        return
      }
      this.changeTabState(false)
    }
  },
  mounted(){
  },
  methods:{
    ...mapMutations(['changeTabState'])
  }
}
</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100vh;
    background-color: antiquewhite;
    // padding-bottom: 60px;
    position: relative;
    font-size: 14px;
  }
  footer{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
