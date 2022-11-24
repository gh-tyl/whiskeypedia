<template>
  <section>
    <swiper :slidesPerView="3" :spaceBetween="100" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img class="slideImg" src="../../img/main-01.png">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/main-02.png">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/main-03.png">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/main-04.png">
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/main-05 (2).png" />
      </swiper-slide>
      <swiper-slide>
        <img class="slideImg" src="../../img/main-06.png">
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
  components: {
    Swiper,
    SwiperSlide,
  },
  props: [],
  setup() {
    return {
      modules: [Navigation],
    };
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style>
.slideImg {
  width: 60vh;
  height: 70vh;
}

video {
  width: 60vh;
  height: 70vh;
}

.swiper {
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-content: center;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  color: #FDEEC0;
}
</style>
