<template>
  <div class="container">
    <div class="error-container">
      <div class="error-info">
        <h1>404</h1>
        <p class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="100ms" >
          It seems that the page you are looking for no longer exists.
          <br />Please contact our
          <a href="help-center.html">help center</a> or go to the
          <a href @click="goBack()">homepage</a>
        </p>
      </div>
      <div class="error-image animate__swing"></div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  mounted: function () {
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      var wow = new WOW({
        boxClass: "wow", ///动画元件css类（默认为wow）
        animateClass: "animated", //动画css类（默认为animated）
        offset: 0, //到元素距离触发动画（当默认为0）
        mobile: true, //在移动设备上触发动画（默认为true）
        live: true, //对异步加载的内容进行操作（默认为true）
      });
      wow.init();
    });
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>