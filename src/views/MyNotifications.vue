<template>
  <div class="container mt-4">
    <router-link class="back" to="myparent">
      <fa icon="arrow-right" />
    </router-link>
    <div
      class="notifications"
      :id="student.classinhert"
      v-for="(student, i) in students"
      :key="i"
    >
      <div class="d-flex justify-content-between mb-1">
        <h5>{{ student.text1 }}</h5>
        <h6 class="active-color">{{ student.text2 }}</h6>
      </div>
      <h6>{{ student.text3 }}</h6>
      <p class="notifications-item color-trans">2 مايو (1030ص . 34 س)</p>
    </div>
    <div>sasd</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          text1: "اكتمل طلبك",
          text2: "منذ 8 دقائق",
          text3: "تم الانتهاء من طلبك غسيل مباشر",
          classinhert: "inhert-active",
        },
        {
          text1: "اكتمل طلبك",
          text2: "منذ 10 دقائق",
        },
        {
          text1: "اكتمل طلبك",
          text2: "منذ 12 دقائق",
          text3: "تم الانتهاء من طلبك غسيل مباشر",
        },
        {
          text1: "اكتمل طلبك",
          text2: "منذ 15 دقائق",
          classinhert: "inhert-active",
        },
        {
          text1: "اكتمل طلبك",
          text2: "منذ ساعه",
          text3: "تم الانتهاء من طلبك غسيل مباشر",
        },
      ],
    };
  },
};
</script>
