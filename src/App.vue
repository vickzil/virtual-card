<template>
  <div id="app">
    <AllModal />
    <div id="main-wrapper">
      <!-- Sidebar -->
      <Sidebar />

      <div class="content-body" style="position: relative">
        <div class="main-container">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/dashboard.css";
import "@/assets/css/custom.css";
import Sidebar from "./components/sidebar/Sidebar.vue";
import AllModal from "./components/modal/AllModal.vue";
export default {
  computed: {
    isLoggedInRoute() {
      let current = false;
      if (this.$router.history.current.meta.requiresAuth) {
        current = true;
      }

      // console.log(this.$router.history.current.meta.requiresAuth);

      return current;
    },
  },
  components: {
    Sidebar,
    AllModal,
  },

  methods: {
    checkScreenSize: function () {
      if (window.innerWidth < 588) {
        this.appScreenSize = "MOBILE_VIEW";
        // console.log("is mobile");
      } else {
        this.appScreenSize = "WEB_VIEW";
        // console.log("is desktop");
      }
    },
  },

  mounted() {
    this.getCardRequest();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: scale(0.9); */
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateY(0);
}

#savings_plans .job-categories .job-categories-inner .job-category {
  background: transparent !important;
  border: 1px solid #bdbaba;
}

#savings_plans
  .job-categories
  .job-categories-inner
  .job-category
  .job-category-heading {
  /* color: #222; */
  bottom: 20%;
}

.apexcharts-xaxistooltip.apexcharts-xaxistooltip-bottom {
  display: none !important;
}
.homeChart .apexcharts-yaxis-texts-g,
.apexcharts-toolbar {
  display: none !important;
}

#apexchartsvuechartxexample,
#apexchartsvuechartxexample svg {
  width: 100% !important;
}

.button.button-signup {
  border-color: #099114;
  background-color: #099114;
  color: #fff;
}

.owl-stage {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

body.dark-mode .apexcharts-legend-series span,
body.dark-mode .apexcharts-text.apexcharts-xaxis-label,
body.dark-mode .apexcharts-xaxis-tick {
  color: #fff !important;
  fill: #fff !important;
}

body.dark-mode .apexcharts-grid-row {
  color: #fff !important;
  fill: var(--mainCardDarkMode) !important;
}

body.dark-mode .apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  fill: var(--mainCardDarkMode) !important;
  background: var(--mainCardDarkMode) !important;
}

body.dark-mode
  .apexcharts-tooltip.apexcharts-theme-light
  .apexcharts-tooltip-title {
  background: var(--mainCardDarkMode) !important;
  border-bottom: 1px solid rgb(46, 66, 53);
}

body.dark-mode .input#file-upload-button {
  color: #fff !important;
  background: var(--mainCardDarkMode) !important;
}

/* .owl-stage .owl-item {
  width: 100% !important;
} */

@media (max-width: 767px) {
  .flex-table .flex-table-item .flex-table-cell.cell-end {
    display: block !important;
  }
  .flex-table .flex-table-item .flex-table-cell.cell-end .button {
    margin-top: 30px !important;
    width: 100% !important;
  }
}

@media screen and (max-width: 550px) {
  body.dark-mode .alert-modal-card .close-alert-button {
    border: none !important;
  }
  #main-hero.hero-body .is-header-caption {
    padding: 50px 0 100px !important;
  }
  .oxfordHoldings .section .columns.is-vcentered {
    margin-top: 80px !important;
  }

  #header_hero.hero.is-fullheight {
    min-height: 530px !important;
  }

  #header_hero .hero-body .is-hero-caption.is-pushed-md {
    margin-top: 10px !important;
    text-align: left !important;
  }

  #header_hero .hero-body.is-start .is-hero-caption .title {
    font-size: 2rem !important;
  }
  /* .section.section-feature-grey {
    background-color: #ffffff;
    padding-top: 70px !important;
  } */

  .title.section-title {
    font-size: 1.8rem !important;
  }

  .section.section-feature-grey .button.button-cta.btn-outlined.is-bold {
    width: 100%;
  }

  .section.section-primary[data-v-1a545e8a] .title.is-3 {
    font-size: 2rem !important;
  }

  .section.section-primary[data-v-1a545e8a] {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  #about .section-title-wrapper .section-title-landing {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .section-wrap .section.image-section .title-wrap h3 {
    font-size: 2rem;
  }

  .section-title-wrapper .section-title-landing {
    font-size: 2.1rem;
    margin-bottom: 20px;
  }

  .section.is-medium[data-v-b0cfe2c8] .giant-pb[data-v-b0cfe2c8] {
    padding-bottom: 60px;
  }
  .section.is-medium[data-v-b0cfe2c8] .button.button-cta.btn-outlined.is-bold {
    width: 100%;
  }

  .sub-hero .sub-hero-container .sub-hero-content {
    padding-top: 40px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sub-hero .sub-hero-container .sub-hero-content h1 {
    font-size: 2rem;
  }

  .section .title.quick-feature {
    font-size: 2.3rem;
  }

  .service-box .service-title {
    font-size: 2rem;
  }

  #home_introo.section {
    margin-top: -200px !important;
    padding-bottom: 0px !important;
  }
  .hero-body .title.main-title {
    font-size: 2.6rem;
    text-align: left;
    margin-bottom: 0px;
  }

  #main-hero .subtitle.is-5.light-text {
    display: none;
  }

  .side-card {
    padding: 25px 16px;
  }

  .side-card .round-icon {
    height: 30px;
    width: 35px;
    min-width: 20px;
  }
}
</style>
