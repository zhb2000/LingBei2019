<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="3" />
      <painting-navbar title="无标题-我的作品" />
    </div>

    <my-grid>
      <template v-slot:picture>
        <painting-pic :pic-src="picSrc" />
      </template>
      <template v-slot:board>
        <draw-board :pen-width="widths[selectedPen]" :pen-color="colors[selectedColor]" :is-eraser="selectedPen===0" />
      </template>
      <template v-slot:toolbar>
        <painting-toolbar
          :selected-pen="selectedPen"
          :selected-color="selectedColor"
          @change-pen="selectedPen = $event"
          @change-color="selectedColor = $event"
        />
      </template>
    </my-grid>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import PaintingBoardGrid from "@/components/PaintingBoardGrid.vue";
import PaintingBoard from "@/components/PaintingBoard.vue";
import PaintingPicture from "@/components/PaintingPicture.vue";
import PaintingToolbar from "@/components/PaintingToolbar.vue";
import PaintingBoardNavbar from "@/components/PaintingBoardNavbar.vue";

export default {
  name: "app",
  data: function() {
    return {
      picSrc: "./pic_res/other/大护法-临摹.jpg",
      selectedPen: 1,
      selectedColor: 1,
      widths: [30, 2, 1, 20, 4],
      colors: [
        "#bfdacb",
        "#4b876b",
        "#5c7f83",
        "#354858",
        "#111111",
        "#f6e6cc",
        "#ebb344",
        "#cc4a2b"
      ]
    };
  },
  components: {
    "my-navbar": MyNavbar,
    "my-grid": PaintingBoardGrid,
    "draw-board": PaintingBoard,
    "painting-pic": PaintingPicture,
    "painting-toolbar": PaintingToolbar,
    "painting-navbar": PaintingBoardNavbar
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
}
</style>
