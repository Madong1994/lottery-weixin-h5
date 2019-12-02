<template>
    <div id="tabbarNav">
        <van-tabbar z-index="999" v-on:change="changeActive" active-color="#07c160" v-model="active" safe-area-inset-bottom>
            <van-tabbar-item replace
    to="/" icon="wap-home">首页</van-tabbar-item>
            <!--<van-tabbar-item icon="pending-evaluate">社区</van-tabbar-item>-->
            <van-tabbar-item icon="shopping-cart" info="5">购物车</van-tabbar-item>
            <van-tabbar-item icon="column" info="5">订单</van-tabbar-item>
            <van-tabbar-item 
    to="/mine" icon="contact" info="2">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {
        Tabbar,
        TabbarItem,
    } from 'vant';

    export default {
        name: 'tabbarNav',
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                active: 0
            };
        },
        methods: {
            changeActive: function(e) {
                console.log("----")
                console.log(e)
            }
        }
    };
</script>

<style scoped>

</style>