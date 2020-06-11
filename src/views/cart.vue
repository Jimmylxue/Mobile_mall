<template>
    <div class="root">
        <h3>Cart</h3>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$router.history
        console.log('hhhh',this.$route.meta.tab)
    }
}
</script>

<style lang="less" scoped>

</style>