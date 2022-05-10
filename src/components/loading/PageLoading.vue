<template>
  <transition name="fade">
    <div class="page_processing_modal" v-if="pageLoading.status">
      <div class="page_processing_card">
        <div class="dual_right">
          <!-- <span
            class="spinner-border spinner-border-sm"
            style=" color: #00ff2a; width: 3rem; height: 3rem"
            role="status"
            aria-hidden="true"
          ></span> -->

          <div class="lds-dual-ring"></div>

          <p style="padding-left: 0px">
            <!-- Please wait... -->
            {{ pageLoading.message }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["pageLoading"]),
  },
};
</script>

<style scoped>
.page_processing_modal {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100vh !important;
  background: rgba(59, 59, 59, 0.479);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 199760009 !important;
  transition: 400ms ease;
}

.page_processing_card {
  background: rgb(255, 255, 255);
  position: relative;
  width: auto;
  height: 95px;
  padding: 0px 28px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 3px 6px 10px 0 rgb(0 102 245 / 7%);
  text-align: center;
}

.dual_right {
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 50px 1fr;
  align-items: center;
}

.page_processing_card h4 {
  font-weight: bold;
  font-size: 14px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
}

.page_processing_card p {
  font-size: 14px;
  font-weight: bold;
  margin-top: 0px !important;
  /* margin-bottom: 19px; */
  margin-left: 14px;
  color: #4d4b4b !important;
  text-align: left;
}
body.dark-mode .page_processing_card {
  color: #fff !important;
  background: var(--mainBodyDarkMode) !important;
  box-shadow: none;
}

body.dark-mode .page_processing_card p {
  color: #fff !important;
}

.lds-dual-ring {
  display: inline-block;
  width: 44px;
  height: 44px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 44px;
  height: 44px;
  margin: 0px;
  border-radius: 50%;
  border: 6px solid #25453b;
  border-color: #25453b transparent #25453b transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

body.dark-mode .lds-dual-ring:after {
  border: 6px solid #ffffff;
  border-color: #ffffff transparent #ffffff transparent;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 580px) {
  .page_processing_modal {
    background: rgba(59, 59, 59, 0.774);
  }

  .page_processing_modal {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 80px !important;
  }

  .page_processing_card {
    width: 90%;
    height: 95px;
  }

  .page_processing_card p {
    font-size: 14px;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 34px;
    height: 34px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 34px;
    height: 34px;
  }
}
</style>
