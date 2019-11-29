<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="2" />
    </div>
    <square-swiper v-if="loadOK" :items="swiperItems" id="square_swiper" />
    <content-area v-if="loadOK" style="margin-top:0px; margin-bottom:30px;">
      <group-header link="#" tag-text="时下热门" link-text="更多文章>>" />
      <card-group>
        <template #main-card>
          <pic-text-card v-if="bigCard.cardType===0" :item="bigCard" />
          <pic-text-card v-if="bigCard.cardType===1" :item="bigCard" />
        </template>
        <div v-for="card in cards" :key="card.id">
          <pic-text-card v-if="card.cardType===0" :item="card" />
          <text-card v-if="card.cardType===1" :item="card" />
        </div>
      </card-group>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
import CardGroupGrid from "@/components/CardGroupGrid.vue";
import PicTextCard from "@/components/PicTextCard.vue";
import SquareTextCard from "@/components/SquareTextCard.vue";
import CardGroupHeader from "@/components/CardGroupHeader.vue";
import SquareSwiper from "@/components/SquareSwiper.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    "card-group": CardGroupGrid,
    "pic-text-card": PicTextCard,
    "text-card": SquareTextCard,
    "group-header": CardGroupHeader,
    "square-swiper": SquareSwiper
  },
  mounted() {
    axios
      .get("jsons/square_data/square.json")
      .then(response => {
        this.swiperItems = response.data.swiperItems;
        this.bigCard = response.data.bigCard;
        this.cards = response.data.cards;
        this.loadOK = true;
      })
      .catch(error => alert(error));
  },
  data: function() {
    return {
      loadOK: false,
      bigCard: null,
      cards: [],
      swiperItems: []
    };
  }
};
</script>

<style>
/**把网页的边界去掉 */
body {
  margin: 0 0;
  background-color: #ecf0f2;
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
  z-index: 1000;
}
#square_swiper {
  margin-top: 30px;
  transition: 0.3s;
}
@media screen and (max-width: 600px) {
  #square_swiper {
    margin-top: 20px;
  }
}
</style>
