<template>
  <div class="mb-3">
    <div class="relsify-search-form">
      <div class="relsify-table-search grid-search">
        <!-- <div class="relsify-table-search-item">
          <label for="">Type</label>
          <div class="select_">
            <select>
              <option value="">All</option>
              <option value="">Some</option>
            </select>
          </div>
        </div> -->
        <div class="relsify-table-search-item">
          <label for="" class="site_title">Filter By:</label>
          <div class="select_">
            <select v-model="withdrawalType" @change="selectWithdrawalType">
              <option value="">All</option>
              <option value="DR">Debits</option>
              <option value="CR">Credits</option>
            </select>
          </div>
          <!-- <i class="fa fa-address-book"></i> -->
        </div>
        <!-- <i class="fa fa-address-book"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      withdrawalType: "",
    };
  },

  methods: {
    selectWithdrawalType: function () {
      // console.log(this.withdrawalType);
      this.$store.state.transactionType = this.withdrawalType;
      this.setWebPageLoading(true);
      this.getTransactions({
        userCode: this.user.code,
        type: this.withdrawalType,
        pageNumber: 1,
        pageSize: 20,
      })
        .then(() => {
          this.setWebPageLoading(false);
        })
        .catch(() => {
          this.setWebPageLoading(false);
        });
    },
  },
};
</script>

<style></style>
