<template>
  <div class="container mt-4">
    <div class="order-header mb-4">
      <router-link class="back" to="myaccount">
        <fa icon="arrow-right" />
      </router-link>
      <h3>العناوين المحفوظه</h3>
      <div></div>
    </div>
    <div class="portfolio" v-for="(portf, i) in 3" :key="i">
      <div class="portfolio-content">
        <div class="order-box">
          <div class="order-icon-car">
            <fa icon="gift" />
          </div>
          <div>
            <h5>ارسال هديه</h5>
            <p class="order-item color-trans">يوم الاتنين 20 مايو 2023</p>
          </div>
        </div>
        <fa @click="deletesavemap" class="delete-savemap" icon="trash" />
      </div>
    </div>
    <a href="http://localhost:8080/#/chooselocation">
      <div class="addlink-map">
        <div class="plus-box mt-2">
          <fa icon="plus" class="plus-collapse" />
          <h5>اضافه بطاقه جديده</h5>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    deletesavemap(event) {
      $(event.target).parent().parent().parent().fadeOut();
    },
  },
};
</script>
