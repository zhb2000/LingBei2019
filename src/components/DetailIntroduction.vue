<template>
  <div class="card_outer">
    <div class="card_grid">
      <div class="img_area">
        <img class="image" :src="item.imgSrc" />
      </div>
      <div class="text_area">
        <div class="brief">
          <p class="title">{{item.title}}</p>
          <p class="info">导演：{{item.director}}</p>
          <p class="info">上映日期：{{item.date}}</p>
          <p class="info">类型：{{item.type}}</p>
        </div>
        <div class="grey_card">
          <div class="text_wrapper">
            <div class="detail_text">{{item.detail}}</div>
          </div>
          <float-tag class="float_tag">简介</float-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PinkFloatTag from "@/components/PinkFloatTag.vue";

export default {
  name: "DetailIntroduction",
  props: {
    //{imgSrc:String,title:String,director:String,date:String,type:String,detail:String}
    item: Object
  },
  components: {
    "float-tag": PinkFloatTag
  }
};
</script>

<style scoped>
.card_outer {
  background-color: white;
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card_grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  overflow: hidden;
  column-gap: 30px;
}
/* .img_area {
  padding: 0 10px 0 0;
} */
.image {
  width: 100%;
  border-radius: 4px;
}
.text_area {
  width: 100%;
  overflow: hidden;
}
.brief {
  margin-bottom: 30px;
}
.brief > p {
  margin: 8px 0;
  word-wrap: break-word;
  overflow: hidden;
}
.title {
  font-size: 26px;
  color: #43546a;
}
.info {
  font-size: 16px;
  color: #5a5a5a;
}
.grey_card {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px 10px 10px 10px;
  position: relative;
}
.text_wrapper {
  width: 100%;
  overflow: hidden;
}
.detail_text {
  width: 100%;
  word-wrap: break-word;
}
.float_tag {
  position: absolute;
  top: -15px;
  left: 10px;
}
</style>