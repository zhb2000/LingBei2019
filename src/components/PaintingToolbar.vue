<template>
  <div class="bar">
    <pen-tools
      class="pen_tool_area"
      :selected-pen="selectedPen"
      @change-pen="$emit('change-pen',$event)"
    />
    <color-tools
      class="color_tool_area"
      :selected-color="selectedColor"
      @change-color="$emit('change-color',$event)"
    />
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
  padding: 0px 15px;
  background-color: white;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0px 0px;
  display: grid;
}
.pen_tool_area {
  grid-column-start: pen-start;
  grid-column-end: pen-end;
  grid-row-start: pen-start;
  grid-row-end: pen-end;
}
.color_tool_area {
  grid-column-start: color-start;
  grid-column-end: color-end;
  grid-row-start: color-start;
  grid-row-end: color-end;
  background-color: white;
}
@media screen and (min-width: 701px) {
  .bar {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "pen color";
  }
}
@media screen and (max-width: 700px) {
  .bar {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "pen"
      "color";
  }
  .pen_tool_area{
    z-index: 1;
  }
  .color_tool_area{
    position: relative;
    z-index: 3;
    border-top: 1px solid gray;
  }
}
</style>