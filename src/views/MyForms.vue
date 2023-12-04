<template>
  <section class="margin-top mb-3">
    <div class="container">
      <div class="content-img-forms">
        <img class="img-forms" src="../assets/down-remove.png" />
      </div>
      <h1 class="text-white mb-4 mt-4">اغسل سيارتك بسهوله</h1>
      <p class="text-forms text-white">
        هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحه لقد تم توليد هذا النص
      </p>
      <form class="content-forms">
        <label class="text-white">+966</label>
        <input
          class="input-form"
          type="number"
          placeholder="ادخل رقم جوالك هنا"
        />
        <a
          href="http://localhost:8080/#/formone"
          class="btn-forms link-localhosh"
          type="submit"
          @click="clickbackground"
          >ارسال</a
        >
      </form>
      <router-link @click="clickbackground" class="text-white" to="home"
        >او الاستمرار كضيف</router-link
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
body {
  background-color: #025157 !important;
}
</style>

<script>
import $ from "jquery";

export default {
  mounted() {
    if (this.$router.hasRoute("myforms")) {
      $("#app").parent().css("background", "#025157");
    }
  },
  methods: {
    clickbackground() {
      $("#app").parent().css("background", "none");
    },
  },
};
</script>
