<template>
  <div class="profile-elment">
    <div class="container">
      <h1 class="mb-4">حسابي</h1>
      <div class="account-elment">
        <div class="profile-account">
          <img class="img-account mb-2" src="../assets/cr7.jpg" />
          <h5>محمد احمد</h5>
          <p class="color-trans mt-1">mohamed@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  <section class="mt-4">
    <div class="container">
      <a href="http://localhost:8080/#/editprofile">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>تعديل الحساب</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="http://localhost:8080/#/savemap">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>العناوين المحفوظه</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="http://localhost:8080/?#/myportfolio">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>المحفظه</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>اللغه</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <div class="account-box">
        <div class="d-flex gap-3 align-items-center">
          <div class="order-icon-car account-icon">
            <fa icon="user" />
          </div>
          <h5>الاشعارات</h5>
        </div>
        <div class="toggle">
          <input
            type="checkbox"
            checked
            class="toglle-chekbox toglle-chekbox-2"
          />
        </div>
      </div>
      <hr />
      <a href="">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>الشروط والاحكام</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>سياسه الخصوصيه</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="http://localhost:8080/#/connectus">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>تواصل معانا</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
      <a href="http://localhost:8080/?#/">
        <div class="account-box">
          <div class="d-flex gap-3 align-items-center">
            <div class="order-icon-car account-icon">
              <fa icon="user" />
            </div>
            <h5>تسجيل خروج</h5>
          </div>
          <fa icon="arrow-left" class="account-icon-left" />
        </div>
      </a>
    </div>
  </section>
  <footer>
    <a href="http://localhost:8080/#/home">
      <div class="footer-box">
        <fa class="color-trans" icon="home" />
        <h6>الرئسيه</h6>
      </div>
    </a>
    <a href="http://localhost:8080/#/myrequests">
      <div class="footer-box">
        <fa class="color-trans" icon="code-pull-request" />
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
        <fa class="active-color" icon="user" />
        <h6>حسابي</h6>
      </div>
    </a>
  </footer>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $(".img-account").attr("src", localStorage.getItem("imginput"));
  },
};
</script>
