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
  box-shadow: 0px 2px 20px 3px rgba(68, 84, 106, 0.227);
  overflow: hidden;
}
.card_grid {
  display: grid;
  overflow: hidden;
  gap: 30px;
  grid-gap: 30px;
}
.img_area {
  grid-column-start: a-start;
  grid-column-end: a-end;
  grid-row-start: a-start;
  grid-column-end: a-end;
}
.image {
  width: 100%;
  border-radius: 4px;
}
.text_area {
  width: 100%;
  overflow: hidden;
  grid-column-start: b-start;
  grid-column-end: b-end;
  grid-row-start: b-start;
  grid-column-end: b-end;
  color: #505050;
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
  background-color: #f5f5f5;
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
  line-height: 30px;
}
.float_tag {
  position: absolute;
  top: -15px;
  left: 10px;
}
@media screen and (min-width: 801px) {
  .card_grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto;
    grid-template-areas: "a b";
  }
  .image {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .card_grid {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "a"
      "b";
  }
  .image {
    width: 200px;
  }
}
</style>