import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userName: "zs",
      age: 18,
    };
  },
  getters: {
    isAdult(state) {
      return state.age >= 18 ? "成年" : "未成年";
    },
  },
  actions: {
    addAge() {
      this.age++;
    },
  },
});
