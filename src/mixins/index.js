import { mapActions, mapGetters, mapState } from "vuex";

const myMixin = {
  computed: {
    ...mapGetters([
      "darkMode",
      "AppId",
      "APPVERSION",
      "RequestId",
      "currentSitePage",
      "messagePopUp",
      "verifyPOPUP",
      "cards",
    ]),
    ...mapState(["baseUrl"]),

    getCurrentYear() {
      let date = new Date();
      return date.getFullYear();
    },

    appScreenSize: {
      get: function () {
        return this.$store.state.appScreenSize;
      },
      set: function (value) {
        return (this.$store.state.appScreenSize = value);
      },
    },
  },
  methods: {
    ...mapActions([
      "getCardRequest",
      "setMessagePopup",
      "setVerifyPopup",
      "activateCard",
      "deActivateCard",
    ]),

    validEmail: function (email) {
      var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    },

    hasHistory: function () {
      return window.history.length > 2;
    },

    serverErrorMessage: function () {
      // this.setActionLoading(false);
      setTimeout(() => {
        this.setMessagePopup({
          status: true,
          type: "error",
          title: "Service Error",
          des: "Service is temporarily unavailable. Please try again in a few minutes.",
          payload: null,
        });
      }, 200);
    },
  },
};

export default myMixin;
