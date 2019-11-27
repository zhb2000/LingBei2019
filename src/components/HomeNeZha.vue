<template>
  <div class="whole_win_card">
    <img src="pic_res/home/nezha-background.jpg" class="bg_img" />
    <img src="pic_res/home/nezha-dragon.png" class="left_img" />
    <img src="pic_res/home/nezha.png" class="right_img" />
    <div class="wrapper">
      <div class="center_box">
        <img src="pic_res/home/nezha-title.png" class="title_img" />
        <div class="card">
          <p>“我命由我不由天！是魔是仙，我自己决定！”</p>
          <p class="grey_text">
            2019年07月26日上映
            <a href="https://www.baidu.com">了解更多>></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNeZha"
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
.left_img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  z-index: 15;
}
.right_img {
  position: absolute;
  top: -200px;
  right: 0;
  width: 800px;
  z-index: 16;
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
  width: 400px;
  margin: auto;
}
.title_img {
  width: 400px;
  padding: 0 50px;
  margin-top: 100px;
  margin-bottom: 50px;
}
.card {
  width: 100%;
  padding: 10px 10px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #f3e264;
  z-index: 30;
  border-radius: 10px;
}
.grey_text {
  color: #c7bb5d;
}
.grey_text a {
  color: #c7bb5d;
}
</style>