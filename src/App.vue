<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  direction: rtl;
}
ul {
  list-style: none;
}
.img-forms {
  width: 600px;
  height: 350px;
}
.content-img-forms {
  display: flex;
  justify-content: center;
}
.margin-top {
  margin-top: 30px;
}
.text-forms {
  font-size: 20px;
}
p {
  margin: 0 !important;
}
a {
  text-decoration: none !important;
}
.content-forms {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  margin-top: 4rem;
  margin-bottom: 30px;
}
.content-forms-two {
  border-bottom: 1px solid #025157;
}
.btn-forms {
  background: none;
  border: none;
  color: white;
}
.input-form {
  width: 100%;
  background: none;
  border: none;
}
.input-form:focus {
  outline: none;
}
input:focus {
  outline: none;
}
.input-form::placeholder {
  color: rgb(207, 206, 206);
}
.input-form-two::placeholder {
  color: black;
}
.btn-all {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #17c5d14b;
  color: white;
}
.btn-all-2 {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #02515746;
  color: white;
}
.back {
  color: black;
  font-weight: bold;
  font-size: 30px;
}
.back-item {
  margin-top: 30px;
}
.btn-showcolor {
  background-color: #17c5d1;
}
.content-forms-three {
  width: 20%;
}
.btn-forms-2 {
  width: 100px;
  height: 30px;
  background-color: #2c3e50;
  border-radius: 10px;
}
a {
  text-decoration: none;
  color: black !important;
}
.text-code {
  color: #17c5d1;
  text-decoration: underline;
}
.cotent-code {
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
.form-code {
  width: 50%;
}
.header-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header {
  padding: 20px 10px;
}
.content-bell {
  position: relative;
}
.content-bell::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: red;
  top: 5px;
  right: 2px;
}
.home-img {
  width: 400px;
  height: 250px;
}
.section-home {
  width: 100%;
  padding: 30px 30px 20px 0;
  background-color: #025157;
}
.text-item-home {
  color: rgba(255, 255, 255, 0.753);
}
.home-title {
  font-weight: bold;
}
.carousel-box {
  width: 100%;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  margin-left: 10px;
  padding: 8px;
}
.box-car {
  background-color: #dbfff3;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-car {
  color: #17c5d1;
  font-size: 40px;
}
.carousel-text {
  margin-top: 10px;
  text-align: end;
}
.inner {
  width: 100%;
  padding: 20px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.back-two {
  background-color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.inner-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 !important;
}
footer {
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
}
.footer-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.active-color {
  color: #17c5d1;
}
.monthly-packages {
  padding: 10px;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}
.monthly-title {
  width: 100%;
  background-color: #dbfff3;
  display: flex;
  justify-content: center;
  padding: 10px;
}
.backg-gren {
  background-color: #025157;
}
.paying {
  width: 100%;
  padding: 10px;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  display: flex;
  justify-content: space-between;
}
.paying-redues {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(194, 191, 191);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paying-box {
  display: flex;
  gap: 10px;
}
.paying-text {
  margin-top: 10px !important;
  color: rgb(151, 151, 151);
  font-weight: bold;
}
.envelope-icon {
  color: #17c5d1;
  font-size: 20px;
}
.btn-primary {
  width: 100% !important;
  background: none !important;
  border: navajowhite !important;
  padding: 0 !important;
}
.collapse-radio {
  width: 15px;
  height: 15px;
  background-color: #17c5d1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.collapse-radio-item {
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50%;
}
.collapse-box {
  display: flex;
  align-items: center;
  gap: 15px;
}
.collapse-star {
  font-size: 5px;
}
.collapse-paying {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  padding: 10px;
}
.plus-collapse {
  color: #17c5d1;
  border: 1px solid #17c5d1;
  border-radius: 50%;
  padding: 2px;
}
.plus-box {
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
}
.card-body {
  border: none !important;
  padding: 0 !important;
}
.paying-done {
  background-color: #17c5d1 !important;
}
.paying-check {
  font-size: 10px;
  color: white;
  display: none;
}
.paying-check-2 {
  display: block;
}
.cheakout-box {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}
.cheakout-text {
  display: flex;
  gap: 10px;
}
.input-all {
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #b3b3b3;
  padding: 0px 15px;
}
.toggle input[type="checkbox"] {
  position: relative;
  width: 75px;
  height: 30px;
  background-color: #17c5d1;
  -webkit-appearance: none;
  border-radius: 20px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
}
.toggle .toglle-chekbox:checked[type="checkbox"] {
  background-color: #d5d4d4 !important;
}
.toggle .toglle-chekbox-2[type="checkbox"]::before {
  content: "";
  position: absolute;
  left: 2px;
  width: 29px;
  bottom: 1px;
  height: 29px;
  background-color: white;
  border: 1px solid #17c5d1;
  border-radius: 50%;
  transform: scale(1.1);
  transition: 0.6s;
  z-index: 1;
}
.toggle .toglle-chekbox:checked[type="checkbox"]::before {
  border: 2px solid #d5d4d4 !important;
}
.toggle .toglle-chekbox-2:checked[type="checkbox"]::before {
  left: 44px !important;
}
.chekbox-addcard {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.btn-bag-transparint {
  background-color: #02515746;
}
.request-elment {
  width: 100%;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  padding: 10px;
  margin-bottom: 30px;
}
.color-trans {
  color: #b3b3b3;
}
.request-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.order-header {
  display: flex;
  justify-content: space-between;
}
.order-header {
  margin-top: 30px;
}
.order-elment {
  width: 100%;
  margin-top: 30px;
  box-shadow: 0px 1px 5px 1px #d9d5d5;
  padding: 10px 20px;
}
.order-box {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.order-icon-car {
  width: 30px;
  height: 30px;
  background-color: rgb(109 222 230 / 53%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #17c5d1;
}
.order-item {
  font-size: 13px;
}
.details-box {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.details-img {
  width: 60px;
  height: 40px;
}
.button-details {
  background-color: rgb(255, 204, 204);
  color: red;
}
.popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.404);
  position: fixed;
  top: 0;
  display: none;
  z-index: 2;
}
.popup-details {
  width: 350px;
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.popup-details-item {
  display: flex;
  align-items: center;
  flex-direction: column;
}
hr {
  width: 100%;
}
.btn-popup {
  width: 100%;
  background: none;
  border: none;
}
.popup-check {
  width: 50px;
  height: 50px;
  background-color: rgb(109 222 230 / 53%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%;
  color: #17c5d1;
  margin-bottom: 15px;
}
.popup-box-2 {
  display: none;
}
.img-account {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.account-elment {
  display: flex;
  justify-content: center;
}
.profile-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: fit-content;
}
.profile-elment {
  background-color: #eee;
  padding: 20px;
}
.account-icon {
  border-radius: 0%;
}
.account-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.account-icon-left {
  font-size: 20px;
}
.input-edit-img {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0;
}
.profile-camera {
  width: 25px;
  height: 25px;
  background-color: #17c5d1;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.camera {
  font-size: 15px;
  color: white;
}
.edit-forms {
  margin-bottom: 30px;
  position: relative;
}
.lable-phone {
  position: absolute;
  right: 7px;
  bottom: 8px;
}
.input-edit {
  padding-right: 3.5rem;
}
.textarea-connect {
  height: 150px;
  padding: 17px;
}
.icon-connect {
  padding: 10px;
  border-radius: 50%;
  border: 1px solid #17c5d1;
  color: #17c5d1;
}
.connect-sohail {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.add-account-icon {
  width: 70px;
  height: 70px;
  background-color: #17c5d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
}
.add-account-content {
  display: flex;
  justify-content: space-evenly;
}
.add-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
}
.portfolio-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.portfolio-star {
  color: #b3b3b3;
  font-size: 10px;
}
.portfolio {
  margin-top: 30px;
  box-shadow: 0px 1px 5px 1px #a5a2a2;
  padding: 15px;
  border-radius: 8px;
}
.portfolio-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.portfolio-trash {
  color: red;
  font-size: 13px;
  display: none;
  cursor: pointer;
}
.edit-portfolio {
  cursor: pointer;
  color: #17c5d1;
}
.portfolio-mony {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.content-forms-portfolio {
  width: 150px;
}
.sallery-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.popup-portfolio {
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;
}
.portfolio-item-popup {
  cursor: pointer;
}
.popup-inhert-two {
  display: none;
}
.collapse-radio-two {
  background: none;
  border: 1px solid #a5a2a2;
}
.doneactive {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.img-doneactive {
  width: 400px;
  height: 300px;
}
.to-home {
  margin-top: 20px;
  color: #025157;
  text-decoration: underline !important;
}
.delete-savemap {
  color: red;
  cursor: pointer;
}
.addlink-map {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05e0f057;
  padding: 20px;
  margin-top: 30px;
}
.choose-inner {
  background-color: #eee;
  padding: 10px;
}
.location-choose {
  font-size: 20px;
}
.bookmark {
  color: #a5a2a2;
}
.input-search {
  padding-right: 40px;
}
.icon-search {
  position: absolute;
  top: 12px;
  right: 11px;
}
.goll-content {
  margin-top: 30px;
  box-shadow: 0px 1px 5px 1px #a5a2a2;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.goll-car {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
}
.goll-redus {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 50%;
  border: 5px solid #a5a2a2;
  border-top: 5px solid #17c5d1;
  transform: rotate(52deg);
}
.goll-car-icon {
  color: #17c5d1;
  font-size: 30px;
  margin-bottom: 10px;
}
.link-localhosh {
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edeit-inhert {
  text-decoration: underline !important;
}
.goll-car-2 {
  border: 5px solid #17c5d1;
}
.inhert-elment {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}
.inhert-box {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: 0px 1px 3px 1px #a5a2a2;
}
#inhert-active {
  border: 1px solid #17c5d1;
  background-color: #17c5d12c;
}
.parent-img {
  width: 40px;
  height: 40px;
}
.parent-elment {
  margin-top: 20px;
  background-color: #eee;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
}
.parent-box {
  display: flex;
  gap: 15px;
}
.form-parent {
  margin-top: 30px;
  position: relative;
}
.submit-parent {
  background: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border: none;
  width: 60px;
  color: #17c5d1;
  font-weight: bold;
}
.submit-parent::before {
  content: "";
  position: absolute;
  right: 0;
  top: 10px;
  background-color: rgb(138, 132, 132);
  width: 1px;
  height: 20px;
}
.img-parent-elment {
  width: 400px;
  height: 300px;
  margin-bottom: 30px;
}
.parent-content {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.steppy-progress-bar[data-v-bd8cdabb] {
  right: 0 !important;
}
.steppy-item.current .steppy-item-counter[data-v-bd8cdabb] {
  background-color: #17c5d1 !important;
  color: white !important;
}
.steppy-item-counter[data-v-bd8cdabb] {
  background-color: #cecccc !important;
  color: black !important;
}
.notifications {
  box-shadow: 0px 1px 3px 1px #a5a2a2;
  padding: 20px;
  margin-bottom: 20px;
  border: none !important;
  margin-top: 30px;
}
.notifications-item {
  margin-top: 6px !important;
  font-size: 13px;
}
.thegoll-elment {
  height: calc(100vh - 178px);
}
@media (max-width: 600px) {
  .img-forms {
    width: 100%;
    height: 200px;
  }
  .home-img {
    width: 250px;
    height: 150px;
  }
  .form-code {
    width: 100%;
  }
  .btn-all-2 {
    width: 100%;
  }
  .inhert-box {
    width: 100px;
    height: 150px;
    padding: 10px;
    gap: 10px;
  }
  .goll-car-icon {
    color: #17c5d1;
    font-size: 20px;
    margin-bottom: 5px;
  }
}
</style>
