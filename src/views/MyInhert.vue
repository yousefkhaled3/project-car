<template>
  <div class="container mt-4">
    <router-link class="back" to="thegoll">
      <fa icon="arrow-right" />
    </router-link>
    <h2 class="mt-3">غسيل مع تعقيم</h2>
    <div class="portfolio">
      <div class="portfolio-content">
        <div class="order-box">
          <div class="order-icon-car">
            <fa icon="location-dot" />
          </div>
          <div>
            <h5 class="mb-1">اسم العنوان</h5>
            <h6>اسم الشارع-مدينه الرياض-السعوديه</h6>
          </div>
        </div>
        <h5 class="edeit-inhert">تعديل</h5>
      </div>
    </div>
    <h5 class="mt-5">اختر نوع السياره</h5>
    <div class="inhert-elment">
      <div
        class="inhert-box"
        :id="student.classinhert"
        v-for="(student, i) in students"
        :key="i"
      >
        <fa icon="car" class="goll-car-icon" />
        <h5>{{ student.inhert1 }}</h5>
        <p class="color-trans">30 45 دقيقه</p>
        <h6 class="active-color">{{ student.inhert2 }}</h6>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <a
        href="http://localhost:8080/#/myparent"
        class="link-localhosh btn-all-2 backg-gren"
        type="submit"
        >ارسال</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          inhert1: "صغيره",
          inhert2: "80 ر.س",
          classinhert: "inhert-active",
        },
        {
          inhert1: "متوسطه",
          inhert2: "100 ر.س",
        },
        {
          inhert1: "كبيره",
          inhert2: "110 ر.س",
        },
      ],
    };
  },
};
</script>
