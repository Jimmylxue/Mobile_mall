<template>
  <div class="goodDetail">
    <div class="container">
      <nav>
        <van-nav-bar
          title=""
          left-text=""
          right-text=""
          left-arrow
          class="nav"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <template #title>
            <div class="navtitle">
              <span :class="active==1?'active':''" @click="active = 1" >商品</span>
              <span :class="active==2?'active':''" @click="active = 2">评论</span>
              <span :class="active==3?'active':''" @click="active = 3">详情</span>
            </div>
          </template>
          <template #right>
            <van-icon color="#F7A0A0" size="22" name="apps-o" />
          </template>
        </van-nav-bar>
      </nav>
      <!-- 图片展示 -->
      <div class="imgcontainer">
        <van-swipe class="my-swipe" @change="onChange" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="@/assets/img/good/01.jpg" width="100%" height="100%" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/img/good/02.jpg" width="100%" height="100%" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/img/good/03.jpg" width="100%" height="100%" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/img/good/04.jpg" width="100%" height="100%" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/img/good/05.jpg" width="100%" height="100%" alt=""></van-swipe-item>
          <template #indicator>
            <div class="conta">
              <van-icon size="25" color="#999999" name="search" />
              <div class="customIndicator">
                {{ current + 1 }}/4
              </div>
            </div>
          </template>
        </van-swipe>
    
        
      </div>

      <!-- 商品描述信息 -->
      <div class="goodmsg">
        <div>
          <van-icon name="star-o" />
          收藏
        </div>
        <div>
          花花公子西服男中年商务休闲羊毛西装春秋薄款单件外套纯色父亲装
        </div>
        <div>
          推荐理由
        </div>
        <div>商务休闲外衣，演绎东方绅士儒雅</div>
        <div>
          <div><span>发货</span>eeff</div>
          <div><span>邮费：满100包邮</span><span>已销售20</span></div>
        </div>
      </div>
      <!-- 底部导航栏 -->
      <van-goods-action class="footbar">
        <van-goods-action-icon icon="wap-home-o" @click="$router.push('/home')" text="首页" dot />
        <van-goods-action-icon icon="chat-o" text="客服" badge="5" />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:1,
      current: 0,
    }
  },
  methods:{
    onChange(index) {
      this.current = index;
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  .vant-icon{
    font-size: 20px;
  }
}
nav{
  width: 100%;
  height: 46px;
  position: absolute;
  top: 0;
  opacity: 0;
  .nav{
    width: 100%;
    background-color: rgb(255, 68, 68);
    position: fixed;
  }
}
.navtitle{
  span{
    margin: 0 10px;
    display: inline-block;
    color: rgb(247,160,160);
  }
  .active{
    color: #fff;
    // background-color: #fff;
    border-bottom: 2px solid #fff;
  }
}

// 轮播
.imgcontainer{
  position: relative;
}
.my-swipe .van-swipe-item {
  width: 375px;
  height: 375px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  position: relative;
  
}
.conta{
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  .customIndicator {
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}

// 商品信息描述
.goodmsg{
  padding: 0 10px;
  padding-bottom: 10px;
  background-color: #fff;
  &>div:nth-child(1){
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  &>div:nth-child(2){
    color: #222222;
    font-size: 16.5px;
    font-weight: bold;
  }
  &>div:nth-child(3){
    height: 25px;
    color: #666;
    line-height: 25px;
    margin-bottom: 10px;
        margin-top: 10px;
  }
  &>div:nth-child(4){
    width: 95%;
    height: 41px;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    align-items: center;
    padding-left: 15px;
    position: relative;
    border-right: 10px;
    &::before{
      content: '';
      width: 15px;
      position: absolute;
      height: 15px;
      left: 20px;
      top: -7.5px;
      transform: rotate(45deg);
      background-color: #f4f4f4;
    }
  }
  &>div:nth-child(5){
    display: flex;
    padding-top: 25px;
    color: #2b2b2b;
    justify-content: space-between;
    &>div:nth-child(1){
      height: 16px;
      display: flex;
      align-items: center;
      border-right: 1px solid #929292;
          padding-right: 10px;
      span{
        color: #929292;
        margin-right: 30px;
      }
    }
    &>div:nth-child(2){
      height: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 250px;
      span:nth-child(2){
        color: #929292;
      }
    }
  }
}

</style>