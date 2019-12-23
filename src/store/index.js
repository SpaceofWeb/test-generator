import Vue from 'vue';
import Vuex from 'vuex';
import d from '@/../public/d.json';
console.log(d);
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tests: [],
    title: d.shift(),
    data: d,
  },
  getters:{
    getTestsTitle: state => {
      return state.title;
    },
    countQuestions: state => {
      return state.data.length;
    },
    getQuestions: state => {
      return state.data;
    }
  },
  mutations: {
    MutGetTests (state, data) {
      state.tests = data;
    }
  },
  actions: {
  }
})
