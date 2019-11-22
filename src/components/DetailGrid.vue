<template>
  <div class="my_grid">
    <div class="introduction_area">
      <slot name="introduction"></slot>
    </div>
    <div class="pictures_area">
      <slot name="pictures"></slot>
    </div>
    <div class="comments_area">
      <slot name="comments"></slot>
    </div>
    <div class="news_area">
      <slot name="news"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGrid"
};
</script>

<style scoped>
.my_grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "a a a"
    "b b b"
    "c c d";
  column-gap: 20px;
  row-gap: 30px;
}
.introduction_area {
  grid-column-start: a-start;
  grid-column-end: a-end;
  grid-row-start: a-start;
  grid-row-end: a-end;
}
.pictures_area {
  grid-column-start: b-start;
  grid-column-end: b-end;
  grid-row-start: b-start;
  grid-row-end: b-end;
}
.comments_area {
  grid-column-start: c-start;
  grid-column-end: c-end;
  grid-row-start: c-start;
  grid-row-end: c-end;
}
.news_area {
  grid-column-start: d-start;
  grid-column-end: d-end;
  grid-row-start: d-start;
  grid-row-end: d-end;
}
</style>