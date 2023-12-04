<template>
  <div class="container mt-4">
    <router-link class="back" to="addportfolio">
      <fa icon="arrow-right" />
    </router-link>
    <div class="doneactive">
      <img class="img-doneactive" src="../assets/kisspng-logo.png" />
      <h2>تم اضافه الرصيد بنجاح</h2>
      <h4 class="mt-4">100 ر.س</h4>
      <a
        href="http://localhost:8080/#/myportfolio"
        class="mt-5 link-localhosh btn-all-2 backg-gren"
      >
        الرجوع الي المحفظه
      </a>
      <a class="to-home" href="http://localhost:8080/?#/home"
        >الذهاب الي الرئسيه</a
      >
    </div>
  </div>
</template>
