<template>
  <div class="container">
    <div class="order-header mb-4">
      <router-link class="back" to="myaccount">
        <fa icon="arrow-right" />
      </router-link>
      <h3>المحفظه</h3>
      <div></div>
    </div>
    <div class="section-home">
      <h4 class="text-white mb-4">رصيد المحفظه الحالي</h4>
      <div class="d-flex gap-3 align-items-center mb-4">
        <h1 class="text-white">1,500</h1>
        <h6 class="text-white">ريال سعودي</h6>
      </div>
      <div class="add-account-content">
        <a href="http://localhost:8080/?#/addportfolio" class="add-account">
          <div class="add-account-icon">
            <fa icon="dollar-sign" />
          </div>
          <h6 class="text-white">اضافه الرصيد</h6>
        </a>
        <a href="" class="add-account">
          <div class="add-account-icon">
            <fa icon="gift" />
          </div>
          <h6 class="text-white">ارسال هديه</h6>
        </a>
      </div>
    </div>
    <div class="portfolio">
      <div class="d-flex justify-content-between">
        <h5>البطاقه المحفوظه</h5>
        <h6 @click="clickdelateshow" class="edit-portfolio">تعديل</h6>
      </div>
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
        <fa @click="clickdelate" class="portfolio-trash" icon="trash" />
      </div>
      <div class="plus-box mt-2">
        <fa icon="plus" class="plus-collapse" />
        <h5>اضافه بطاقه جديده</h5>
      </div>
    </div>
    <div class="portfolio">
      <div class="portfolio-content" v-for="(portf, i) in 3" :key="i">
        <div class="order-box">
          <div class="order-icon-car">
            <fa icon="gift" />
          </div>
          <div>
            <h5>ارسال هديه</h5>
            <p class="order-item color-trans">يوم الاتنين 20 مايو 2023</p>
          </div>
        </div>
        <h5>200 ر.س</h5>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    clickdelateshow() {
      $(".portfolio-trash").fadeIn();
    },
    clickdelate() {
      $(".portfolio-mony").hide();
    },
  },
};
</script>
