<template>
  <div class="group_grid">
    <pic-text-card
      class="big"
      :item="{link:'https://www.baidu.com',imgLink:require('@/assets/art_works_list_img/罗小黑战记.jpg'),title:'标题',description:'描述',tag:'幕后'}"
    />
  </div>
</template>

<script>
import PicTextCard from "@/components/PicTextCard.vue";

export default {
  name: "CardGroupGrid",
  components: {
    "pic-text-card": PicTextCard
  }
};
</script>

<style scoped>
.group_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 2fr;
  grid-template-areas:
    "a a b c"
    "a a d e";
  grid-gap: 30px;
}
.big {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>