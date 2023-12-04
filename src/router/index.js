import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "myforms",
    component: () => import("../views/MyForms.vue"),
  },
  {
    path: "/formone",
    name: "formone",
    component: () => import("../views/FormOne.vue"),
  },
  {
    path: "/formtwo",
    name: "formtwo",
    component: () => import("../views/FormTwo.vue"),
  },
  {
    path: "/formthree",
    name: "formthree",
    component: () => import("../views/FormThree.vue"),
  },
  {
    path: "/monthlypackages",
    name: "monthlypackages",
    component: () => import("../views/MonthlyPackages.vue"),
  },
  {
    path: "/payingoff",
    name: "payingoff",
    component: () => import("../views/PayingOff.vue"),
  },
  {
    path: "/addcard",
    name: "addcard",
    component: () => import("../views/AddCard.vue"),
  },
  {
    path: "/myrequests",
    name: "myrequests",
    component: () => import("../views/MyRequests.vue"),
  },
  {
    path: "/orderdetails",
    name: "orderdetails",
    component: () => import("../views/OrderDetails.vue"),
  },
  {
    path: "/myaccount",
    name: "myaccount",
    component: () => import("../views/MyAccount.vue"),
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: () => import("../views/EditProfile.vue"),
  },
  {
    path: "/connectus",
    name: "connectus",
    component: () => import("../views/ConnectUs.vue"),
  },
  {
    path: "/myportfolio",
    name: "myportfolio",
    component: () => import("../views/MyPortfolio.vue"),
  },
  {
    path: "/addportfolio",
    name: "addportfolio",
    component: () => import("../views/AddPortfolio.vue"),
  },
  {
    path: "/doneactive",
    name: "doneactive",
    component: () => import("../views/DoneActive.vue"),
  },
  {
    path: "/savemap",
    name: "savemap",
    component: () => import("../views/SaveMap.vue"),
  },
  {
    path: "/chooselocation",
    name: "chooselocation",
    component: () => import("../views/ChooseLocation.vue"),
  },
  {
    path: "/addlocation",
    name: "addlocation",
    component: () => import("../views/AddLocation.vue"),
  },
  {
    path: "/thegoll",
    name: "thegoll",
    component: () => import("../views/TheGoll.vue"),
  },
  {
    path: "/mapcontent",
    name: "mapcontent",
    component: () => import("../views/MapContent.vue"),
  },
  {
    path: "/myinhert",
    name: "myinhert",
    component: () => import("../views/MyInhert.vue"),
  },
  {
    path: "/myparent",
    name: "myparent",
    component: () => import("../views/MyParent.vue"),
  },
  {
    path: "/myparenttwo",
    name: "myparenttwo",
    component: () => import("../views/MyParenttwo.vue"),
  },
  {
    path: "/mynotifications",
    name: "mynotifications",
    component: () => import("../views/MyNotifications.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
