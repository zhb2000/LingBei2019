<template>
  <div class="star_grid" :class="{space_col:hasSpace}" >
    <img v-for="i in rangeArray" :key="i" :src="starSrc(i)" class="star_img" />
  </div>
</template>

<script>
export default {
  name: "FiveStarDisplay",
  props: {
    rate: Number,
    hasSpace:{
      type:Boolean,
      default:false
    }
  },
  data: function() {
    return {
      fiveRate: this.rate / 2,
      rangeArray: [0, 1, 2, 3, 4]
    };
  },
  methods: {
    starSrc(i) {
      if (this.fiveRate - i > 0.5) {
        return "pic_res/icon/star_icon/1.svg";
      } else if (this.fiveRate - i > 0) {
        return "pic_res/icon/star_icon/0.5.svg";
      } else {
        return "pic_res/icon/star_icon/0.svg";
      }
    }
  }
};
</script>

<style scoped>
.star_grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
}
.space_col{
  column-gap: 5px;
  grid-column-gap: 5px;
}
.star_img {
  width: 100%;
}
</style>