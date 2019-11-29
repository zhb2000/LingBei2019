<template>
  <div class="outer">
    <a class="inner" target="_blank" :href="item.link">
      <div class="card_content">
        <img :src="item.imgSrc" class="bg_img" />
        <div class="bottom_grey">{{item.text}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SquareSwiperCard",
  //{id:Number,link:String,imgSrc:String,text:String}
  props: {
    item: Object
  }
};
</script>

<style scoped>
/**固定宽高比 */
.outer {
  border-radius: 10px;
  width: 100%;
  position: relative;
  transition: 0.3s;
  /* margin-top: 15px; */
}
/**用于放置内容 */
.inner {
  display: block;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-decoration: none;
  color: black;
}
/**卡片 */
.card_content {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  /* box-shadow: 0px 2px 20px 3px rgba(68, 84, 106, 0.227); */
  background-color: white;
  overflow: hidden;
  transition: 0.5s;
}

/* .card_content:hover {
  box-shadow: 0px 2px 20px 6px rgba(68, 84, 106, 0.322);
} */
.bg_img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.bottom_grey {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.473);
  border-radius: 0 0 10px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
@media screen and (min-width: 1001px) {
  .outer {
    padding-bottom: 35%;
  }
  .bottom_grey {
    font-size: 18px;
    padding: 10px 10px;
  }
}
@media screen and (min-width: 801px) and (max-width: 1000px) {
  .outer {
    padding-bottom: 40%;
  }
  .bottom_grey {
    font-size: 18px;
    padding: 10px 10px;
  }
}
@media screen and (max-width: 800px) {
  .outer {
    padding-bottom: 50%;
  }
  .bg_img {
    width: auto;
    height: 100%;
  }
  .bottom_grey {
    font-size: 16px;
    padding: 5px 5px;
  }
}
</style>