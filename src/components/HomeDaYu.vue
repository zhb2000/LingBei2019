<template>
  <div class="whole_win_card">
    <img src="pic_res/home/dayu-background.png" class="bg_img" />
    <img src="pic_res/home/dayu-pic1.png" class="left_img" />
    <img src="pic_res/home/dayu-pic2.png" class="right_img" />
    <div class="wrapper">
      <div class="center_box">
        <img src="pic_res/home/dayu-title.png" class="title_img" />
        <div class="card">
          <p>所有活着的人类，都是海里一条巨大的鱼。出生的时候，他们从海的此岸出发。他们的生命就像横越大海，有时相遇，有时分开。死的时候，他们便到了岸，各去各的世界。</p>
          <p class="grey_text">
            2016年7月8日上映
            <a href="https://www.baidu.com">了解更多>></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeDaYu"
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
  left: -100px;
  width: 400px;
  z-index: 16;
  transition: 0.3s;
}
.right_img {
  position: absolute;
  top: 0;
  right: -50px;
  width: 400px;
  z-index: 15;
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
.title_img {
  padding-right: 50px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}
.card {
  width: 100%;
  color: black;
  border-radius: 10px;
  font-family: "宋体";
  font-size: 20px;
  transition: 0.5s;
}
.grey_text {
  color: #471c0d;
  font-weight: bold;
}
.grey_text a {
  color: #471c0d;
  font-weight: bold;
}
@media screen and (max-width: 800px) {
  .card {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 10px;
  }
}
@media screen and (max-width: 600px) {
  .center_box {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
  .left_img {
    width: 300px;
  }
  .right_img {
    width: 300px;
  }
}
</style>