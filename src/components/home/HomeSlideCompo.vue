<template>
  <section>
    <swiper :slidesPerView="3" :spaceBetween="200" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, idx) in slideItems" :key="idx">
        <img v-bind:src="item.image_path_0" v-bind:alt="item.name">
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
  props:["slideItems"],
  setup(){
    return {
      modules: [Navigation],
    };
  },
  methods:{
    test(){
      console.log(this.slideItems);
    }
  },
  watch:{

  }
}
</script>

<style>
  .swiper{
    overflow: hidden;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>