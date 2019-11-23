<template>
  <div>
    <div class="my_grid">
      <slot name="picture" class="picture_area"></slot>
      <slot name="board" class="board_area"></slot>
    </div>
    <div class="bottom_area">
      <div class="toolbar_area">
        <slot name="toolbar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingBoardGrid"
};
</script>

<style scoped>
.my_grid {
  display: grid;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 120px;
  transition: 0.3s;
}
.picture_area {
  grid-column-start: a-start;
  grid-column-end: a-end;
  grid-row-start: a-start;
  grid-row-end: a-end;
}
.board_area {
  grid-column-start: b-start;
  grid-column-end: b-end;
  grid-row-start: b-start;
  grid-row-end: b-end;
}

/**固定在底部的区域 */
.bottom_area {
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0px;
}

/**放工具栏的区域 */
.toolbar_area {
  height: 100%;
  margin: auto;
  transition: 0.3s;
}
@media screen and (min-width: 901px) {
  .my_grid {
    grid-template-columns: 4fr 6fr;
    grid-template-areas: "a b";
    height: 600px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .toolbar_area {
    width: 800px;
  }
}
@media screen and (max-width: 900px) {
  .my_grid {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a"
      "b";
    height: auto;
    margin-left: 40px;
    margin-right: 40px;
  }
  .toolbar_area {
    width: 100%;
  }
}
</style>