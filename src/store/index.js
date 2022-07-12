import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOk: false,
    tokenOk: true,
    pinOk: true,
    logined: true,
  },
  getters: {
    getLogined: state => {
      return state.logined;
    },
    getPin: state => {
      return state.pinOk;
    },
    getNumberOk: state => {
      return state.numberOk;
    }
  },
  mutations: {
    SET_LOGINED (state, logined) {
      state.logined = logined
    },
    SET_NUMBER (state, numberOk) {
      state.numberOk = numberOk
    },
  },
  actions: {
    // updateLogined({ state, commit }) {
    //   const params = new URLSearchParams();
    //   params.append('firstName', 'paul');
    //   axios.post('https://api.sabeel.credo.ru:5543/api/auth', {
    //     earnings: state.earnings,
    //     expenses: state.expenses,
    //   }, {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     let newExpense = res.data;
    //     commit("SUBMIT_BUDGET", newExpense);
    //   });
    // },
  },
  modules: {
  }
})
