<template>
  <div class="whole_win_card">
    <img src="@/assets/home/baishe-background.jpg" class="bg_img" />
    <div class="character_group">
      <img src="@/assets/home/baishe-pic2.png" class="character" />
      <img src="@/assets/home/baishe-pic1.png" class="character" />
    </div>
    <img src="@/assets/home/baishe-title.png" class="title_img" />
    <div class="card">
      <p>五百年前，晚唐君主昏聩庸碌，掌握邪术的国师只手遮天，命令天下百姓捕蛇修法。为了拯救族群，白蛇冒险行刺，结果却遭遇挫败，还失去了记忆。当她再度醒来，发现自己被一个专门捕蛇的村落所救下，而那个胆小却善良的青年许宣则吸引了白蛇的注意。与此同时，国师派出爪牙四处追寻白蛇的下落，而蛇族更误解白蛇叛逃人类，接二连三派出杀手。</p>
      <p>五百年后的一段姻缘，早在这乱世之间便已缔结……</p>
      <p class="grey_text">
        2019年07月26日上映
        <a href="https://www.baidu.com">了解更多</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBaiSheCard"
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
.character_group {
  height: 420px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  overflow: hidden;
  animation: to_up 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}
.character {
  height: 100%;
  display: inline-block;
}
.title_img {
  position: absolute;
  top: 70px;
  right: 70px;
  height: 200px;
  z-index: 25;
  animation: to_down 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}
.card {
  position: absolute;
  right: 70px;
  bottom: 70px;
  width: 400px;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  z-index: 30;
  border-radius: 10px;
  animation: transparency 2s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
  line-height: 30px;
}
.grey_text {
  color: #a6a6a6;
}
.grey_text a {
  color: #a6a6a6;
}
@keyframes to_up {
  0% {
    bottom: -200px;
    opacity: 50%;
  }
  100% {
    bottom: 0;
    opacity: 100%;
  }
}
@keyframes to_down {
  0% {
    top: -200px;
    opacity: 50%;
  }
  100% {
    top: 70px;
    opacity: 100%;
  }
}
@keyframes transparency {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>