<template>
    <div class="root">
        <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){},
        onClickRight(){},
    }
}
</script>

<style lang="less" scoped>

</style>