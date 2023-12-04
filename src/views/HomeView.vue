<template>
  <header>
    <div class="container">
      <div class="header-home">
        <h6>اهلا بك</h6>
        <div class="content-bell">
          <fa icon="bell" />
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="container">
      <div class="section-home">
        <h1 class="text-white">غسيل سيارتك اسهل من اي وقت مضي</h1>
        <h5 class="text-item-home">احجز موعدك التالي بسهوله</h5>
        <div class="d-flex justify-content-end">
          <img class="home-img" src="../image/down-remove.png" />
        </div>
      </div>
      <h4 class="home-title mb-3 mt-3">طلب غسله جديده</h4>
      <carousel :items-to-show="4" :breakpoints="breakpoints">
        <slide v-for="slide in 4" :key="slide">
          <a href="http://localhost:8080/#/mapcontent">
            <div class="carousel-box">
              <div class="box-car">
                <fa icon="car" class="icon-car" />
              </div>
              <div class="carousel-text">
                <h4 class="mb-2">غسيل مباشر</h4>
                <h6 class="home-title">
                  غسيل يدوي كامل وتنظيف النوافذ بالداخل والخارج
                </h6>
              </div>
            </div>
          </a>
        </slide>
      </carousel>
      <div class="inner">
        <div class="inner-box">
          <fa icon="car" class="icon-car" />
          <h3>الباقات الشهريه</h3>
        </div>
        <router-link class="back-two" to="monthlypackages">
          <fa class="back-item m-0" icon="arrow-left" />
        </router-link>
      </div>
    </div>
  </section>
  <footer>
    <a href="http://localhost:8080/#/home">
      <div class="footer-box">
        <fa class="active-color" icon="home" />
        <h6>الرئسيه</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/myrequests">
      <div class="footer-box">
        <fa class="color-trans" icon="code-pull-request" />
        <h6>طلباتي</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/thegoll">
      <div class="footer-box">
        <fa class="color-trans" icon="bullseye" />
        <h6>الهدف</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/myaccount">
      <div class="footer-box">
        <fa class="color-trans" icon="user" />
        <h6>حسابي</h6>
      </div>
    </a>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      breakpoints: {
        1024: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
    };
  },
});
</script>
