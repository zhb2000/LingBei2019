<template>
  <div class="card">
    <float-tag class="float_tag">剧照</float-tag>
    <div class="group_wrapper">
    <div class="image_group">
      <a target="_blank" v-for="item in imgArray" :key="item.id" :href="item.link">
        <img :src="item.imgSrc" class="image" />
      </a>
    </div>
    </div>
  </div>
</template>

<script>
import PinkFloatTag from "@/components/PinkFloatTag.vue";

export default {
  name: "DetailPictureCard",
  components: {
    "float-tag": PinkFloatTag
  },
  props: {
    //[{id:Number,imgSrc:String,link:String}]
    imgArray: Array
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
.group_wrapper{
  overflow: hidden;
  height: 120px;
}
.image_group {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: inline-block;
  -ms-overflow-style: none;/**edge隐藏滚动条 */
  height: calc(100% + 17px);
  width: 100%;
}
.image_group::-webkit-scrollbar{
  display: none;
}
.image {
  height: 100%;
  margin-right: 10px;
  display: inline-block;
  border-radius: 3px;
}
</style>