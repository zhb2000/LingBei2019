<template>
  <div class="content_area">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentAreaWide"
};
</script>

<style scoped>
.content_area {
  margin: auto;
  height: 100%;
  transition: 0.3s;
}
@media screen and (min-width: 1001px) {
  .content_area {
    width: 80%;
  }
}
@media screen and (min-width: 801px) and (max-width: 1000px) {
  .content_area {
    width: 90%;
  }
}
@media screen and (max-width: 800px) {
  .content_area {
    width: 95%;
  }
}
</style>