<template>
  <div class="card">
    <float-tag class="float_tag">用户评论</float-tag>
    <my-comment v-for="item in commentArray" :key="item.id" :item="item" class="comment_item" />
  </div>
</template>

<script>
import PinkFloatTag from "@/components/PinkFloatTag.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "DetailComment",
  components: {
    "float-tag": PinkFloatTag,
    "my-comment": Comment
  },
  data: function() {
    return {
      commentArray: [
        {
          id: 0,
          imgSrc: require("@/assets/profile_photo/头像-1.jpg"),
          text: "比我预想的还！要！好！看！画面够美打斗也够流畅，剧情不复杂，笑泪皆具，大圣三百六十度无死角的帅",
          rate: 4.1
        },
        {
          id: 1,
          imgSrc: require("@/assets/profile_photo/头像-16.jpg"),
          text: "意外的好看！！！制作精良，有让人眼前一亮的小细节，笑点布置得还算密集，本土味道极浓的民乐bgm上花了很大的心思，童自荣老师有一小段唱腔也是美哭……重点是剧情真的还不错唉！当初的魁拔就弱很多了，剧情撑不起设定的典型……(^o^) 支持国产动画！",
          rate: 4.3
        },
        {
          id: 2,
          imgSrc: require("@/assets/profile_photo/头像-13.jpg"),
          text: "八年的制作下，当代国产动画终于有了3D景深、画面构图、色彩调配的新典范，还强化了几段传统配乐，称得上当代国漫分水岭。 不过部分造型有点cos，剧情某种程度上和《西游降魔》等一样，只是一个主流化的变奏形式，原创力匮乏。期待后作能有突破。",
          rate: 4.2
        },
        {
          id: 3,
          imgSrc: require("@/assets/profile_photo/头像-11.jpg"),
          text: "“我要这天，再遮不住我眼； 要这地，再埋不了我心；要这众生，都明白我意；要那诸佛，都烟消云散。”",
          rate: 4.5
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  width: 100%;
  border-radius: 20px;
  /* box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 2px 20px 3px #44546a3a;
  /* overflow: hidden; */
  padding: 30px 20px 20px 20px;
  position: relative;
}
.float_tag {
  position: absolute;
  top: -15px;
  left: 20px;
}
.comment_item {
  width: 100%;
  margin-bottom: 20px;
  color: #484848;
  font-size: 14px;
  line-height: 25px;
  
}
</style>