<template>
  <div class="container">
    <div class="order-header">
      <router-link class="back" to="myaccount">
        <fa icon="arrow-right" />
      </router-link>
      <h3>تواصل معنا</h3>
      <div></div>
    </div>
    <p class="text-forms mt-4 mb-5">
      اترك لنا رساله الان وسوف نتواصل معك في اقرب وقت ممكن
    </p>
    <form>
      <div class="edit-forms">
        <label class="mb-2">الاسم</label>
        <input
          type="text"
          class="input-all"
          v-on:keyup="inputkeydown"
          placeholder="محمد احمد"
          v-model="numbervalue"
        />
      </div>
      <div class="edit-forms">
        <textarea
          class="input-all textarea-connect"
          placeholder="ماذا تريد ان تخبرنا"
          v-on:keyup="inputkeydown"
          v-model="numbervalue2"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn-all-2 mt-5" type="submit">ارسال</button>
      </div>
    </form>
    <div class="connect-sohail">
      <h5>او تواصل معنا عبر</h5>
      <div class="d-flex gap-2">
        <a href="">
          <fa class="icon-connect" :icon="['fab', 'facebook']" />
        </a>
        <a href="">
          <fa class="icon-connect" :icon="['fab', 'instagram']" />
        </a>
        <a href="">
          <fa class="icon-connect" :icon="['fab', 'twitter']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      numbervalue: "",
      numbervalue2: "",
    };
  },
  methods: {
    inputkeydown() {
      $(".btn-all-2").addClass("backg-gren");
      if (
        this.numbervalue === "" &&
        this.numbervalue2 === "" &&
        this.numbervalue3 === ""
      ) {
        $(".btn-all-2").removeClass("backg-gren");
      }
    },
  },
};
</script>
