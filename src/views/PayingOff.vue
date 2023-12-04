<template>
  <div class="container">
    <router-link class="back" to="monthlypackages">
      <fa class="back-item" icon="arrow-right" />
    </router-link>
    <h1 class="mb-4 mt-4">الدفع</h1>
    <h4 class="mb-4">اختر طريقه الدفغ</h4>
    <div>
      <div class="mb-4">
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
            @click="clickchech"
          >
            <div class="paying paying-two">
              <div class="paying-box">
                <div class="paying-redues">
                  <fa class="paying-check" icon="check" />
                </div>
                <div>
                  <h5 class="text-dark">الدفع باستخدام المح</h5>
                  <h6 class="paying-text">الرصيد 1500 ريال سعودي</h6>
                </div>
              </div>
              <div>
                <fa icon="envelope" class="envelope-icon" />
              </div>
            </div>
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <div class="collapse-box">
                  <div class="collapse-radio">
                    <div class="collapse-radio-item"></div>
                  </div>
                  <h6>اسم البنك</h6>
                  <h6>1234</h6>
                  <div class="d-flex">
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                  </div>
                </div>
                <a
                  href="http://localhost:8080/#/addcard"
                  class="collapse-paying"
                >
                  <div class="plus-box">
                    <fa icon="plus" class="plus-collapse" />
                    <h5>اضافه بطاقه جديده</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            @click="clickchech2"
          >
            <div class="paying paying-three">
              <div class="paying-box">
                <div class="paying-redues">
                  <fa class="paying-check" icon="check" />
                </div>
                <div>
                  <h5 class="text-dark">الدفع باستخدام المح</h5>
                  <h6 class="paying-text">الرصيد 1500 ريال سعودي</h6>
                </div>
              </div>
              <div>
                <fa icon="envelope" class="envelope-icon" />
              </div>
            </div>
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="collapseExample">
              <div class="card card-body">
                <div class="collapse-box">
                  <div class="collapse-radio">
                    <div class="collapse-radio-item"></div>
                  </div>
                  <h6>اسم البنك</h6>
                  <h6>1234</h6>
                  <div class="d-flex">
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                  </div>
                </div>
                <a
                  href="http://localhost:8080/#/addcard"
                  class="collapse-paying"
                >
                  <div class="plus-box">
                    <fa icon="plus" class="plus-collapse" />
                    <h5>اضافه بطاقه جديده</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample33"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample33"
            @click="clickchech3"
          >
            <div class="paying paying-four">
              <div class="paying-box">
                <div class="paying-redues">
                  <fa class="paying-check" icon="check" />
                </div>
                <div>
                  <h5 class="text-dark">الدفع باستخدام المح</h5>
                  <h6 class="paying-text">الرصيد 1500 ريال سعودي</h6>
                </div>
              </div>
              <div>
                <fa icon="envelope" class="envelope-icon" />
              </div>
            </div>
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="collapseExample33">
              <div class="card card-body">
                <div class="collapse-box">
                  <div class="collapse-radio">
                    <div class="collapse-radio-item"></div>
                  </div>
                  <h6>اسم البنك</h6>
                  <h6>1234</h6>
                  <div class="d-flex">
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                    <fa icon="star" class="collapse-star" />
                  </div>
                </div>
                <a
                  href="http://localhost:8080/#/addcard"
                  class="collapse-paying"
                >
                  <div class="plus-box">
                    <fa icon="plus" class="plus-collapse" />
                    <h5>اضافه بطاقه جديده</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample144"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample144"
            @click="clickchech4"
          >
            <div class="paying paying-five">
              <div class="paying-box">
                <div class="paying-redues">
                  <fa class="paying-check" icon="check" />
                </div>
                <div>
                  <h5 class="text-dark">الدفع باستخدام المح</h5>
                  <h6 class="paying-text">الرصيد 1500 ريال سعودي</h6>
                </div>
              </div>
              <div>
                <fa icon="envelope" class="envelope-icon" />
              </div>
            </div>
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample144">
              <div class="card card-body">
                <div class="collapse-box">
                  <div class="collapse-radio">
                    <div class="collapse-radio-item"></div>
                  </div>
                  <h6>اسم البنك</h6>
                  <h6>1234</h6>
                  <div v-for="(star, i) in 5" :key="i" class="d-flex">
                    <fa icon="star" class="collapse-star" />
                  </div>
                </div>
                <a
                  href="http://localhost:8080/#/addcard"
                  class="collapse-paying"
                >
                  <div class="plus-box">
                    <fa icon="plus" class="plus-collapse" />
                    <h5>اضافه بطاقه جديده</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cheakout-box">
      <div class="cheakout-text">
        <h6>المبلغ</h6>
        <h5 class="active-color">80</h5>
        <h6>ر.س</h6>
      </div>
      <button class="btn-all backg-gren">ادفع</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    clickchech() {
      $(".paying-two").find(".paying-redues").toggleClass("paying-done");
      $(".paying-check").toggleClass("paying-check-2");
    },
    clickchech2() {
      $(".paying-three").find(".paying-redues").toggleClass("paying-done");
      $(".paying-check").toggleClass("paying-check-2");
    },
    clickchech3() {
      $(".paying-four").find(".paying-redues").toggleClass("paying-done");
      $(".paying-check").toggleClass("paying-check-2");
    },
    clickchech4() {
      $(".paying-five").find(".paying-redues").toggleClass("paying-done");
      $(".paying-check").toggleClass("paying-check-2");
    },
  },
};
</script>
