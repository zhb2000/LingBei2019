<template>
  <div class="card">
    <div class="header">
      <span class="header_title">临摹对象</span>
      <button class="select_button">选择图片</button>
    </div>
    <div class="pic_content">
      <img :src="picSrc" class="picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingPicture",
  props: {
    picSrc: String
  }
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-rows: 50px 1fr;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}

.header {
  width: 100%;
  text-align: center;
  overflow: hidden;
  background-color: dodgerblue;
  padding: 13px 20px;
}

.header_title {
  display: inline-block;
  height: 100%;
  color: white;
}
.select_button {
  float: right;
  height: 100%;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 15px;
  cursor: pointer;
}

.select_button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.pic_content {
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
}

.picture {
  display: block;
  width: 300px;
}

@media screen and (max-width: 800px) {
  .picture {
    display: block;
    width: 100%;
  }
}
</style>