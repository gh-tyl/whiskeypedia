<template>
  <section>
    <swiper :slidesPerView="3" :spaceBetween="100" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img class="slideImg" src="../../img/home-main.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/cocktails-main.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/whiskey-3.png">
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// npm i swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "HomeSlideCompo",
  components:{
    Swiper,
    SwiperSlide,
  },
  props:[],
  setup(){
    return {
      modules: [Navigation],
    };
  },
  methods:{

  },
  watch:{

  }
}
</script>

<style>
  .slideImg{
    width: 100%;
  }
  .swiper{
    overflow: hidden;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>