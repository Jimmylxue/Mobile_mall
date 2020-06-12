<template>
    <div class="root home">
        <div class="nav">
            <navs class="smallnav"></navs>
        </div>
        <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
        <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
        <template #pulling="props">
            <img
                class="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                :style="{ transform: `scale(${props.distance / 80})` }"
            />
        </template>

        <!-- 释放提示 -->
        <template #loosing>
            <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
        </template>

        <!-- 加载提示 -->
        <template #loading>
            <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
        </template>
            <div class="conatiner">
                <p class="location"><van-icon class="icon" name="location" />获取当前地址失败</p>
                <!-- 轮播图 -->
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <!-- 标签 -->
                <div class="tag">
                    <div class="cont">
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                    </div>
                    <div class="cont">
                        <div>
                            <img src="@/assets/img/tag/tag01.png" width="40px" height="40px" alt="">
                            限时抢购
                        </div>
                    </div>
                </div>
            </div>
        </van-pull-refresh>
        <!-- <h1>12456</h1> -->
    </div>
</template>

<script>
import { Toast } from 'vant';
import navs from '@/components/public/nav.vue'
export default {
    components:{
        navs
    },
    data(){
        return {
            count: 0,
            isLoading: false,
        }
    },
    methods:{
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
        },
    }
}
</script>

<style lang="less" scoped>
.home{
    // height: 100vh;
    background-color: rgb(245, 245, 245);
}
.nav{
    width: 100%;
    height: 50px;
    z-index: 55;
    .smallnav{
        position: fixed;
        top: 0;
    }
}
.doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
}
.conatiner{
    width: 100%;
    // height: 50vh;
    background-color: rgb(245,245,245);
    .location{
        padding:5px 10px 5px 10px;
        color: #fff;
        display: flex;
        align-items: center;
        background-color: rgb(162, 39, 249);
        .icon{
            margin-right: 5px;
        }
    }
    // 标签
    .tag{
        width: 95%;
        height: 140px;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 10px;
        display: -webkit-box;
        overflow-x: auto;
        .cont{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            div{
                width: 70px !important;
                height: 70px;
                flex-grow: 1;
                // background-color: skyblue;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                color: #797474;
            }
        }
        
    }
}
// 轮播
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    // margin-top: 10px;
}
</style>