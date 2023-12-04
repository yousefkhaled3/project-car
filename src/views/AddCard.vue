<template>
  <div class="container">
    <router-link class="back" to="payingoff">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">visa</h1>
    <form>
      <div>
        <label class="mb-2">رقم البطاقه</label>
        <input
          v-on:keyup="inputkeydown"
          type="number"
          class="input-all"
          placeholder="ادخل رقم البطاقه"
          v-model="numbervalue"
        />
      </div>
      <div class="row mt-4">
        <div class="col-lg-6">
          <div class="mb-3">
            <label class="mb-2">تاريخ انتهاء الصلاحيه</label>
            <input
              v-on:keyup="inputkeydown"
              type="number"
              class="input-all"
              placeholder="الشهر / السنه"
              v-model="numbervalue2"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <label class="mb-2">CVV</label>
            <input
              v-on:keyup="inputkeydown"
              type="password"
              class="input-all"
              placeholder="رمز الامان CVV"
              v-model="numbervalue3"
            />
          </div>
        </div>
      </div>
      <div class="chekbox-addcard">
        <h5>تذكر البطاقه</h5>
        <div class="toggle">
          <input
            type="checkbox"
            checked
            class="toglle-chekbox toglle-chekbox-2"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <a
          href="http://localhost:8080/#/payingoff"
          @click="routfunc"
          class="link-localhosh btn-all-2 mt-5"
        >
          الاستمرار
        </a>
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
      numbervalue2: "",
      numbervalue3: "",
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
