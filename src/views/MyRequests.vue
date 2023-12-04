<template>
  <div class="container">
    <h1 class="mb-4 mt-4">طلباتي</h1>
    <section>
      <a href="http://localhost:8080/#/orderdetails">
        <div v-for="(request, i) in requests" :key="i" class="request-elment">
          <div class="request-item">
            <div class="d-flex gap-2">
              <h6>طلب الرقم</h6>
              <h6 class="color-trans me-2">#12324122</h6>
            </div>
            <h5 class="active-color">80 ر.س</h5>
          </div>
          <h4 class="mb-2">غسيل مباشر</h4>
          <p class="mb-2">
            <fa class="ms-2 active-color" icon="location-dot" /> اسم
            الشارع-مدينه الرياض-السعوديه
          </p>
          <p>
            <span class="ms-2">حاله الطلب</span>
            <span :style="{ color: request.requestcolor }">{{
              request.requesttext
            }}</span>
          </p>
        </div>
      </a>
    </section>
  </div>
  <footer>
    <a href="http://localhost:8080/#/home">
      <div class="footer-box">
        <fa class="color-trans" icon="home" />
        <h6>الرئسيه</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/myrequests">
      <div class="footer-box">
        <fa class="active-color" icon="code-pull-request" />
        <h6>طلباتي</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/thegoll">
      <div class="footer-box">
        <fa class="color-trans" icon="bullseye" />
        <h6>الهدف</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/myaccount">
      <div class="footer-box">
        <fa class="color-trans" icon="user" />
        <h6>حسابي</h6>
      </div>
    </a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      requestcolor: "red",
      requests: [
        {
          requesttext: "قيد لانتظار",
          requestcolor: "#eec139",
        },
        {
          requesttext: "تم الانتهاء بنجاح",
          requestcolor: "red",
        },
        {
          requesttext: "تم الانتهاء",
          requestcolor: "#17c5d1",
        },
        {
          requesttext: "قيد لانتظار",
          requestcolor: "#eec139",
        },
      ],
    };
  },
};
</script>
