<template>
  <div>
    <VerifyPOPUP />
    <AlertPopup />
  </div>
</template>

<script>
import AlertPopup from "./AlertPopup.vue";
import VerifyPOPUP from "./VerifyPOPUP.vue";

export default {
  components: {
    VerifyPOPUP,
    AlertPopup,
  },
};
</script>

<style></style>
