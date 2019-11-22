<template>
  <div class="card">
    <div>
      <float-tag class="float_tag">剧照</float-tag>
    </div>
    <div class="image_group">
      <a v-for="item in imgArray" :key="item.id" :href="item.link">
        <img :src="item.imgSrc" class="image" />
      </a>
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
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  /* overflow: hidden; */
  padding: 30px 20px 20px 20px;
  position: relative;
}
.float_tag{
  position: absolute;
  top: -15px;
  left: 20px;
}
.image_group {
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
}
.image {
  height: 120px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 3px;
}
</style>