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
          imgSrc: require("@/assets/profile_photo/头像-16.jpg"),
          text: "lalalala",
          rate: 4.5
        },
        {
          id: 1,
          imgSrc: require("@/assets/profile_photo/头像-16.jpg"),
          text: "lalalala",
          rate: 4.5
        },
        {
          id: 2,
          imgSrc: require("@/assets/profile_photo/头像-16.jpg"),
          text: "lalalala",
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
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
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
}
</style>