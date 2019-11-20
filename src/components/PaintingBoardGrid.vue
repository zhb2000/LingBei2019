<template>
  <div>
    <div class="my_grid">
      <slot name="picture"></slot>
      <slot name="board"></slot>
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
  grid-template-columns: 4fr 6fr;
  grid-column-gap: 20px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 120px;
  height: 600px;
}

/**固定在底部的区域 */
.bottom_area {
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0px;
}

/**放工具栏的区域 */
.toolbar_area{
    width: 800px;
    height: 100%;
    margin: auto;
}
</style>