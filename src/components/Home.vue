<template>
  <div id="home" class="home">
    <van-swipe :autoplay="3000" style="height: 15rem">
      <van-swipe-item v-for="(item, index) in listCarousel" :key="index">
        <img v-lazy="item.iconUrl" class="sm-height-100-per sm-width-100-per" />
      </van-swipe-item>
    </van-swipe>
    <!-- <div style="height:2rem; color: rgba(69, 90, 100, 0.6);background-color: #f0f3f6;" class="sm-width-100-per sm-layout-left-center sm-padding-left-1rem">
    拼购
    </div>-->
    <van-grid :border="false" style="background: red">
      <van-grid-item style="color: #FF8800;background: red" icon="shop-collect" text="商城" />
      <van-grid-item style="color: #ff4444;background: red" icon="point-gift" text="抽奖" />
      <van-grid-item style="color: #FF8800;background: red" icon="diamond" text="赞助" />
      <van-grid-item style="color: #ff4444;background: red" icon="fire" to="/grab" text="抢！Iphone" />
    </van-grid>

    <van-grid class="sm-margin-top-05rem" :border="true" :column-num="2">
      <van-grid-item v-for="item in listData" :key="item.id" v-on:click="buy(item)">
        <van-image :src="item.goodsImg" />

        <div style="height:4rem;width:100%" class="sm-layout-center-vertical">
          <div
            class="sm-width-90-per sm-height-60-per sm-layout-left-center-wrap"
          >{{item.goodsName}}</div>
          <div
            style="position:relative;"
            class="sm-width-100-per sm-height-40-per sm-layout-side-horizontal"
          >
            <span class="sm-text-size-1p1rem" style="color: red">￥{{item.price}}</span>
            <span
              class="sm-text-size-p8rem"
              style="color: rgba(69, 90, 100, 0.6)"
            >{{item.payNum}}人已购买</span>
            <div
              class="sm-background-color-white ms-layout-center-wrap-horizontal"
              style="font-style:italic;box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);height:2rem;width:2rem;position:absolute;left:8rem;top: -3.5rem;border-radius: 30rem;color: red"
            >
              <span
                class="sm-text-size-1point5-em"
                style="font-weight:bold;font-style:italic"
              >{{item.actualPrice}}</span>
              <span class="sm-text-size-p8rem">元</span>
            </div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>

    <van-action-sheet v-model="actionObj.show" title="购买商品">
      <!-- <van-panel style="height:20rem"> -->
      <div style="width:100%;height:20rem" class="sm-layout-top-center-with-wrap sm-height-100-per">
        <div
          class="sm-width-100-per sm-height-40-per sm-layout-top-center-with-wrap sm-text-size-p8rem"
        >
          <div class="sm-layout-side-horizontal sm-width-80-per sm-height-30-per">
            <span
              class="sm-width-10-per sm-layout-right-center"
              style="color: rgba(69, 90, 100, 0.6);white-space:nowrap;text-overflow:ellipsis;"
            >{{actionObj.title}}</span>
            <span
              class="sm-width-10-per sm-layout-center-horizontal"
              style="color: red"
            >￥{{actionObj.price / 100}}</span>
          </div>
          <div class="sm-layout-side-horizontal sm-width-80-per sm-height-30-per">
            <span
              class="sm-width-10-per sm-layout-right-center"
              style="color: rgba(69, 90, 100, 0.6); white-space:nowrap;text-overflow:ellipsis;"
            >数量</span>
            <span style="color: #000000" class="sm-width-10-per sm-layout-center-horizontal">1</span>
          </div>
          <div class="sm-layout-side-horizontal sm-width-80-per sm-height-30-per">
            <span
              class="sm-width-10-per sm-layout-right-center"
              style="color: rgba(69, 90, 100, 0.6); white-space:nowrap;text-overflow:ellipsis;"
            >支付方式</span>
            <span
              style="color: rgba(121, 85, 72, 0.7); white-space:nowrap;text-overflow:ellipsis; "
              class="sm-width-10-per sm-layout-center-horizontal"
            >拼go码</span>
          </div>
        </div>
        <van-field
          v-model="submitBarObj.pinGoCode"
          style="width:80%;text-align:center"
          input-align="center"
          autofocus="true"
          v-on:input="inputChange"
          placeholder="请输入拼go码"
        />
        <div class="sm-width-80-per sm-height-20-per sm-layout-center-horizontal">
          <span style="color: rgba(69, 90, 100, 0.6)">群 组 :</span>
          <van-tag
            round
            class="sm-height-50-per sm-width-40-per sm-layout-center-horizontal"
          >********</van-tag>
        </div>
        <van-submit-bar
          :disabled="submitBarObj.noenable"
          :loading="submitBarObj.loading"
          tip="你的收货地址不支持同城送, 我们已为你推荐快递"
          :price="actionObj.price"
          button-text="提交订单"
          @submit="onSubmit"
        />
      </div>
      <!-- </van-panel> -->
      <!-- <van-button class="margin-bottom-20" type="primary">确认购买</van-button> -->
    </van-action-sheet>
    <tabbar></tabbar>
  </div>
</template>

<script>
import "../css/smart.css";
import tabbar from "../components/TabbarNav.vue";
import {
  queryGoods,
  queryByCarousel,
  authoCode,
  authoToken,
  creatOrder
} from "../api/index";
import {
  Swipe,
  SwipeItem,
  Row,
  Col,
  Toast,
  ActionSheet,
  Button,
  Panel,
  SubmitBar,
  Field,
  Tag
} from "vant";
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
      },
      actionObj: {
        show: false,
        title: null,
        price: 1,
        goodsId: ""
      },
      submitBarObj: {
        noenable: true,
        loading: false,
        pinGoCode: null
      }
    };
  },
  created() {
    // authoCode().then(res => {
    //   console.log(res);
    //   let resData = res.data;
    //   if (resData.code == 0) {
    //     let reUrl = resData.data;
    //     authoToken(reUrl).then(res => {});
    //   }
    // });
    this.getData();
  },
  mounted() {
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
          that.listData = resData.data;
        }
      });
      queryByCarousel().then(res => {
        let resData = res.data;
        if (resData.code == -1) {
          //失败
          Toast.fail("获取数据失败");
        } else if (resData.code == 0) {
          that.listCarousel = resData.data;
        }
      });
    },
    buy: function(goods) {
      console.log(goods);
      let that = this;
      that.actionObj.title = goods.goodsName;
      that.actionObj.show = true;
      that.actionObj.price = goods.actualPrice * 100;
      that.actionObj.goodsId = goods.id;
    },
    inputChange: function(value) {
      console.log(this.submitBarObj.pinGoCode);
      if (this.submitBarObj.pinGoCode != null) {
        this.submitBarObj.noenable = false;
      }
    },
    onSubmit: function(e) {
      let that = this;
      this.submitBarObj.loading = true;
      let requestData = {
        id: that.actionObj.goodsId,
        payCode: that.submitBarObj.pinGoCode
      };
      creatOrder(requestData).then(res => {
        let resData = res.data;
        that.submitBarObj.pinGoCode = "";
        if (resData.code == 0) {
          that.submitBarObj.loading = false;
          that.actionObj.show = false;
          Toast.success("购买成功");
        } else {
          that.submitBarObj.loading = false;
          that.actionObj.show = false;
          Toast.fail(resData.msg);
        }
        console.log(res);
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
  padding-bottom: 53px;
}
</style>
