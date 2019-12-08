<template>
  <div id="grab" class="grab" style="padding-bottom: 3px">
    <van-nav-bar
      title="抢！Iphone"
      left-text="返回"
      class="margin-bottom-05"
      @click-left="onClickBack"
      left-arrow
    >
      <!-- <van-icon name="search" slot="right" />  -->
    </van-nav-bar>
    <!-- <van-search
      v-model="value"
      class="margin-bottom-05"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>-->
    <!-- <tabbar></tabbar> -->
    <div class="mycard sm-layout-center-vertical margin-bottom-08">
      <van-image
        style="height:12.8rem"
        class="sm-width-100-per"
        fit="fill"
        src="http://182.61.39.148:8082/upload/62047716-2f3e-4e8b-b9dc-6e398c0de8a5_vg2y5p.jpg"
      />
      <div
        class="sm-width-100-per sm-height-30-per sm-layout-center-vertical sm-text-size-1p1rem"
        style="box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);"
      >
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          一等奖：iphone11 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          二等奖：小米9 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          三等奖：魅族7pro &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div
          class="sm-width-95-per sm-layout-left-center-wrap sm-text-size-p8rem"
          style="height:1.6rem;color: rgba(69, 90, 100, 0.6)"
        >人气1万开送</div>
      </div>
    </div>

    <div class="mycard sm-layout-center-vertical margin-bottom-08">
      <van-image
        style="height:12.8rem"
        class="sm-width-100-per"
        fit="fill"
        src="http://182.61.39.148:8082/upload/62047716-2f3e-4e8b-b9dc-6e398c0de8a5_vg2y5p.jpg"
      />
      <div
        class="sm-width-100-per sm-height-30-per sm-layout-center-vertical sm-text-size-1p1rem"
        style="box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);"
      >
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          一等奖：iphone11 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          二等奖：小米9 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          三等奖：魅族7pro &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div
          class="sm-width-95-per sm-layout-left-center-wrap sm-text-size-p8rem"
          style="height:1.6rem;color: rgba(69, 90, 100, 0.6)"
        >人气1万开送</div>
      </div>
    </div>

    <div class="mycard sm-layout-center-vertical margin-bottom-08">
      <van-image
        style="height:12.8rem"
        class="sm-width-100-per"
        fit="fill"
        src="http://182.61.39.148:8082/upload/62047716-2f3e-4e8b-b9dc-6e398c0de8a5_vg2y5p.jpg"
      />
      <div
        class="sm-width-100-per sm-height-30-per sm-layout-center-vertical sm-text-size-1p1rem"
        style="box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);"
      >
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          一等奖：iphone11 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          二等奖：小米9 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          三等奖：魅族7pro &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div
          class="sm-width-95-per sm-layout-left-center-wrap sm-text-size-p8rem"
          style="height:1.6rem;color: rgba(69, 90, 100, 0.6)"
        >人气1万开送</div>
      </div>
    </div>

    <div class="mycard sm-layout-center-vertical margin-bottom-08">
      <van-image
        style="height:12.8rem"
        class="sm-width-100-per"
        fit="fill"
        src="http://182.61.39.148:8082/upload/62047716-2f3e-4e8b-b9dc-6e398c0de8a5_vg2y5p.jpg"
      />
      <div
        class="sm-width-100-per sm-height-30-per sm-layout-center-vertical sm-text-size-1p1rem"
        style="box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);"
      >
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          一等奖：iphone11 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          二等奖：小米9 &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div class="sm-width-95-per sm-layout-left-center-wrap" style="height:1.8rem">
          三等奖：魅族7pro &nbsp;&nbsp;
          <span style="color: rgba(69, 90, 100, 0.6)">×1份</span>
        </div>
        <div
          class="sm-width-95-per sm-layout-left-center-wrap sm-text-size-p8rem"
          style="height:1.6rem;color: rgba(69, 90, 100, 0.6)"
        >人气1万开送</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/smart.css";
import tabbar from "../components/TabbarNav.vue";
import { queryGoods, queryByCarousel } from "../api/index";
import {
  Search,
  NavBar,
  Image,
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
  name: "grab",
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
        price: 1
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
    onClickBack: function() {
      this.$router.go(-1);
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
.mycard {
  /* height: 16rem; */
  width: 100%;
}
a {
  color: #42b983;
}
.grab {
  /* background-color: rgba(255, 255, 255, 0.4); */
}
</style>
