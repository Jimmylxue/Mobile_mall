<template>
  <div id="app">
    <router-view>132456</router-view>
    <footer v-show="share_show" >
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签a</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
// import footbar from '@/components/public/footBar'
// import {mapState} from 'vuex'
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
    // ...mapState([])
  },
  mounted(){
    console.log(this.router)
    console.log('555',this.$route.meta.tab)
    this.share_show = this.$route.meta.tab
  },
  methods:{
    tohome(){
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100vh;
    background-color: antiquewhite;
    padding-bottom: 60px;
    position: relative;
  }
  footer{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
