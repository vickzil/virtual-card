<template>
  <div class="transaction_card">
    <h4 class="site_title">Recent Transactions</h4>

    <TransactionMobileRow :userTransactions="homeTransaction" :length="4" />

    <div
      class="has-text-centered pt-20"
      v-if="
        transactions &&
        homeTransaction &&
        homeTransaction.length &&
        transactions.data.length > 4
      "
    >
      <router-link
        style="width: 90%"
        :to="{ name: 'Transactions' }"
        class="button button-cta is-bold btn-align rounded"
      >
        View All
      </router-link>
    </div>

    <div class="columns is-multiline" v-if="transactions == null">
      <!--Featured Job -->
      <div class="column is-12">
        <ContentLoading />
      </div>
    </div>
  </div>
</template>

<script>
import TransactionMobileRow from "./TransactionMobileRow.vue";
import ContentLoading from "../loading/ContentLoading.vue";
export default {
  components: {
    TransactionMobileRow,
    ContentLoading,
  },

  computed: {
    homeTransaction() {
      let allTransaction = null;
      if (this.transactions && this.transactions.data.length) {
        allTransaction = this.transactions.data.slice(0, 4);
      }

      return allTransaction;
    },
  },
};
</script>

<style scoped>
.transaction_card {
  position: relative;
  width: 100% !important;
  display: block;
  background: transparent !important;
  padding: 30px 15px;
  border-radius: 6px;
}

.transaction_card h4 {
  font-size: 18px;
  font-weight: bold;
  /* margin-top: 10px; */
  margin-bottom: 20px;
}

body.dark-mode .button {
  color: #fff !important;
  background: var(--mainCardDarkMode) !important;
}

@media screen and (max-width: 580px) {
  .transaction_card {
    padding: 30px 5px;
  }

  .transaction_card .button {
    width: 100% !important;
  }
}
</style>
