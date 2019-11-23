<template>
  <div class="whole_win_card">
    <img src="@/assets/home/firstScene-title.png" class="bg_img" />
    <img src="@/assets/home/firstScene-pic.png" class="down_img" />
  </div>
</template>

<script>
export default {
  name: "HomeFirst"
};
</script>

<style scoped>
.whole_win_card {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.bg_img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
}
.down_img {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 15;
  animation: to_up 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}
@keyframes to_up {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 0;
  }
}
</style>