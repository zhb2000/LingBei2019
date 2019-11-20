<template>
  <div class="bar">
    <div></div>
    <pen-tools :selected-pen="selectedPen" />
    <color-tools :selected-color="selectedColor" />
    <div></div>
  </div>
</template>

<script>
import PenTools from "@/components/PenTools.vue";
import ColorTools from "@/components/ColorTools.vue";

export default {
  name: "PaintingToolbar",
  components: {
    "pen-tools": PenTools,
    "color-tools": ColorTools
  },
  props: {
    selectedPen: Number,
    selectedColor: Number
  }
};
</script>

<style scoped>
.bar {
  height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0px 0px;
  display: grid;
  grid-template-columns: 15px 1fr 1fr 15px;
}
</style>