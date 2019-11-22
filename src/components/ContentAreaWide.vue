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
  width: 80%;
  height: 100%;
}
</style>