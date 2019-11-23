<template>
  <div class="content_area">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyContentArea"
};
</script>

<style scoped>
.content_area {
  margin: auto;
  height: 100%;
  transition: 0.3s;
}
@media screen and (min-width: 1401px) {
  .content_area {
    width: 70%;
  }
}
@media screen and (min-width: 801px) and (max-width: 1400px) {
  .content_area {
    width: 80%;
  }
}
@media screen and (max-width: 800px) {
  .content_area {
    width: 95%;
  }
}
</style>