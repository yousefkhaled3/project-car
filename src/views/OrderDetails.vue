<template>
  <div class="popup">
    <div class="popup-details">
      <div class="popup-box">
        <div class="popup-details-item">
          <h4>الغاء الطلب؟</h4>
          <h6>هل انت متاكد من انك تريد الغاء الطلب "غسيل مباشر"</h6>
        </div>
        <hr />
        <div class="row">
          <div class="col-lg-6">
            <button @click="btnpoup2" class="btn-popup">نعم الغاء</button>
          </div>
          <div class="col-lg-6">
            <button @click="btnpoup" class="btn-popup">لا</button>
          </div>
        </div>
      </div>
      <div class="popup-box-2">
        <div class="popup-details-item">
          <div class="popup-check">
            <fa icon="check" />
          </div>
          <h4>تم الغاء طلبك بنجاح</h4>
          <div class="d-flex gap-2 mt-2">
            <h6>رقم الطلب</h6>
            <h6 class="color-trans">#12344267</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="order-header">
      <router-link class="back" to="myrequests">
        <fa icon="arrow-right" />
      </router-link>
      <h3>تفاصيل الطلب</h3>
      <div></div>
    </div>
    <section>
      <div class="order-elment">
        <div class="d-flex gap-2">
          <h6>.رقم الطلب</h6>
          <h6 class="color-trans">#12344267</h6>
        </div>
        <div class="order-box">
          <fa icon="car" class="icon-car" />
          <div>
            <h5 class="mb-2">غسيل مباشر</h5>
            <h6>غسيل يدوي كامل وتنظيف النوافز بالداخل والخارج</h6>
          </div>
        </div>
        <div class="order-box">
          <div class="order-icon-car">
            <fa icon="car" />
          </div>
          <div>
            <h5>غسيل مباشر</h5>
            <p class="order-item color-trans">من 30 الي 45 دقيقه</p>
          </div>
        </div>
        <div class="order-box">
          <div class="order-icon-car">
            <fa icon="location-dot" />
          </div>
          <div>
            <h5>غسيل مباشر</h5>
            <p class="order-item color-trans">من 30 الي 45 دقيقه</p>
          </div>
        </div>
      </div>
      <Vue3MultiStepper
        v-model:step="step"
        :tabs="tabs"
        primaryColor1="#79031D"
        primaryColor2="#F2E6E8"
        backText="Go Back"
        nextText="Next"
        doneText="Finish"
        :loading="loading"
        :finalize="handleFormSubmission"
        :validateStep="validateStep"
      >
        <template><!-- Step 1 Content --></template>
        <template><!-- Step 2 Content --></template>
        <template><!-- Step 3 Content --></template>
        <template><!-- Step 4 Content --></template>
        <template><!-- Step 5 Content --></template>
      </Vue3MultiStepper>
      <div class="details-box">
        <h5>المجموع الفرعي</h5>
        <h6>80 ر.س</h6>
      </div>
      <div class="details-box">
        <h5>الخصم</h5>
        <h6>0 ر.س</h6>
      </div>
      <div class="details-box">
        <h5>المجموع الفرعي</h5>
        <h6>90 ر.س</h6>
      </div>
      <div class="details-box">
        <h5>تم الدفع بواسطه البطاقه</h5>
        <img class="details-img" src="../assets/kisspng-logo.png" />
      </div>
      <div class="d-flex justify-content-center mt-5 mb-4">
        <button @click="btnshowpopup" class="btn-all button-details">
          الغاء الطلب
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { Vue3MultiStepper } from "vue3-multi-stepper";
import $ from "jquery";

export default {
  components: {
    Vue3MultiStepper,
  },
  name: "App",
  data() {
    return {
      step: 1,
      loading: false,
      tabs: computed(() => {
        return [
          {
            title: "قيد الانتظار",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "جارئ التنفيذ",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "في الطريق",
            iconSuccess: null,
            isValid: true,
          },

          {
            title: "تم الانتهاء",
            iconSuccess: null,
            isValid: true,
          },
        ];
      }),
    };
  },

  methods: {
    btnpoup() {
      $(".popup").fadeOut(500);
    },
    btnpoup2() {
      $(".popup-box").fadeOut();
      $(".popup-box-2").fadeIn(500);
      setTimeout(function () {
        window.location = "http://localhost:8080/#/myrequests";
      }, 2000);
    },
    btnshowpopup() {
      $(".popup").fadeIn(300);
    },
    async handleFormSubmission() {
      this.loading = true;

      setTimeout(() => {
        location.reload();
      }, 2000);
    },

    validateStep(step) {
      if (step === 1) {
        return this.step1Check();
      } else if (step === 2) {
        return this.step2Check();
      } else if (step === 3) {
        return this.step3Check();
      } else if (step === 4) {
        return this.step4Check();
      }
      return true;
    },
    step1Check() {
      return true;
    },
    step2Check() {
      return true;
    },
    step3Check() {
      return true;
    },
    step4Check() {
      return true;
    },
    step5Check() {
      return true;
    },
  },
};
</script>
