<template>
  <div class="paged_div">
    <div class="page-header">
      <div class="page-title">
        <h2>Add Card</h2>
      </div>
    </div>
    <div class="after-page-header">
      <!-- <WalletBalance /> -->
      <AddCard />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import WalletBalance from "../components/extras/WalletBalance.vue";
import AddCard from "../components/card/AddCard.vue";
export default {
  components: {
    // WalletBalance,
    AddCard,
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
</style>
