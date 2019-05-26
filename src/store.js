import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    dataIsRecived: false
  },
  mutations: {
    UPDATE_WEATHER(state) {
      service
        .getWeather()
        .then(response => {
          state.weather = response.data.data[0];
          state.dataIsRecived = true;
          console.log(response);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  actions: {
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    }
  }
});
