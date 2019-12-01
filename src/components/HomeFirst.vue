<template>
  <div class="whole_win_card">
    <img src="pic_res/home/firstScene-title.png" class="bg_img" />
    <img src="pic_res/home/firstScene-pic.png" class="down_img" />
    <div class="wrapper">
      <div class="center_box">
        <!-- <img src="pic_res/home/firstScene-title.png" class="title_img" /> -->
        <div class="card">
          <p>
            截至2019年8月8日,《哪吒之魔童降世》上映两周累计票房突破30亿,荣登中国电影票房排行榜第8位。从前几年以“黑马”之姿出现的《大圣归来》《大鱼·海棠》,到《大护法》《白蛇·缘起》《哪吒之魔童降世》“爆红”,这些优质动画电影让“国漫崛起”成为热议话题
            <a
              href="./worklist.html"
            >了解更多>></a>
          </p>
        </div>
      </div>
    </div>
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
  top: -50px;
  width: 100%;
  object-fit: cover;
  animation: change_opacity 1.5s;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  z-index: 10;
  transition: 0.3s;
}
.down_img {
  position: absolute;
  bottom: -100px;
  width: 120%;
  left: -10%;
  right: -10%;
  z-index: 15;
  animation: change_opacity 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
  transition: 0.3s;
}
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
}
.center_box {
  width: 500px;
  margin: auto;
  transition: 0.3s;
}
.card {
  width: 100%;
  margin-top: 45vh;
  color: #F0DAC0;
  border-radius: 10px;
  /* font-family: "宋体"; */
  font-size: 16px;
  transition: 0.5s;
}
.card a {
  color: #807366;
  /* font-weight: bold; */
}
@keyframes change_opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 900px) {
  .bg_img {
    top: 50px;
  }
  .down_img {
    bottom: 0;
  }
}
@media screen and (max-width: 600px) {
  .center_box {
    width: calc(100% - 60px);
    margin: 0 30px;
  }
  .bg_img {
    top: 100px;
    width: calc(100% + 120px);
    left: -60px;
    right: -60px;
  }
}
</style>