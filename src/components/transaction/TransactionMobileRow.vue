<template>
  <div class="">
    <div
      v-if="userTransactions"
      :class="currentSitePage !== 'Home' && 'trasaaMobile'"
    >
      <div
        class="transaction_card-items"
        :class="transaction.type == 'debited_wallet' && 'debited'"
        v-for="(transaction, index) in userTransactions"
        :key="index"
        @click="showTransactionDetails(transaction)"
      >
        <div class="transaction_card-item-left">
          <p>
            <!-- <i class="bx bx-export"></i> -->
            <!-- :class="[
              transaction.type == 'debited_wallet' && 'bx-export',
              transaction.type == 'debited_wallet' && 'bx-import',
            ]" -->
            <b> {{ formateDateAndTimeByName(transaction.createdOn) }}</b>
            <!-- <b v-if="transaction.description.indexOf('Airtime purchase') >= 0">
              Airtime Topup
            </b>
            <b v-if="transaction.description.indexOf('BuyData purchase') >= 0">
              Data Purchase
            </b>
            <b
              v-if="transaction.description.indexOf('investment in code') >= 0"
            >
              Investment Initiated
            </b>
            <b
              v-if="
                transaction.description.indexOf('Transfer Transaction') >= 0
              "
            >
              Savings Initiated
            </b>
            <b v-if="transaction.description.indexOf('Wallet topup') >= 0">
              Wallet Topup
            </b>
            <b v-if="transaction.description.indexOf('Principal and ROI') >= 0">
              Principal and ROI Credited
            </b> -->
          </p>
          <p class="transDecript">{{ transaction.description }}</p>
        </div>
        <div class="transaction_card-item-right">
          <!-- <p
            :class="[
              transaction.status.toLowerCase() == 'success' && 'Is-success',
            ]"
          >
            {{ transaction.status }}
          </p> -->
          <p
            :class="[
              transaction.drCr.toLowerCase() == 'cr' ? 'Iscredit' : 'Isdebit',
            ]"
          >
            <b
              >{{ transaction.drCr.toLowerCase() == "cr" ? "+ " : "- " }}
              {{ transaction.currency }} {{ addComma(transaction.amount) }}</b
            >
          </p>
        </div>
      </div>
    </div>

    <div
      class="has-text-centered pt-20 no_transf"
      style=""
      v-if="userTransactions && userTransactions.length <= 0"
    >
      <div style="display: flex; justify-content: center; align-items: center">
        <div>
          <br />
          <br />
          <br />
          <h4 style="font-size: 15px">No transaction history</h4>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>

    <div
      v-if="currentSitePage == 'Transactions' && userTransactions"
      style="display: flex; justify-content: center; align-items: center"
    >
      <Infinitescrolltrigger />
    </div>

    <!-- <div class="transaction_card-items debited">
      <div class="transaction_card-item-left">
        <p>
          <i class="bx bx-import" style="color: #mainGreenColor"></i>
          <b>Top up</b>
        </p>
        <p>Bank Transfer</p>
      </div>
      <div class="transaction_card-item-right">
        <p>20 Jan 2022</p>
        <p><b>₦30,000</b></p>
      </div>
    </div> -->
  </div>
</template>

<script>
import Infinitescrolltrigger from "./Infinitescrolltrigger.vue";
export default {
  props: ["length", "userTransactions"],
  components: {
    Infinitescrolltrigger,
  },

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
.trasaaMobile {
  /* margin-left: 10px;
  margin-right: 10px; */
  display: block;
  width: 100%;
}
.transaction_card-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
  cursor: pointer;
  background: #fff !important;
  border-radius: 20px;
}

body.dark-mode .transaction_card-items {
  width: 100%;
  color: #fff;
  background: var(--mainCardDarkMode) !important;
  border: none;
}

.transaction_card-items:last-child {
  border-bottom: none;
  margin-bottom: 0px;
}

.transaction_card-items.active {
  background: #fff8e9;
  backdrop-filter: blur(145.895px);
}

.transaction_card-items p {
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  letter-spacing: -0.35644px;
}

.transaction_card-item-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
}

.transaction_card-item-left i {
  padding: 6px;
  border-radius: 100%;
  background: #dcffdc;
  color: #222;
  margin-right: 12px;
  font-weight: bold;
}

.debited .transaction_card-item-left i {
  background: #ffd2d0;
}

.transaction_card-item-left p:last-child {
  margin-top: 15px;
}

.transaction_card-item-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.transaction_card-item-right p:last-child {
  margin-top: 15px;
  font-size: 15px;
}

.transDecript {
  /* overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis; */
  text-align: left !important;

  font-size: 14px !important;
}

.Is-success {
  color: #08da08 !important;
  font-weight: 200 !important;
}

.no_transf {
  background: #fff;
}

body.dark-mode .no_transf {
  color: #fff;
  background: var(--mainCardDarkMode) !important;
}
</style>
