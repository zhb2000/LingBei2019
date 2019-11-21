<template>
  <div class="group_grid">
    <div class="big_area">
      <!--大卡片会被放这里-->
      <slot name="main-card"></slot>
    </div>
    <!--其余卡片被放到这里-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardGroupGrid"
};
</script>

<style scoped>
.group_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 2fr;
  grid-template-areas:
    "a a b c"
    "a a d e";
  grid-gap: 30px;
}
.big_area {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>