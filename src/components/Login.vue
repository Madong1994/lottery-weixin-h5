<template>
  <div id="login" class="login sm-layout-center-vertical">
    <div class="sm-height-40-per sm-width-100-per sm-layout-bottom-center">
      <van-loading color="#00C851" type="spinner" size="5rem" />
    </div>
    <div class="sm-height-60-per sm-width-80-per sm-layout-center-vertical">
      <van-divider
        class="sm-width-100-per"
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >登录中...</van-divider>
    </div>
  </div>
</template>

<script>
import "../css/smart.css";
import { authoCode, authoToken } from "../api/index";
import { Loading, Divider } from "vant";

export default {
  name: "login",
  components: {},
  data() {
    return {
      currentRate: 0,
      rate: 1000000,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  },
  created() {
    this.login();
  },
  mounted() {},
  methods: {
    // ...mapMutations(["changeLogin"]),
    login: function() {
      let that = this;
      let openid = this.$utils.getUrlKey("openid");
      let token = this.$utils.getUrlKey("token");
      console.log("-----------------token");
      console.log(token);
      if (
        typeof token == "undefined" ||
        typeof openid == "undefined" ||
        token == null ||
        openid == null
      ) {
        authoCode().then(res => {
          console.log(res);
          console.log("--------------------------");
          let resData = res.data;
          if (resData.code == 0) {
            let reUrl = resData.data;
            window.location.href = reUrl;
          }
        });
      } else {
        //保存token,下一页并且不会反回登录页
        console.log(that.$store);
        that.$store.commit("changeLogin", { Authorization: token });
        that.$store.commit("changeOpenid", openid);
        that.$router.push("/home");
      }
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
.login {
  background: #ffffff;
  /* background: red; */
  height: 100vh;
  width: 100%;
}
</style>
