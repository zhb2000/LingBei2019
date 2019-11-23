<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="0" :transparent="true" />
    </div>
    <div id="content_area">
      <first-screen />
      <bai-she />
      <da-yu />
      <ne-zha />
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import HomeFirst from "@/components/HomeFirst.vue";
import HomeBaiSheCard from "@/components/HomeBaiSheCard.vue";
import HomeDaYu from "@/components/HomeDaYu.vue";
import HomeNeZha from "@/components/HomeNeZha.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "bai-she": HomeBaiSheCard,
    "first-screen": HomeFirst,
    "da-yu": HomeDaYu,
    "ne-zha": HomeNeZha
  }
};
</script>

<style>
/**把网页的边界去掉 */
body {
  margin: 0 0;
  background-color: #f6f6f6;
  font-size: 16px;
}

/**改变盒子模型 */
* {
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  width: 100%;
}
/**吸顶的导航栏区域 */
.navbar_area {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
#content_area {
  width: 100%;
  height: 100%;
}
</style>
