import Vue from "vue";

const mutations = {
  setTest(state, test) {
    Vue.set(state, "test", Object.assign({}, test));
  },
};

const getters = {
  getTest: (state) => {
    return state.test;
  }
};

const state = () => ({
  test: { b: "TestVal" }
});

export default { mutations, getters, state };
