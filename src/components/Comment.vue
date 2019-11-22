<template>
  <div class="comment_card">
    <div class="pic_star_area">
      <img :src="item.imgSrc" class="profile" />
      <star-rate class="star_rate" :rate="item.rate" />
    </div>
    <div class="comment_grey_area">
      <div class="grey_card">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import FiveStarDisplay from "@/components/FiveStarDisplay.vue";

export default {
  name: "Comment",
  props: {
    //{id:Number,imgSrc:String,text:String,rate:Number}
    item: Object
  },
  components: {
    "star-rate": FiveStarDisplay
  }
};
</script>

<style scoped>
.comment_card {
  display: grid;
  grid-template-columns: 50px 1fr;
  column-gap: 20px;
}
.pic_star_area {
  width: 100%;
}
.comment_grey_area {
  width: 100%;
}
.grey_card {
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  min-height: 55px;
}
.profile {
  width: 50px;
  margin: auto;
  display: block;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid lightgrey;
}
.star_rate {
  width: 40px;
  padding-top: 5px;
  margin: auto;
}
</style>