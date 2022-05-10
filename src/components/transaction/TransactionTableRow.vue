<template>
  <tr class="table_roww" v-if="transaction">
    <td>{{ formateDateAndTimeByName(transaction.createdOn) }}</td>
    <td
      :class="[transaction.drCr.toLowerCase() == 'cr' ? 'Iscredit' : 'Isdebit']"
    >
      {{ transaction.drCr.toLowerCase() == "cr" ? "" : "-" }}
      {{ transaction.currency }} {{ addComma(transaction.amount) }}
    </td>

    <td
      class="status-td"
      :class="[
        transaction.status.toLowerCase() == 'success' && 'Is-success',
        transaction.status.toLowerCase() == 'failed' && 'Is-failed',
      ]"
    >
      <span>{{ transaction.status }}</span>
    </td>
    <!-- <td
      :class="[transaction.drCr.toLowerCase() == 'cr' ? 'Iscredit' : 'Isdebit']"
    >
      {{ transaction.drCr.toLowerCase() == "cr" ? "Credit" : "Debit" }}
    </td> -->
    <td>{{ transaction.description }}</td>
    <td class="table-button" style="text-align: right">
      <button
        style="cursor: pointer"
        @click="showTransactionDetails(transaction)"
        class="relsify-button light-shade-green"
      >
        Details
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["transaction"],
  methods: {
    showTransactionDetails: function (currentTransaction) {
      // console.log(currentTransaction);
      this.setTransactionDetailsModal({
        status: true,
        payload: currentTransaction,
      });
    },
  },
};
</script>

<style scoped>
.table_roww td {
  padding: 20px 10px;
  background: #fff;
}

.status-td span {
  display: inline-block;
  background: #b3d3b3;
  padding: 2px 7px;
  font-size: 11px;
  color: #222;
  font-weight: 500 !important;
  border-radius: 40px;
}

.Is-success span {
  background: rgb(111, 255, 111) !important;
  color: #222 !important;
}

.Is-failed span {
  background: rgb(255, 238, 200) !important;
  color: #222 !important;
}

/* .Is-success span {
  display: inline-block;
  color: rgb(3, 179, 3) !important;
  font-size: 11px;
  font-weight: 500 !important;
} */
</style>
