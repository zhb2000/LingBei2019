<template>
  <!-- <div class="my_grid">
    <slot></slot>
  </div> -->
  <transition-group name="flip-grid" tag="div" class="my_grid">
    <ani-card v-for="item in cardItems" :cardItem="item" :key="item.id" />
  </transition-group>
</template>

<script>
import AnimationCard from "@/components/AnimationCard.vue";

export default {
  name: "MyGrid",
  components:{
    "ani-card": AnimationCard
  },
  props:{
    cardItems:Array
  }
};
</script>

<style scoped>
.my_grid {
  height: 100%;
  width: 100%;
  display: grid;
  gap: 30px;
  grid-gap: 30px;
  transition: 0.3s;
}
@media screen and (min-width: 1101px) {
  .my_grid{
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (min-width: 801px) and (max-width: 1100px) {
  .my_grid{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 501px) and (max-width: 800px) {
  .my_grid{
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    grid-gap: 20px;
  }
}
@media screen and (max-width: 500px) {
  .my_grid{
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    grid-gap: 10px;
  }
}
.flip-grid-move {
  transition: transform 1s;
}
</style>