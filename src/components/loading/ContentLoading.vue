<template>
  <div class="hascard text-center is_loading mt-4 mb-4">
    <div class="card-body">
      <br />
      <br />
      <br />
      <br />

      <div style="display: flex; justify-content: center; align-items: center">
        <svg
          width="25"
          height="25"
          class="mr-2"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hascard {
  transition: all 0.3s ease-in-out;
  display: inline-block;
  vertical-align: middle;
  background: #ffffff;
  border: 0;
  position: relative;
  margin-bottom: 15px;
  border-radius: 0;
  width: 100%;
}

.hascard .card-body {
  font-weight: 400;
  padding: 22px;
}

body.dark-mode .card.is_loading {
  background: #575454 !important;
  background: linear-gradient(
    110deg,
    #575454 8%,
    #979797 18%,
    #575454 33%
  ) !important;
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

.is_loading {
  background: #eee;
  background: linear-gradient(110deg, #fff 8%, #ececec 18%, #fff 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

body.dark-mode .is_loading {
  background: var(--mainCardDarkMode) !important;
  border-radius: 20px;
}

.hover_input:hover {
  background-color: rgb(231, 235, 230) !important;
  cursor: pointer;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
