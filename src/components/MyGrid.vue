<template>
  <div class="my_grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyGrid"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my_grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}
</style>