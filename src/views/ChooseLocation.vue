<template>
  <div class="container mt-4">
    <div class="order-header mb-4">
      <router-link class="back" to="savemap">
        <fa icon="arrow-right" />
      </router-link>
      <h3>اختر الموقع</h3>
      <div></div>
    </div>
    <form>
      <div class="edit-forms">
        <input
          v-model="inputmap"
          type="search"
          class="input-all input-search"
        />
        <fa class="icon-search" icon="magnifying-glass" />
      </div>
    </form>
  </div>
  <div class="choose-inner">
    <div class="container">
      <h6>نتيجه البحث</h6>
    </div>
  </div>
  <div class="container">
    <a
      href="http://localhost:8080/#/addlocation"
      class="portfolio-content"
      v-for="(arraysearch, i) in filtersearch"
      :key="i"
    >
      <div class="order-box">
        <fa class="location-choose" icon="location-dot" />
        <div>
          <h5 class="mb-1">ارسال هديه</h5>
          <h6>{{ arraysearch.valuesearch }}</h6>
        </div>
      </div>
      <fa class="bookmark" :icon="['far', 'bookmark']" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputmap: "",
      userArrays: [
        {
          valuesearch: "اسم الشارع-مدينه الرياض-السعوديه",
        },
        {
          valuesearch: "اسم الشارع-جيهان-مصر",
        },
        {
          valuesearch: "اسم الشارع-مصر والسودان-مصر",
        },
      ],
    };
  },
  computed: {
    filtersearch() {
      const query = this.inputmap.toLowerCase();
      if (this.inputmap === "") {
        return this.userArrays;
      }
      return this.userArrays.filter((user) => {
        return Object.values(user).some((word) =>
          String(word).toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
