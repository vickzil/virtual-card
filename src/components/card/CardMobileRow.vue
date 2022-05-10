<template>
  <div class="">
    <div class="transaction_card" v-for="(card, index) in cards" :key="index">
      <div class="transaction_card-items">
        <div class="transaction_card-item-left">
          <p>
            <b>Name: <br /></b>
            {{ card.firstName + " " + card.lastName }}
          </p>
          <p>
            <b>Email: <br /></b>
            {{ card.email }}
          </p>
          <p>
            <b>Phone: <br /></b>
            {{ card.phoneNumber }}
          </p>
          <!-- <p class="transDecript">You have successful transfer</p> -->
        </div>
        <div class="transaction_card-item-right">
          <p>
            <b>Status: <br /></b>
            <span
              :class="[
                card.status.toLowerCase() == 'new' && 'Is-new',
                card.status.toLowerCase() == 'activated' && 'Is-success',
                card.status.toLowerCase() == 'failed' && 'Is-failed',
              ]"
            >
              {{ card.status }}
            </span>
          </p>
          <p>
            <b>Pin: <br /></b>
            {{ card.pin }}
          </p>
          <p>
            <b>Code: <br /></b>
            {{ card.code }}
          </p>
        </div>
      </div>

      <div
        class="table-button"
        v-if="card.status.toLowerCase() !== 'activated'"
        style="margin-top: 32px; margin-bottom: 22px; justify-content: center"
      >
        <button
          style="cursor: pointer"
          @click="activateCard(card)"
          class="relsify-button"
        >
          Activate
        </button>
        <button
          style="cursor: pointer"
          @click="deActivateCard(card)"
          class="relsify-button bg-yellow-light"
        >
          Deactivate
        </button>
      </div>
    </div>

    <div
      class="has-text-centered pt-20 no_transf"
      style=""
      v-if="cards && cards.length <= 0"
    >
      <div style="display: flex; justify-content: center; align-items: center">
        <div>
          <br />
          <br />
          <br />
          <h4 style="font-size: 15px">No Card added</h4>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>

    <div
      v-if="cards == null"
      style="display: flex; justify-content: center; align-items: center"
    >
      <LoadingComponent />
    </div>
  </div>
</template>

<script>
import LoadingComponent from "../loading/LoadingComponent.vue";
export default {
  components: {
    LoadingComponent,
  },

  methods: {},
};
</script>

<style scoped>
.trasaaMobile {
  /* margin-left: 10px;
  margin-right: 10px; */
  display: block;
  width: 100%;
}

.transaction_card {
  padding: 18px 15px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
  cursor: pointer;
  background: #fff !important;
  border-radius: 20px;
}
.transaction_card-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  letter-spacing: -0.35644px;
}

.transaction_card-items p b {
  font-size: 15px;
}

.transaction_card-item-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 75%; */
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

.transaction_card-item-right p {
  text-align: right;
  margin-bottom: 12px;
}

.transaction_card-item-right p:last-child {
  text-align: right;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  font-weight: 600 !important;
}

.Is-new {
  color: rgb(9, 74, 238) !important;
  font-weight: 600 !important;
}

.no_transf {
  background: #fff;
}

.table-button button {
  font-size: 16px;
}

body.dark-mode .no_transf {
  color: #fff;
  background: var(--mainCardDarkMode) !important;
}
</style>
