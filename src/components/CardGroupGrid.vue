<template>
  <div class="group_grid" :class="{left_grid: !isRight, right_grid: isRight}">
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
  name: "CardGroupGrid",
  props: {
    isRight: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.group_grid {
  display: grid;
  gap: 20px;
  grid-gap: 20px;
  transition: 0.3s;
}
.big_area {
  grid-column-start: a-start;
  grid-column-end: a-end;
  grid-row-start: a-start;
  grid-row-end: a-end;
}
@media screen and (min-width: 1101px) {
  .group_grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  .left_grid {
    grid-template-areas:
      "a a b c"
      "a a d e";
  }
  .right_grid {
    grid-template-areas:
      "b c a a"
      "d e a a";
  }
}
@media screen and (min-width: 701px) and (max-width: 1100px) {
  .group_grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .left_grid {
    grid-template-areas:
      "a a b"
      "a a c"
      "d e f";
  }
  .right_grid {
    grid-template-areas:
      "b a a"
      "c a a"
      "d e f";
  }
}
@media screen and (min-width: 501px) and (max-width: 700px) {
  .group_grid {
    grid-template-columns: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    grid-gap: 20px;
    grid-template-areas:
      "a b"
      "c d"
      "e f";
  }
}
@media screen and (max-width: 500px) {
  .group_grid {
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    grid-gap: 20px;
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e";
  }
}
</style>