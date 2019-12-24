import Vue from 'vue';
import Vuex from 'vuex';
import d from '@/../public/d.json';
// console.log(d);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tests: [],
    title: d.shift().testTitle,
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
    saveTestMUT(state, payload){
      let {titleTest, questions} = payload;
      state.title = titleTest;
      state.data = questions;
      try {
        localStorage.setItem(titleTest, JSON.stringify(questions));
      } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert('Превышен лимит');
        }
      }
      // console.log(localStorage.length);
    },
    selectTestMUT(state, payload){
      let {titleTest, questions} = payload;
      state.title = titleTest;
      state.data = questions;
    }
  },
  actions: {
    saveTestACT(context, payload){
      // console.log(payload);
      context.commit('saveTestMUT', payload);
    },
    selectTestACT(context, payload){
      // console.log(payload);
      context.commit('selectTestMUT', payload);
    }
  }
})
