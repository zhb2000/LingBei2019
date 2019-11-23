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
  grid-gap: 30px;
}
@media screen and (min-width: 1401px) {
  .my_grid{
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (min-width: 801px) and (max-width: 1400px) {
  .my_grid{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .my_grid{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
</style>