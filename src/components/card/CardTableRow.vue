<template>
  <tr class="table_roww" v-if="card">
    <td>{{ card.firstName + " " + card.lastName }}</td>

    <td>
      {{ card.email }}
    </td>
    <td>
      {{ card.phoneNumber }}
    </td>

    <td
      class="status-td"
      :class="[
        card.status.toLowerCase() == 'new' && 'Is-new',
        card.status.toLowerCase() == 'activated' && 'Is-success',
        card.status.toLowerCase() == 'failed' && 'Is-failed',
      ]"
    >
      <span style="text-transform: capitalize">
        {{ card.status }}
      </span>
    </td>

    <td>{{ card.pin }}</td>
    <td>{{ card.code }}</td>
    <td>{{ card.dob }}</td>
    <td
      class="table-button"
      style="text-align: right"
      v-if="card.status.toLowerCase() !== 'activated'"
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
    </td>
  </tr>
</template>

<script>
export default {
  props: ["card"],
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

.Is-new span {
  background: rgb(9, 74, 238) !important;
  color: rgb(255, 255, 255) !important;
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
