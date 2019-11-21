<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="2" />
    </div>
    <content-area style="margin-top:30px">
      <card-group/>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
import CardGroupGrid from "@/components/CardGroupGrid.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    "card-group": CardGroupGrid
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
  position: sticky;
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
