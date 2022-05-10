<template>
  <div class="alert-modal alertPOP" v-if="verifyPOPUP.status">
    <div class="alert-modal-overlay" @click="closeMessagePopup"></div>
    <div class="alert-modal-card vivify popInBottom">
      <div class="close-alert-button">
        <!-- <i class="bx bx-x" id="closeAlertModal" @click="closeMessagePopup"></i> -->
      </div>

      <div class="alert-modal-body">
        <br />

        <h4>
          {{ verifyPOPUP.title }}
        </h4>

        <div v-if="!verifyPOPUP.hasMessage">
          <br />
        </div>

        <p v-if="verifyPOPUP.desc">
          {{ verifyPOPUP.desc }}
        </p>

        <div class="field" v-if="verifyPOPUP.hasMessage">
          <div class="control required">
            <label>Reason <span style="color: red">*</span></label>
            <textarea
              v-model="message"
              placeholder="Your reason"
              class="textarea"
              @input="validateForm"
              :class="messageError && 'error-input'"
            >
            </textarea>
          </div>
        </div>

        <div class="alert-modal-button">
          <button class="button rounded mr-3" @click="closeMessagePopup">
            Cancel
          </button>
          <button
            :class="isButtonLoading && 'is-loading'"
            class="button form-button rounded primary-btn raised"
            @click="setAction"
          >
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
  data() {
    return {
      message: "",
      messageError: false,
      isButtonLoading: false,
    };
  },
  methods: {
    closeMessagePopup: function () {
      if (this.isButtonLoading == true) {
        return;
      }

      this.setVerifyPopup({
        status: false,
        type: "",
        title: "",
        desc: "",
        hasMessage: false,
        payload: null,
      });

      this.message = "";
      this.messageError = false;
      this.isButtonLoading = false;
    },
    validateForm: function () {
      if (this.verifyPOPUP.hasMessage && !this.message) {
        this.messageError = true;
        return;
      }

      this.messageError = false;
    },

    setAction: function () {
      if (this.verifyPOPUP.type == "ACTIVATE_CARD") {
        this.activateCard(this.verifyPOPUP.payload);
        return;
      }

      if (this.verifyPOPUP.type == "DEACTIVATE_CARD") {
        if (!this.message) {
          this.messageError = true;

          return;
        }

        this.deActivateCard(this.verifyPOPUP.payload);

        return;
      }
    },

    activateCard: async function (payload) {
      this.isButtonLoading = true;
      const url = `${this.baseUrl}/v1.0/VirtualCard/activateCard`;

      var data = {
        appId: this.AppId,
        requestId: this.RequestId,
        pin: payload.pin,
        reason: this.message,
      };

      const result = await this.axios.post(url, data);

      try {
        let resultData = result.data;

        if (resultData.success) {
          setTimeout(() => {
            this.isButtonLoading = false;
            this.message = "";

            this.closeMessagePopup();

            this.setMessagePopup({
              status: true,
              type: "success",
              title: "Card Activated",
              des: resultData.message,
              payload: null,
            });
          }, 1900);

          this.getCardRequest();
        } else {
          this.isButtonLoading = false;
          this.setMessagePopup({
            status: true,
            type: "error",
            title: "Error",
            des: resultData.message,
            payload: null,
          });
        }
      } catch (error) {
        console.log(error);
        this.isButtonLoading = false;
        this.serverErrorMessage();
      }
    },
    deActivateCard: async function (payload) {
      this.isButtonLoading = true;
      const url = `${this.baseUrl}/v1.0/VirtualCard/deactivateCard`;

      var data = {
        appId: this.AppId,
        requestId: this.RequestId,
        pin: payload.pin,
        reason: this.message,
      };

      const result = await this.axios.post(url, data);

      try {
        let resultData = result.data;

        if (resultData.success) {
          setTimeout(() => {
            this.isButtonLoading = false;
            this.message = "";

            this.closeMessagePopup();

            this.setMessagePopup({
              status: true,
              type: "success",
              title: "Card De-activated",
              des: resultData.message,
              payload: null,
            });
          }, 1900);

          this.getCardRequest();
        } else {
          this.isButtonLoading = false;
          this.setMessagePopup({
            status: true,
            type: "error",
            title: "Error",
            des: resultData.message,
            payload: null,
          });
        }
      } catch (error) {
        console.log(error);
        this.isButtonLoading = false;
        this.serverErrorMessage();
      }
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

.field {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.textarea.is-grow {
  min-height: 90px !important;
  height: 50px;
}

.textarea {
  color: #878787;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  height: 52px;
  width: 100%;
  background-color: #fff;
}

.textarea.error-input {
  border: 1px solid red;
}

button {
  cursor: pointer;
}
</style>
