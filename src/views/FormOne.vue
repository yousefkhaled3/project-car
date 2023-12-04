<template>
  <div class="container">
    <router-link class="back" to="myforms">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">ادخل رقم جوالك</h1>
    <p class="text-forms">
      يرجي ادخال رقم الجوال لتسجيل الدخول او تسجيل الاستراك
    </p>
    <form>
      <div class="content-forms content-forms-two">
        <label>+966</label>
        <input
          v-on:keyup="inputkeydown"
          class="input-form input-form-two"
          type="number"
          placeholder="ادخل رقم جوالك هنا"
          v-model="numbervalue"
        />
      </div>
      <div class="d-flex justify-content-center">
        <a
          href="http://localhost:8080/#/formtwo"
          class="link-localhosh btn-all mt-5"
          type="submit"
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
    };
  },
  methods: {
    inputkeydown() {
      $(".btn-all").addClass("btn-showcolor");
      if (this.numbervalue === "") {
        $(".btn-all").removeClass("btn-showcolor");
      }
    },
  },
};
</script>
