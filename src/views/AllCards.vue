<template>
  <div class="paged_div">
    <div class="page-header">
      <div class="page-title">
        <h2>Cards</h2>
      </div>
      <a href="javascript:;" @click="$router.push({ name: 'AddCard' })"
        >Add Card <i class="bx bx-right-arrow-alt"></i
      ></a>
    </div>
    <div class="after-page-header">
      <!-- <WalletBalance /> -->
      <Cards />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import WalletBalance from "../components/extras/WalletBalance.vue";
import Cards from "../components/card/Cards.vue";
export default {
  components: {
    // WalletBalance,
    Cards,
  },
  data() {
    return {
      hasData: true,
    };
  },

  methods: {
    ...mapActions(["setCurrentPage", "setPageLoading"]),
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
  },
};
</script>

<style scoped>
.after-page-header {
  overflow-x: hidden;
}

.page-header a {
  display: none;
}

@media screen and (max-width: 580px) {
  .page-header a {
    display: flex;
    align-items: center;
    column-gap: 4px;
    font-weight: bold;
  }
}
</style>
