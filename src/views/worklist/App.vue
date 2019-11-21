<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="1" />
      <work-list-navbar :typeSelected="0"/>
    </div>
    <content-area style="margin-top: 30px">
      <my-gird>
        <ani-card v-for="item in cardItems" :cardItem="item" :key="item.id" />
      </my-gird>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
import AnimationCard from "@/components/AnimationCard.vue";
import MyGrid from "@/components/MyGrid.vue";
import WorkListNavbar from "@/components/WorkListNavbar.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    "ani-card": AnimationCard,
    "my-gird": MyGrid,
    "work-list-navbar": WorkListNavbar
  },
  data: function() {
    return {
      //对象数组
      cardItems: [
        {
          id: 0,
          //imgSrc: require("./assets/art_works_list_img/罗小黑战记.jpg"),
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        },
        {
          id: 1,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        },
        {
          id: 2,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        },
        {
          id: 3,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        },
        {
          id: 4,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        },
        {
          id: 5,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-1-1",
          rate: 4.2
        }
      ]
    };
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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
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
