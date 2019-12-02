<template>
  <div id="home" class="home">
    <van-swipe :autoplay="3000" style="height: 15rem">
      <van-swipe-item v-for="(item, index) in listCarousel" :key="index">
        <img v-lazy="item." class="sm-height-100-per sm-width-100-per" />
      </van-swipe-item>
    </van-swipe>
    <!-- <div style="height:2rem; color: rgba(69, 90, 100, 0.6);background-color: #f0f3f6;" class="sm-width-100-per sm-layout-left-center sm-padding-left-1rem">
    拼购
    </div>-->
    <van-grid :border="false">
      <van-grid-item style="color: #FF8800" icon="shop-collect" text="商城" />
      <van-grid-item style="color: #ff4444" icon="point-gift" text="抽奖" />
      <van-grid-item style="color: #FF8800" icon="diamond" text="赞助" />
      <van-grid-item style="color: #42a5f5" icon="share" text="分享" />
    </van-grid>

    <van-grid class="sm-margin-top-05rem" :border="true" :column-num="2">
      <van-grid-item v-for="item in listData" :key="item.id">
        <van-image :src="item.goodsImg" />

        <div style="height:3rem;width:100%" class="sm-layout-center-vertical">
          <div class="sm-width-100-per sm-height-60-per sm-layout-center-horizontal">
            <span>{{item.goodsName}}</span>
          </div>
          <div class="sm-width-100-per sm-height-40-per sm-layout-side-horizontal">
            <span class="sm-text-size-1p1rem" style="color: red">￥{{item.price}}</span>
            <span
              class="sm-text-size-p8rem"
              style="color: rgba(69, 90, 100, 0.6)"
            >{{item.payNum}}人已购买</span>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
    <tabbar></tabbar>
  </div>
</template>

<script>
import "../css/smart.css";
import tabbar from "../components/TabbarNav.vue";
import { queryGoods, queryByCarousel } from "../api/index";
import { Swipe, SwipeItem, Row, Col, Toast } from "vant";
export default {
  name: "home",
  components: {
    tabbar: tabbar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      listCarousel: [],
      listData: [],
      windowSizeObj: {
        height: null,
        width: null
      }
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    console.log("00000");
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        window.screenHeight = document.body.clientHeight;
        that.windowSizeObj.width = window.screenWidth;
        that.windowSizeObj.height = window.screenHeight;
        console.log(window.screenWidth);
      })();
    };
  },
  methods: {
    getData: function() {
      let that = this;
      queryGoods().then(res => {
        let resData = res.data;
        if (resData.code == -1) {
          //失败
          Toast.fail("获取数据失败");
        } else if (resData.code == 0) {
          debugger;
          that.listData = resData.data;
        }
      });
      queryByCarousel().then(res => {
        let resData = res.data;
        if (resData.code == -1) {
          //失败
          Toast.fail("获取数据失败");
        } else if (resData.code == 0) {
          debugger;
          that.listCarousel = resData.data;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.home {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
