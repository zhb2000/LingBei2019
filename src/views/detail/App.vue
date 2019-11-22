<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="1" />
    </div>
    <content-area style="margin-top:30px; margin-bottom:30px;">
      <my-grid>
        <template #introduction>
          <introduction-card :item="introductionItem" />
        </template>
        <template #pictures>
          <picture-card :img-array="imgArray" />
        </template>
        <template #comments>
          <comment-card />
        </template>
        <template #news>
          <news-card />
        </template>
      </my-grid>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import ContentAreaWide from "@/components/ContentAreaWide.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import DetailIntroduction from "@/components/DetailIntroduction.vue";
import DetailPictureCard from "@/components/DetailPictureCard.vue";
import DetailComment from "@/components/DetailComment.vue";
import DetailNews from "@/components/DetailNews.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": ContentAreaWide,
    "my-grid": DetailGrid,
    "introduction-card": DetailIntroduction,
    "picture-card": DetailPictureCard,
    "comment-card": DetailComment,
    "news-card": DetailNews
  },
  data: function() {
    return {
      //顶部介绍卡片的对象
      introductionItem: {
        imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
        title: "title is here",
        director: "name is here",
        date: "date is here",
        type: "type is here",
        detail:
          "lalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalala"
      },
      //剧照卡片的对象数组
      imgArray: [
        {
          id: 0,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 1,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 2,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 3,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 4,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 5,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
        },
        {
          id: 6,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          link: "https://www.baidu.com"
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
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  width: 100%;
}
/**吸顶的导航栏区域 */
.navbar_area {
  position: sticky;
  z-index: 1000;
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
