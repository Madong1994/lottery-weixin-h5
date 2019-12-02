<template>
  <div class="mine">
      <div class=" mineicon sm-width-100-per sm-layout-center-vertical" style="height:15rem;">
          <van-image round width="6rem" height="6rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="sm-width-50-per sm-text-size-1p3rem" style="height: 2rem;color: #ffffff">马丁嘛</div>
      </div>
    
      <div class="sm-width-100-per ms-layout-start-horizontal" style="height:2rem;background:rgba(255, 255, 255, 0.4)">
        
      </div>
      <van-grid class="" :border="true" :column-num="3">
    <van-grid-item class="sm-text-size-1p9rem" style="color: rgba(3, 169, 244, 0.7)" icon="orders-o" text="订单" />
    <van-grid-item class="sm-text-size-1p9rem" style="color: rgba(244, 67, 54, 0.7) " icon="point-gift-o" text="我的抽奖" />
    <van-grid-item class="sm-text-size-1p9rem" style="color: rgba(0, 150, 136, 0.7) " icon="send-gift-o" text="中奖记录" />
</van-grid>
<van-grid class="sm-margin-top-05rem" :border="true" :column-num="3">
    <van-grid-item class="sm-text-size-1p9rem" style="color: #FF8800" icon="location-o" text="地址" />
    <van-grid-item class="sm-text-size-1p9rem" style="color: rgba(96, 125, 139, 0.7)" icon="diamond-o" text="赞助" />
    <van-grid-item class="sm-text-size-1p9rem" style="color: #4fc3f7" icon="share" text="分享" />
</van-grid>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/TabbarNav.vue"; 
export default {
  name: 'mine',
  components: {
    'tabbar': tabbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine {
  background-color: #ffffff;
  /* background-color: #f0f3f6; */
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mineicon {
    /* background: linear-gradient(40deg, #ff6ec4, #7873f5) !important; */
    background: linear-gradient(40deg, rgba(156, 39, 176, 0.5), rgba(3, 169, 244, 0.4)) !important;
    /* border-radius:0em 0em 10em 0.5em; */
    /* border-top-left-radius: 10px 20px;
  border-top-right-radius: 15px 30px; */
  /* border-bottom-right-radius: 20em 2em;
  border-bottom-left-radius: 20em 2em; */
}
</style>
