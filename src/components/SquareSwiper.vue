<template>
  <div>
    <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in items" :key="item.id" class="slide_page">
        <card :item="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import SquareSwiperCard from "@/components/SquareSwiperCard.vue";

export default {
  name: "SquareSwiper",
  components: {
    swiper,
    swiperSlide,
    card: SquareSwiperCard
  },
  props: {
    //[{id:Number,link:String,imgSrc:String,text:String}]
    items: Array
  },
  data() {
    return {
      swiperOption: {
        //loop: true,
        mousewheel: {
          releaseOnEdges: true
        },
        keyboard : true,
        spaceBetween: 0,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 1.3,
        // autoplay: {
        //   delay: 4000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped>
.slide_page:not(.swiper-slide-active) {
  transform: scale(0.9);
  padding-bottom: 30px;
}
.slide_page {
  transition: 0.3s;
  padding-bottom: 30px;
}
</style>