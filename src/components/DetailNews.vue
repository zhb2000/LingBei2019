<template>
  <div class="card">
    <float-tag class="float_tag">相关资讯</float-tag>
    <div class="grey_card">
      <div v-for="item in newsArray" :key="item.id" class="news_item">
        <a :href="item.link">{{item.linkText}}</a>
        <div>{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PinkFloatTag from "@/components/PinkFloatTag.vue";

export default {
  name: "DetailNews",
  props: {
    newsArray: Array
  },
  components: {
    "float-tag": PinkFloatTag
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 2px 20px 3px rgba(68, 84, 106, 0.227);
  padding: 30px 20px 20px 20px;
  position: relative;
}
.float_tag {
  position: absolute;
  top: -15px;
  left: 20px;
}
.grey_card {
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 10px;
  padding: 0 15px;
}
.news_item {
  width: 100%;
  padding: 10px 0;
  color: #a6a6a6;
  font-size: 14px;
}
.news_item a {
  color: #484848;
  font-size: 14px;
  line-height: 25px;
  text-decoration: underline;
}
.news_item div {
  width: 100%;
  text-align: right;
}
</style>