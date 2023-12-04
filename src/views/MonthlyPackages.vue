<template>
  <div class="container">
    <router-link class="back" to="home">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">الباقات الشهريه</h1>
    <section>
      <div class="row">
        <div class="col-lg-4" v-for="(student, i) in students" :key="i">
          <div class="monthly-packages">
            <div class="monthly-title">
              <h4>{{ student.title }}</h4>
            </div>
            <div class="d-flex gap-2">
              <h5 class="active-color">{{ student.textitem1 }}</h5>
              <h5>{{ student.textitem2 }}</h5>
            </div>
            <h6>{{ student.textnum }}</h6>
            <h6>{{ student.textnum2 }}</h6>
            <h6>{{ student.textnum3 }}</h6>
            <a
              href="http://localhost:8080/#/payingoff"
              class="link-localhosh backg-gren btn-all-2 mt-5"
            >
              اشتلرك الان
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          title: "باقه الشهر",
          textitem1: "100 رس",
          textitem2: "/ شهريا",
          textnum: "عدد الغسالات: 10 غسالات",
          textnum2: "نوع الغسيل: غسيل عادي",
          textnum3: "حجم السياره: صغيره",
        },
        {
          title: "باقه ال 3 شهور",
          textitem1: "250 رس",
          textitem2: "/ شهريا",
          textnum: "عدد الغسالات: 10 غسالات",
          textnum2: "نوع الغسيل: غسيل عادي",
          textnum3: "حجم السياره: متوسطه",
        },
        {
          title: "باقه الشهر",
          textitem1: "500 رس",
          textitem2: "/ شهريا",
          textnum: "عدد الغسالات: 50 غسالات",
          textnum2: "نوع الغسيل: غسيل عادي",
          textnum3: "حجم السياره: كبيره",
        },
      ],
    };
  },
};
</script>
