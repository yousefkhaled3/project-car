<template>
  <div class="container">
    <div class="order-header mb-4">
      <router-link class="back" to="chooselocation">
        <fa icon="arrow-right" />
      </router-link>
      <h3>اضافه عنوان جديد</h3>
      <div></div>
    </div>
    <form>
      <div class="edit-forms">
        <label class="mb-2">اسم العنوان</label>
        <input type="text" class="input-all" placeholder="اسم العنوان" />
      </div>
      <div class="edit-forms">
        <label class="mb-2">العنوان</label>
        <input
          type="text"
          class="input-all"
          placeholder="اسم الشارع-مدينه الرياض-السعوديه"
        />
      </div>
      <a
        href="http://localhost:8080/?#/savemap"
        class="btn-all-2 link-localhosh backg-gren mt-5"
        type="submit"
      >
        حفظ العنوان
      </a>
    </form>
  </div>
</template>
