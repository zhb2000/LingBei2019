<template>
  <div class="outer">
    <a class="inner" :href="item.link">
      <div class="card_content">
        <div></div>
        <div class="wrap_area">
          <p class="comment">{{item.comment}}</p>
        </div>
        <div class="wrap_area">
          <div class="user">
            <img class="photo" :src="item.imgLink" />
            <p class="user_note">
              对
              <strong>{{item.noteName}}</strong> 的评价
            </p>
          </div>
        </div>
      </div>
    </a>
    <my-tag style="background-color:#ff8889">{{item.tag}}</my-tag>
  </div>
</template>

<script>
import SquareCardTag from "@/components/SquareCardTag.vue";

export default {
  name: "SquareTextCard",
  props: {
    //{link:String,imgLink:String,comment:String,noteName:String,tag:String}
    item: Object
  },
  components: {
    "my-tag": SquareCardTag
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
  /* background-color: white; */
  background-image: linear-gradient(to bottom right, #feb1b5, #ebd2e3, #cddef8);
  overflow: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 30% 40% 30%;
}
.wrap_area {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  align-items: center;
  overflow: hidden;
  padding: 0 20px;
}
.comment {
  width: 100%;
  word-wrap: break-word;
}
.user {
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr;
  column-gap: 15px;
  align-items: center;
  overflow: hidden;
}
.photo {
  width: 100%;
  border-radius: 50%;
}
.user_note {
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
}
</style>