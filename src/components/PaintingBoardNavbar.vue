<template>
  <div class="navbar">
    <div>
      <img class="button_img left" :src="backSrc" />
      <img class="button_img right" :src="undoSrc" style="transform:scaleX(-1)" />
      <img class="button_img right" :src="undoSrc" />
    </div>
    <div></div>
    <div class="center_area">
      <img class="button_img right" :src="editSrc" />
      <div class="title_area">{{title}}</div>
    </div>
    <div></div>
    <div>
      <img class="button_img right" :src="saveSrc" />
      <img class="button_img right" :src="shareSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingBoardNavbar",
  props:{
      title:String
  },
  data: function() {
    return {
      backSrc: require("@/assets/painting_toolbar/button/back.svg"),
      undoSrc: require("@/assets/painting_toolbar/button/undo.svg"),
      editSrc: require("@/assets/painting_toolbar/button/edit.svg"),
      saveSrc: require("@/assets/painting_toolbar/button/save.svg"),
      shareSrc: require("@/assets/painting_toolbar/button/share.svg")
    };
  }
};
</script>

<style scoped>
.navbar {
  height: 50px;
  width: 100%;
  overflow: hidden;
  color: grey;
  display: grid;
  grid-template-columns: 170px 1fr 200px 1fr 170px;
  grid-template-rows: 50px;
  background-color: white;
}

.button_img {
  height: 100%;
  padding: 15px;
  cursor: pointer;
}

.left {
  float: left;
}

.right {
  float: right;
}

.center_area {
  text-align: center;

}

.title_area {
  height: 100%;
  display: grid;
  align-items: center;
}
</style>