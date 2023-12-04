<template>
  <div class="container">
    <router-link class="back" to="formone">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">ادخل كود التحقق</h1>
    <p class="text-forms">
      يرجي ادخال رقم الجوال لتسجيل الدخول او تسجيل الاستراك
    </p>
    <form class="form-code">
      <div class="d-flex justify-content-between">
        <div class="content-forms content-forms-two content-forms-three">
          <input class="input-form input-form-two" type="number" />
        </div>
        <div class="content-forms content-forms-two content-forms-three">
          <input class="input-form input-form-two" type="number" />
        </div>
        <div class="content-forms content-forms-two content-forms-three">
          <input class="input-form input-form-two" type="number" />
        </div>
        <div class="content-forms content-forms-two content-forms-three">
          <input class="input-form input-form-two" type="number" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <a
          href="http://localhost:8080/#/formthree"
          class="btn-forms link-localhosh btn-forms-2"
          type="submit"
        >
          ارسال
        </a>
      </div>
    </form>
    <div class="cotent-code">
      <a class="text-code" href="">ارسل الكود مره اخري</a>
    </div>
  </div>
</template>
