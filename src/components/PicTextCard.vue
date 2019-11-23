<template>
  <div class="outer">
    <a class="inner" :href="item.link">
      <div class="card_content">
        <div class="pic_area">
          <img :src="item.imgLink" class="card_pic" />
        </div>
        <div class="text_area">
          <div class="text_wrapper_out">
            <div class="text_wrapper_in">
              <p class="title">{{item.title}}</p>
              <p class="description">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <my-tag>{{item.tag}}</my-tag>
  </div>
</template>
    
<script>
import SquareCardTag from "@/components/SquareCardTag.vue";

export default {
  name: "PicTextCard",
  components: {
    "my-tag": SquareCardTag
  },
  props: {
    //{link:String,imgLink:String,title:String,description:String,tag:String}
    item: Object
  }
};
</script>

<style scoped>
/**固定宽高比 */
.outer {
  background-color: white;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
/**用于放置内容 */
.inner {
  display: block;
  background-color: white;
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
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  overflow: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 70px;
}
/**放图片的区域 */
.pic_area {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
/**图片 */
.card_pic {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/**文字区域，设置padding */
.text_area {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 20px;
}
/**垂直居中 */
.text_wrapper_out {
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 100%;
}
/**包住两行文字 */
.text_wrapper_in {
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
}
.title {
  font-size: 20px;
  margin: 0 0 5px 0;
  line-height: 22px;
}
.description {
  font-size: 14px;
  color: grey;
  margin: 5px 0 0 0;
  line-height: 16px;
}
</style>