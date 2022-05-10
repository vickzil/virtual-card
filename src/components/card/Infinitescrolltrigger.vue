<template>
  <div class="infinitescrolltrigger">
    <div
      ref="infinitescrolltrigger"
      class="scroll-trigger"
      style="display: flex; justify-content: center; align-items: center"
    >
      <LoadingComponent v-if="isBussy" />
    </div>
  </div>
</template>

<script>
// import PageHeader from "@/components/header/PageHeader";
import LoadingComponent from "../loading/LoadingComponent.vue";
import "@/mixins";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    LoadingComponent,
  },
  computed: {
    ...mapGetters(["userWalletBalance"]),

    currentPage: {
      get() {
        return this.$store.state.transactionCurrentPage;
      },

      set(value) {
        return (this.$store.state.transactionCurrentPage = value);
      },
    },

    totalPage: {
      get() {
        return this.$store.state.transactionTotalPage;
      },

      set(value) {
        return (this.$store.state.transactionTotalPage = value);
      },
    },
  },

  data() {
    return {
      isBussy: false,
      totalPages: 2,
    };
  },

  methods: {
    ...mapActions(["fetchMoreTransactions", "saveMoreTransactions"]),

    scrollTrigger: function () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio > 0 &&
            this.currentPage < this.totalPage &&
            this.transactions.data.length > 0
          ) {
            this.isBussy = true;
            this.currentPage += 1;
            this.fetchTransactions(this.currentPage);
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    },

    fetchTransactions: function (currentPage) {
      let payload = {
        AppId: this.AppId,
        RequestId: this.RequestId,
        UserCode: this.user.code,
        TransactionType: this.$store.state.transactionType,
        Preview: true,
        PageNumber: currentPage,
        PageSize: 20,
      };
      // console.log(payload);

      this.fetchMoreTransactions(payload)
        .then((response) => {
          this.isBussy = false;
          // console.log(response.data);
          // console.log(response.data.data);
          if (response.data.success) {
            this.saveMoreTransactions(response.data.data.data);

            this.currentPage = response.data.data.pageNumber;
            this.totalPage = response.data.data.totalPages;
          }
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.scrollTrigger();
  },
};
</script>
<style scoped>
.infinitescrolltrigger {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scroll-trigger {
  margin-top: 0px;
  text-align: center;
}

[class*="loader"]:before {
  content: "fetching more...";
}
</style>
