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
  grid-gap: 30px;
  transition: 0.3s;
}
.big_area {
  grid-column-start: a-start;
  grid-column-end: a-end;
  grid-row-start: a-start;
  grid-row-end: a-end;
}
@media screen and (min-width: 1001px) {
  .group_grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a a b c"
      "a a d e";
  }
}
@media screen and (min-width: 601px) and (max-width: 1000px) {
  .group_grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "a a"
      "a a"
      "b c"
      "d e";
  }
}
@media screen and (max-width: 600px) {
  .group_grid {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e";
  }
}
</style>