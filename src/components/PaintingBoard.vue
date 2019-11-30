<template>
  <div class="painting_board" ref="outer" id="outer">
    <transition name="fade">
      <div class="score_mask" v-show="showScore">
        <div class="score_box">
          <div class="score_text">您的得分:{{" "+score}}</div>
          <div class="comment_text">{{scoreComment}}</div>
        </div>
      </div>
    </transition>
    <canvas id="canvas" ref="canvas" class="draw_canvas"></canvas>
    <a href="javascript:void(0);" ref="download" download="picture.png" v-show="false"></a>
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
    },
    showScore: {
      type: Boolean,
      default: true
    },
    score: {
      type: Number,
      default: 50
    },
    scoreComment: {
      type: String,
      default: "lalala"
    }
  },
  data() {
    return {
      canvas: this.$refs.canvas,
      context: null,
      isPainting: false,
      lastX: 0,
      lastY: 0,
      historyList: [],
      nowIndex: -1,
      maxIndex: -1
    };
  },
  mounted() {
    this.getCanvas();

    setTimeout(() => {
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;

      this.context.fillStyle = "#ffffff";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
      if (that.isPainting) {
        that.isPainting = false;
        var dataUrl = that.canvas.toDataURL();
        that.nowIndex++;
        that.historyList[that.nowIndex] = dataUrl;
        that.maxIndex = that.nowIndex;
      }
    }

    this.canvas.onpointerdown = pointerDownHandle;
    this.canvas.onpointermove = pointerMoveHandle;
    this.canvas.onpointerup = pointerUpHandle;
  },
  methods: {
    getCanvas() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext("2d");
    },
    undo() {
      if (this.nowIndex >= 0) {
        this.nowIndex--;
        var image = new Image();
        image.src = this.historyList[this.nowIndex];
        var width = this.canvas.width;
        var height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
        image.onload = () => {
          this.context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            width,
            height
          );
        };
      }
    },
    restore() {
      if (this.nowIndex < this.maxIndex) {
        this.nowIndex++;
        var image = new Image();
        image.src = this.historyList[this.nowIndex];
        var width = this.canvas.width;
        var height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
        image.onload = () => {
          this.context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            width,
            height
          );
        };
      }
    },
    download() {
      this.$refs.download.href = this.canvas.toDataURL("image/png");
      this.$refs.download.click();
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
  position: relative;
}
.draw_canvas {
  background-color: white;
  touch-action: none;
}
.score_mask {
  background-color: rgba(0, 0, 0, 0.384);
  position: absolute;
  height: 100%;
  width: 100%;
}
.score_box {
  padding-top: 50px;
  width: 80%;
  margin: auto;
  color: white;
  /* background-color: bisque; */
  text-align: center;
}
.score_text {
  font-size: 80px;
  margin-bottom: 10px;
}
.comment_text {
  font-size: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>