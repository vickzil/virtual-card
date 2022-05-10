<template>
  <div class="relsify-table">
    <div class="table-responsive table-web">
      <table class="table">
        <thead class="text-left">
          <tr class="">
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Pin</th>
            <th>Code</th>
            <th>Dob</th>
            <th></th>
          </tr>
        </thead>

        <tbody v-if="cards && cards.length > 0">
          <CardTableRow
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          />

          <!-- <tr>
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
          </tr> -->
        </tbody>
        <tbody v-if="cards && cards.length <= 0">
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
        <tbody v-if="cards == null">
          <tr>
            <td colspan="7">
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
      <CardMobileRow :cards="cards" />
    </div>
  </div>
</template>

<script>
import CardMobileRow from "./CardMobileRow.vue";
import CardTableRow from "./CardTableRow.vue";
// import Infinitescrolltrigger from "./Infinitescrolltrigger.vue";
import LoadingComponent from "../loading/LoadingComponent.vue";
export default {
  components: {
    CardMobileRow,
    CardTableRow,
    // Infinitescrolltrigger,
    LoadingComponent,
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
