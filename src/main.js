import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myMixin from "./mixins";
import Axios from "axios";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

Vue.prototype.axios = Axios;

Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const token = sessionStorage.getItem("appUserThemeSettingsCode");
if (token) {
  Vue.prototype.axios.defaults.headers.common["Authorization"] = token;
} else {
  sessionStorage.clear();
}

Vue.mixin(myMixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
