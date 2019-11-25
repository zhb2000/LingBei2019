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
  background-color: black;
}
.bg_img {
  position: absolute;
  top: -150px;
  width: 100%;
  object-fit: cover;
  animation: change_opacity 1.5s;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  z-index: 10;
}
.down_img {
  position: absolute;
  bottom: -50px;
  width: 100%;
  z-index: 15;
  animation: change_opacity 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}
@keyframes change_opacity {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>