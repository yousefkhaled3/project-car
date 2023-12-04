<template>
  <div class="popup">
    <div class="popup-portfolio">
      <div class="popup-inhert">
        <div class="d-flex justify-content-between">
          <h5>اضافه رصيد</h5>
          <h5>100 ريال سعودي</h5>
        </div>
        <div @click="showportfoliotwo" class="portfolio portfolio-item-popup">
          <h6 class="color-trans">ارسال من طريق</h6>
          <div class="portfolio-mony">
            <div class="d-flex">
              <img class="details-img" src="../assets/kisspng-logo.png" />
              <div class="portfolio-item">
                <h5>اسم البنك</h5>
                <div class="d-flex align-items-center gap-1">
                  <p class="color-trans">1234</p>
                  <div class="d-flex align-self-center">
                    <fa class="collapse-star" icon="star" />
                    <fa class="collapse-star" icon="star" />
                    <fa class="collapse-star" icon="star" />
                    <fa class="collapse-star" icon="star" />
                    <fa class="collapse-star" icon="star" />
                  </div>
                </div>
              </div>
            </div>
            <fa icon="arrow-left" class="account-icon-left" />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="routfunc" class="btn-all mt-3 backg-gren">
            اضافه الرصيد الي المجفظه
          </button>
        </div>
      </div>
      <div class="popup-inhert-two">
        <div class="order-header mt-0 mb-3">
          <router-link class="back" @click="backinhert" to="">
            <fa icon="arrow-right" />
          </router-link>
          <h3>اختر طريقه الدفع</h3>
          <div></div>
        </div>
        <div class="portfolio">
          <h6 class="color-trans">اخر طريقه الدفع</h6>
          <div class="portfolio-mony">
            <div class="d-flex">
              <img class="details-img" src="../assets/kisspng-logo.png" />
              <div class="portfolio-item gap-0">
                <h5>رصيد المحفظه</h5>
                <p class="color-trans">الرصيد 1500 ريال سعودي</p>
              </div>
            </div>
            <div class="collapse-radio">
              <div class="collapse-radio-item"></div>
            </div>
          </div>
          <div class="portfolio-mony">
            <div class="d-flex">
              <img class="details-img" src="../assets/kisspng-logo.png" />
              <div class="portfolio-item">
                <h5>اسم البنك</h5>
                <div class="d-flex align-items-center gap-1">
                  <p class="color-trans">1234</p>
                  <div
                    v-for="(star, i) in 5"
                    :key="i"
                    class="d-flex align-self-center"
                  >
                    <fa class="collapse-star" icon="star" />
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse-radio collapse-radio-two"></div>
          </div>
          <div class="plus-box mt-2">
            <fa icon="plus" class="plus-collapse" />
            <h5>اضافه بطاقه جديده</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="order-header mb-4">
      <router-link class="back" to="myportfolio">
        <fa icon="arrow-right" />
      </router-link>
      <h3>اضافه رصيد</h3>
      <div></div>
    </div>
    <form>
      <div>
        <div class="content-forms content-forms-two content-forms-portfolio">
          <input
            v-on:keyup="inputkeydown"
            v-model="numbervalue"
            class="input-form"
            type="number"
          />
        </div>
        <div class="sallery-content">
          <h1 class="sallery" v-if="sallerychekd === true">
            {{ numbervalue }}
          </h1>
          <h1 class="sallery-2 color-trans" v-if="sallerychekd === false">0</h1>
          <h5>ريال سعودي</h5>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="popupshow" class="btn-all-2 mt-5" type="submit">
            ارسال
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      numbervalue: "",
      sallerychekd: false,
    };
  },
  methods: {
    inputkeydown() {
      this.sallerychekd = true;
      if (this.sallerychekd === true) {
        $(".btn-all-2").addClass("backg-gren");
        $(".sallery").addClass("text-dark");
        if (this.numbervalue === "") {
          $(".btn-all-2").removeClass("backg-gren");
          this.sallerychekd = false;
        }
      }
    },
    popupshow() {
      $(".popup").fadeIn();
    },
    showportfoliotwo() {
      $(".popup-inhert").fadeOut();
      $(".popup-inhert-two").fadeIn(500);
    },
    backinhert() {
      $(".popup-inhert-two").fadeOut();
      $(".popup-inhert").fadeIn();
    },
    routfunc() {
      this.$router.push({ name: "doneactive" });
    },
  },
};
</script>
