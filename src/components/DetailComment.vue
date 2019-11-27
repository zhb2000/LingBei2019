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
  props: {
    commentArray: Array
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
.comment_item {
  width: 100%;
  margin-bottom: 20px;
  color: #484848;
  font-size: 14px;
  line-height: 25px;
}
</style>