<template>
  <div class="container">
    <router-link class="back" to="formtwo">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">تسجيل الاشتراك</h1>
    <form>
      <div class="content-forms content-forms-two">
        <input
          v-on:keyup="inputkeydown"
          class="input-form input-form-two"
          type="text"
          placeholder="الاسم"
          v-model="numbervalue"
        />
      </div>
      <div class="content-forms content-forms-two">
        <input
          v-on:keyup="inputkeydown"
          class="input-form input-form-two"
          type="email"
          placeholder="البريد الالكتروني"
          v-model="numbervalue2"
        />
      </div>
      <div class="content-forms content-forms-two">
        <select class="input-form input-form-two">
          <option>القاهره</option>
          <option>اسكندريه</option>
          <option>السويس</option>
        </select>
      </div>
      <div class="content-forms content-forms-two">
        <input
          v-on:keyup="inputkeydown"
          class="input-form input-form-two"
          type="text"
          placeholder="اسم الحي"
          v-model="numbervalue3"
        />
      </div>
      <div class="d-flex justify-content-center">
        <a
          href="http://localhost:8080/#/home"
          class="link-localhosh btn-all mt-5"
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
      $(".btn-all").addClass("btn-showcolor");
      if (
        this.numbervalue === "" &&
        this.numbervalue2 === "" &&
        this.numbervalue3 === ""
      ) {
        $(".btn-all").removeClass("btn-showcolor");
      }
    },
  },
};
</script>
