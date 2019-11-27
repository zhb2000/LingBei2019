<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="1" />
    </div>
    <content-area style="margin-top:30px; margin-bottom:30px;">
      <my-grid v-if="loadOK">
        <template #introduction>
          <introduction-card :item="pageInfo.introductionItem" />
        </template>
        <template #pictures>
          <picture-card :img-array="pageInfo.imgArray" />
        </template>
        <template #comments>
          <comment-card :comment-array="pageInfo.commentArray" />
        </template>
        <template #news>
          <news-card :news-array="pageInfo.newsArray" />
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

import axios from "axios";

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
  created() {
    if (this.$route.query.name) {
      this.theName = this.$route.query.name;
    } else {
      this.theName = "大圣归来";
    }
  },
  mounted() {
    var jsonPath = "./jsons/detail_data/" + this.theName + ".json";
    axios
      .get(jsonPath)
      .then(response => {
        this.pageInfo = response.data;
        this.loadOK = true;
      })
      .catch(error => alert(error));
  },
  data: function() {
    return {
      theName: null,
      pageInfo: null,
      loadOK: false
    };
  }
};
</script>

<style>
/**把网页的边界去掉 */
body {
  margin: 0 0;
  background-color: #ecf0f3;
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
