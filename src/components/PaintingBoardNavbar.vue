<template>
  <div class="navbar">
    <div>
      <img class="button_img left" :src="backSrc" />
      <img class="button_img right" :src="undoSrc"  @click="$emit('restore')" style="transform:scaleX(-1)" />
      <img class="button_img right" :src="undoSrc" @click="$emit('undo')" />
    </div>
    <div></div>
    <div class="center_area">
      <img class="button_img right" :src="editSrc" />
      <div class="title_area">{{title}}</div>
    </div>
    <div></div>
    <div>
      <img class="button_img right" :src="saveSrc" @click="$emit('download')" />
      <img class="button_img right" :src="shareSrc" @click="$emit('require-score')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingBoardNavbar",
  props: {
    title: String
  },
  data: function() {
    return {
      backSrc: "./pic_res/painting_toolbar/button/back.svg",
      undoSrc: "./pic_res/painting_toolbar/button/undo.svg",
      editSrc: "./pic_res/painting_toolbar/button/edit.svg",
      saveSrc: "./pic_res/painting_toolbar/button/save.svg",
      shareSrc: "./pic_res/painting_toolbar/button/提交.png"
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
  grid-template-rows: 50px;
  background-color: white;
  transition: 0.3s;
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

@media screen and (min-width: 901px) {
  .navbar {
    grid-template-columns: 170px 1fr 200px 1fr 170px;
  }
}

@media screen and (max-width: 900px) {
  .navbar {
    grid-template-columns: 150px 0fr 1fr 0fr 100px;
  }
}
</style>