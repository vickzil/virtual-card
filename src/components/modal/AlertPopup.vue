<template>
  <div class="alert-modal alertPOP" v-if="messagePopUp.status">
    <div class="alert-modal-overlay" @click="closeMessagePopup"></div>
    <div class="alert-modal-card vivify popInBottom">
      <div class="close-alert-button">
        <!-- <i class="bx bx-x" id="closeAlertModal" @click="closeMessagePopup"></i> -->
      </div>

      <div class="alert-modal-body">
        <br />
        <div
          class="alert-modal-icon"
          :class="messagePopUp.type == 'error' && 'error'"
        >
          <i class="bx bx-check" v-if="messagePopUp.type !== 'error'"></i>
          <i class="bx bx-x" v-if="messagePopUp.type == 'error'"></i>
        </div>
        <h4 :class="messagePopUp.type == 'error' && 'errorColor'">
          {{ messagePopUp.title }}
        </h4>
        <p v-if="messagePopUp.des">
          {{ messagePopUp.des }}
        </p>

        <div class="alert-modal-button">
          <button class="relsify-button" @click="closeMessagePopup">
            Okay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/mixins";
import "@/assets/css/modal.css";
export default {
  methods: {
    closeMessagePopup: function () {
      this.setMessagePopup({
        status: false,
        type: "",
        title: "",
        des: "",
        payload: null,
      });
    },
  },
};
</script>

<style scoped>
.alert-modal-card {
  width: 420px;
}

.alert-modal-card .close-alert-button {
  margin-left: -10px;
  border-bottom: none !important;
  /* padding-bottom: 12px; */
}

.alert-modal-card .alert-modal-body h4 {
  font-size: 1.6rem;
}

.alert-modal-body p {
  font-size: 1.2rem;
}
</style>
