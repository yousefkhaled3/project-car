<template>
  <div class="container">
    <div class="order-header">
      <router-link class="back" to="myaccount">
        <fa icon="arrow-right" />
      </router-link>
      <h3>تعديل الحساب</h3>
      <div></div>
    </div>
    <div class="account-elment">
      <div class="profile-account mt-3">
        <div class="profile-camera">
          <fa class="camera" icon="camera" />
        </div>
        <img class="img-account mb-2" src="../assets/cr7.jpg" />
        <input
          @change="previewImage"
          accept="image/*"
          class="input-edit-img"
          type="file"
        />
      </div>
    </div>
    <form>
      <div class="edit-forms">
        <label class="mb-2">الاسم</label>
        <input type="text" class="input-all" placeholder="محمد احمد" />
      </div>
      <div class="edit-forms">
        <label class="mb-2">رقم الجوال</label>
        <label class="lable-phone">+966</label>
        <input
          type="number"
          class="input-all input-edit"
          placeholder="011 234 567"
        />
      </div>
      <div class="edit-forms">
        <label class="mb-2">البريد الاكتروني</label>
        <input type="email" class="input-all" placeholder="mohamed@gmail.com" />
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data: function () {
    return {
      imageData: "",
    };
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result;
          localStorage.setItem("imginput", reader.result);
          $(".img-account").attr("src", localStorage.getItem("imginput"));
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  mounted() {
    $(".img-account").attr("src", localStorage.getItem("imginput"));
  },
};
</script>
