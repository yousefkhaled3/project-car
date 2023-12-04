<template>
  <div class="container">
    <div class="order-header mb-4">
      <router-link class="back" to="myparent">
        <fa icon="arrow-right" />
      </router-link>
      <h3>تاكيد الطلب</h3>
      <div></div>
    </div>
    <div class="parent-content">
      <img class="img-parent-elment" src="../assets/down-remove.png" />
      <h3>تم تاكيد طلبك بنجاح</h3>
      <div class="d-flex gap-2 mb-3">
        <h6>.رقم الطلب</h6>
        <h6 class="color-trans">#12344267</h6>
      </div>
      <h5>طلبك يصل اليك</h5>
      <div class="d-flex align-items-center gap-2">
        <fa class="active-color" icon="location-dot" />
        <h5>اسم الشارع-مدينه الرياض-السعوديه</h5>
      </div>
      <button class="btn-all-2 backg-gren">تتبع طلبك</button>
      <a href="http://localhost:8080/#/home" class="edeit-inhert"
        >الذهاب للرئسيه</a
      >
    </div>
  </div>
</template>
