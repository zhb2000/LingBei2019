<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SquareCardTag"
};
</script>

<style scoped>
.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 13px;
  border-radius: 20px;
  font-weight: bold;
}
</style>