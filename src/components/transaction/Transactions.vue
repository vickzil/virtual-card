<template>
  <div class="relsify-table">
    <div class="table-responsive table-web">
      <table class="table">
        <thead class="text-left">
          <tr class="">
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <!-- <th>Type</th> -->
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody v-if="allTransaction && allTransaction.length">
          <TransactionTableRow
            v-for="(transaction, index) in allTransaction"
            :key="index"
            :transaction="transaction"
          />
          <tr>
            <td colspan="5">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <Infinitescrolltrigger />
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="allTransaction && allTransaction.length <= 0">
          <tr>
            <td colspan="5">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div>
                  <br />
                  <br />
                  <br />
                  <h4 style="font-size: 18px">No transaction history</h4>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="transactionInfo == null">
          <tr>
            <td colspan="5">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <br />
                <br />
                <LoadingComponent />
                <br />
                <br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-mobile">
      <TransactionMobileRow :userTransactions="allTransaction" />
    </div>
  </div>
</template>

<script>
import TransactionMobileRow from "./TransactionMobileRow.vue";
import TransactionTableRow from "./TransactionTableRow.vue";
import Infinitescrolltrigger from "./Infinitescrolltrigger.vue";
import LoadingComponent from "../loading/LoadingComponent.vue";
export default {
  components: {
    TransactionMobileRow,
    TransactionTableRow,
    Infinitescrolltrigger,
    LoadingComponent,
  },

  computed: {
    allTransaction() {
      let allTransaction = null;
      if (this.transactions && this.transactions.data.length) {
        allTransaction = this.transactions.data;
      }
      if (this.transactions && this.transactions.data.length <= 0) {
        allTransaction = [];
      }

      return allTransaction;
    },
  },
};
</script>

<style scoped>
.table_roww td {
  padding: 20px 10px;
  background: #fff;
}

body.dark-mode .table_roww td {
  color: #fff;
  background: var(--mainBodyDarkMode) !important;
}
</style>
