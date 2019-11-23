<template>
  <div class="container">
    <img
      v-for="color in colors"
      :key="color.id"
      :src="color.src"
      class="color"
      :class="{active:color.id===selectedColor}"
      @click="$emit('change-color', color.id)"
    />
  </div>
</template>

<script>
export default {
  name: "ColorTools",
  props: {
    selectedColor: Number
  },
  data: function() {
    return {
      colors: [
        {
          id: 0,
          src: require("@/assets/painting_toolbar/color/lightGreen.svg")
        },
        { id: 1, src: require("@/assets/painting_toolbar/color/green.svg") },
        { id: 2, src: require("@/assets/painting_toolbar/color/darkCyan.svg") },
        { id: 3, src: require("@/assets/painting_toolbar/color/darkBlue.svg") },
        { id: 4, src: require("@/assets/painting_toolbar/color/black.svg") },
        { id: 5, src: require("@/assets/painting_toolbar/color/milk.svg") },
        { id: 6, src: require("@/assets/painting_toolbar/color/yellow.svg") },
        { id: 7, src: require("@/assets/painting_toolbar/color/red.svg") }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 70px;
  justify-items: center;
  align-items: center;
}

.color {
  height: 36px;
  transition: 0.3s;
}

.active {
  transform: scale(1.2);
}

.color:not(.active):hover {
  transform: scale(1.2);
}
</style>