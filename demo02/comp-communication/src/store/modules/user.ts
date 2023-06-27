export default {
  namespaced: true,
  state: {
    user: {
      name: "zs",
      age: 18,
    },
  },
  getters: {
    isAdult(state) {
      return state.user.age >= 18 ? "成年" : "未成年";
    },
  },
  actions: {
    increment({ commit }, val) {
      commit("INCREMENT", val);
    },
  },
  mutations: {
    DECREMENT(state, payload) {
      state.user.age -= payload;
    },
    INCREMENT(state, paload) {
      state.user.age += paload;
    },
  },
};
