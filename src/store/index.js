import Vue from 'vue';
import Vuex from 'vuex';
// import d from '@/../public/d.json';
let JSZip = require("jszip");
let saveAs = require ("file-saver").saveAs;
// console.log(d);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tests: [],
    title: '',
    data: '',
    editTest: [] 
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
    },
    getEditTest: state =>{
      return state.editTest;
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
      // console.log(payload);
      let {titleTest, questions} = payload;
      state.title = titleTest;
      state.data = questions;
    },
    editTestMUT(state, payload){
      state.editTest = payload;
    },
    editClear(state){
      state.editTest = [];
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
    },
    editTestACT(context, payload){
      // console.log(payload);
      context.commit('editTestMUT', payload);
    },
    downloadTestACT(context, payload){
      let {titleTest, questions} = payload;
      let zip = new JSZip();
      let fileData = {titleTest: titleTest, questions: questions};
      // console.log(fileData);
      zip.file('test.json', JSON.stringify(fileData));
      zip.generateAsync({type:"blob"})
      .then(function (blob) {
        saveAs(blob, "Test.zip");
      });
    }
  }
})
