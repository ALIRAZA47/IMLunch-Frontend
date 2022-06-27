import Vue from "vue";
import Vuex from "vuex";
import DishService from "@/services/DishService.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      week1: {
        borderColor: "#37b2a4",
        dishes: [],
      },
      week2: {
        borderColor: "#ffc400",
        dishes: [],
      },
      week3: {
        borderColor: "#37b2a4",
        dishes: [],
      },
      week4: {
        borderColor: "#ffc400",
        dishes: [],
      },
    },
  },
  getters: {},
  mutations: {
    ADD_DISHES_TO_WEEK(state, dish) {
      state.menu["week" + dish.week].dishes.push({
        name: dish.name,
        image: dish.image,
      });
    },
  },
  actions: {
    fetchMenuData({ commit }) {
      DishService.getDishes()
        .then((res) => {
          const data = res.data.data;
          for (let i in data) {
            // console.log(data[i]);
            commit("ADD_DISHES_TO_WEEK", data[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
