<template>
  <div class="container mt-4">
    <router-link class="back" to="myinhert">
      <fa icon="arrow-right" />
    </router-link>
    <div class="parent-elment">
      <div class="parent-box">
        <img class="parent-img" src="../assets/kisspng-logo.png" />
        <div>
          <h5>غسيل مع التعقيم</h5>
          <p>غسيل يدوي كامل وتعقيم كامل وتنظيف بالداخل والخارج</p>
        </div>
      </div>
      <div class="order-box">
        <div class="order-icon-car">
          <fa icon="car" />
        </div>
        <div>
          <h5>نوع السياره صغيره</h5>
          <p class="color-trans">من 30 الي 45 دقيقه</p>
        </div>
      </div>
      <div class="order-box">
        <div class="order-icon-car">
          <fa icon="location-dot" />
        </div>
        <div>
          <h5 class="mb-1">اسم العنوان</h5>
          <h6>اسم الشارع-مدينه الرياض-السعوديه</h6>
        </div>
      </div>
    </div>
    <h5>هل يوجد لديك كود خصم؟</h5>
    <form class="form-parent">
      <input type="text" class="input-all" placeholder="ادخل كود الخصم هنا" />
      <button class="submit-parent" type="submit">تطبيق</button>
    </form>
    <div class="details-box">
      <h5>الحجم الفرعي</h5>
      <h6>0 ر.س</h6>
    </div>
    <div class="details-box">
      <h5>الخصم</h5>
      <h6>80 ر.س</h6>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <a
        href="http://localhost:8080/#/myparenttwo"
        class="link-localhosh btn-all-2 backg-gren"
        type="submit"
        >اطلب الان</a
      >
    </div>
  </div>
</template>
