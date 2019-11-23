<template>
  <div class="header">
    <float-tag class="tag">
      {{tagText}}
    </float-tag>
    <div></div>
    <a :href="link" class="link">
      {{linkText}}
    </a>
  </div>
</template>

<script>
import PinkFloatTag from "@/components/PinkFloatTag.vue";

export default {
  name: "CardGroupHeader",
  components: {
    "float-tag": PinkFloatTag
  },
  props: {
    link: String,
    tagText:String,
    linkText:String
  }
};
</script>

<style scoped>
.header{
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 60px;
    justify-items: center;
    align-items: center;
}
.tag{
    display: block;
}
.link{
    color: black;
    display: block;
    text-decoration: none;
}
.link:hover{
    color: darkblue;
    text-decoration: underline;
}
</style>