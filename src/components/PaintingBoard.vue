<template>
  <div class="painting_board" ref="outer" id="outer">
    <canvas id="canvas" ref="canvas" class="draw_canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "PaintingBoard",
  props: {
    penWidth: {
      type: Number,
      default: 4
    },
    penColor: {
      type: String,
      default: "#ff3860"
    },
    isEraser: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      canvas: this.$refs.canvas,
      context: null,
      isPainting: false,
      lastX: 0,
      lastY: 0
    };
  },
  mounted() {
    this.getCanvas();

    setTimeout(() => {
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }, 800);

    var that = this;

    /**画点 */
    function drawPoint(x, y, radius) {
      that.context.save();
      if (that.isEraser) {
        that.context.fillStyle = "#ffffff";
      } else {
        that.context.fillStyle = that.penColor;
      }
      that.context.beginPath();
      that.context.arc(x, y, radius, 0, Math.PI * 2);
      that.context.closePath();
      that.context.fill();
    }
    /**画线 */
    function drawLine(x1, y1, x2, y2) {
      that.context.lineWidth = that.penWidth;
      that.context.lineCap = "round";
      that.context.lineJoin = "round";
      if (that.isEraser) {
        that.context.strokeStyle = "#ffffff";
      } else {
        that.context.strokeStyle = that.penColor;
      }
      that.context.beginPath();
      that.context.moveTo(x1, y1);
      that.context.lineTo(x2, y2);
      that.context.stroke();
      that.context.closePath();
    }
    /**pointer按下 */
    function pointerDownHandle(e) {
      that.isPainting = true;
      var x = e.offsetX;
      var y = e.offsetY;
      that.lastX = x;
      that.lastY = y;
      drawPoint(x, y, that.penWidth / 2);
    }
    /**pointer移动 */
    function pointerMoveHandle(e) {
      if (that.isPainting) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawLine(that.lastX, that.lastY, x, y);
        that.lastX = x;
        that.lastY = y;
      }
    }
    /**pointer松开 */
    function pointerUpHandle() {
      that.isPainting = false;
    }

    this.canvas.onpointerdown = pointerDownHandle;
    this.canvas.onpointermove = pointerMoveHandle;
    this.canvas.onpointerup = pointerUpHandle;
  },
  methods: {
    getCanvas() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext("2d");
    }
  }
};
</script>

<style scoped>
.painting_board {
  /* background-color: wheat; */
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.draw_canvas {
  /* transition: opacity 0.3s; */
  background-color: white;
  touch-action: none;
}
</style>