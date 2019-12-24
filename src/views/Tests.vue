<template>
  <div class="tests">
    <div class="tests-title">
        <h2>Ваши тесты</h2>
        <p>Выберите нужный или создайте новый</p>
    </div>       
      <b-container>
    <b-list-group v-if="lenTest">
        <b-list-group-item href="#" v-for="(test, ind) in getTests" :key="ind" 
          @click="view(test)"
          class="d-flex test-item justify-content-between align-items-center">
            <p class="text-left m-0">
              <span class="title-test" >{{test.titleTest}}</span><br>
            </p>
            <b-badge class="countQuestions" variant="primary" pill>Кол-во вопросов: {{test.questions.length}}</b-badge>
           <!-- <b-badge class="deleteBtn" variant="danger" @click="deleteTest(test)">-</b-badge> -->
        </b-list-group-item>
    </b-list-group>
    <b-alert v-else show variant="info">
      <h4>У вас нет готовых тестов</h4>
      <p>Вы можете создать их <router-link to="/create">здесь</router-link></p>
    </b-alert>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions } from 'vuex';
import {mapGetters } from 'vuex';

export default {
  name: 'tests',
  components: {
  },
  data(){
      return{
        tests: []
      }
  },
  computed:{
    ...mapGetters([
        'getTestsTitle',
        'countQuestions'
    ]),
    getTests(){
      return this.tests;
    },
    lenTest(){
      return this.tests.length > 0;
    }
  },
  methods: {
    ...mapActions([
      'selectTestACT'
    ]),
    view(test){
      // console.log(test);
      this.$store.dispatch('selectTestACT', { titleTest: test.titleTest, questions: test.questions });
      this.$router.push('/view');
    },
    deleteTest(test){
    }
  },
  created(){
    let keys = Object.keys(localStorage);
    for(let key = 0; key < keys.length; key++) {
      if(keys[key] == 'loglevel:webpack-dev-server') continue;
      this.tests.push({
        titleTest: keys[key],
        questions: JSON.parse(localStorage.getItem(keys[key]))
      });
    }
  }
}
</script>


 <style scoped>
.tests{
    padding-top: 100px;
}
.tests-title{
    padding-bottom: 25px;
}
.title-test{
  font-weight: bold;
}
 </style>