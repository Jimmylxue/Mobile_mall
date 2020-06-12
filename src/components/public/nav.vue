<template>
  <div class="root navs">
    <div class="container">
      <div><van-icon class="icon" size="20" name="send-gift-o" />分类</div>
    <div><input type="text" placeholder="请输入想搜索的关键词"></div>
    <div><van-icon class="icon" size="20" name="logistics" />购物车</div>
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.navs{
  .container{
    width: 100%;
  height: 50px;
  background-color: rgb(162, 39, 249);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  // font-weight: bold;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
      height: 30px;
      width: 220px;
      border-radius: 20px;
      border: none;
      outline: none;
      padding-left: 50px;
    }
  }
  }
  
}
</style>