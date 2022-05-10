<template>
  <transition name="fade">
    <div class="page_processing_modal" v-if="webPageLoading">
      <div class="page_processing_card">
        <div class="wrapper_loading">
          <div class="circle_loading"></div>
          <div class="circle_loading"></div>
          <div class="circle_loading"></div>
          <div class="shadow_loading"></div>
          <div class="shadow_loading"></div>
          <div class="shadow_loading"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.page_processing_modal {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(59, 59, 59, 0.479);
  /* background: rgba(99, 94, 94, 0.699); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 110009 !important;
  transition: 400ms ease;
}

.page_processing_card {
  /* background: rgb(255, 255, 255); */
  position: relative;
  width: 290px;
  height: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  /* box-shadow: 3px 6px 10px 0 rgb(0 102 245 / 7%); */
  text-align: center;
}

body.dark-mode .page_processing_card {
  background: transparent !important;
}

.page_processing_card h4 {
  font-weight: bold;
  font-size: 14px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
}

.page_processing_card p {
  font-size: 15px;
  font-weight: bold;
  margin-top: 7px !important;
  margin-bottom: 19px;
  margin-left: 4px;
  color: #fff !important;
}

.page_processing_card button {
  width: 38%;
  font-weight: bold;
  cursor: pointer;
}
.page_processing_card img {
  width: 70px;
  /* background: #fff; */
  object-fit: contain;
  /* border-radius: 100%; */
  /* padding: 8px; */
  animation: rotation 1.5s infinite linear;
  /* animation: autoRotate;
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-play-state: running; */
}

.wrapper_loading {
  width: 100px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.circle_loading {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: var(--mainGreenColor);
  left: 15%;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;
}

@keyframes circle {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
}

.circle_loading:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
  background-color: var(--mainYellowColor);
}

.circle_loading:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
  background-color: var(--mainGreenColor);
}

@media screen and (max-width: 350px) {
  .page_processing_card {
    width: 95%;
    margin: auto;
  }
}
</style>
