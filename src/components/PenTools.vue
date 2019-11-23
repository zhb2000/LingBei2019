<template>
  <div class="container">
    <img
      v-for="pen in pens"
      :key="pen.id"
      :src="pen.src"
      class="pen"
      :class="{active:pen.id===selectedPen}"
      @click="$emit('change-pen', pen.id)"
    />
  </div>
</template>

<script>
export default {
  name: "PenTools",
  props: {
    selectedPen: Number
  },
  data: function() {
    return {
      pens: [
        { id: 0, src: require("@/assets/painting_toolbar/pen/eraser.svg") },
        { id: 1, src: require("@/assets/painting_toolbar/pen/pen.svg") },
        { id: 2, src: require("@/assets/painting_toolbar/pen/pencil.svg") },
        { id: 3, src: require("@/assets/painting_toolbar/pen/mark-1.svg") },
        { id: 4, src: require("@/assets/painting_toolbar/pen/mark-2.svg") }
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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 70px;
  justify-items: center;
  align-items: end;
}

.pen {
  display: block;
  height: 100px;
  position: relative;
  transition: 0.4s;
}

.pen:not(.active) {
  bottom: -50px;
}

.active {
  bottom: -15px;
}

.pen:not(.active):hover {
  bottom: -35px;
}
</style>