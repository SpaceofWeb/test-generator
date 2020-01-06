<template>
  <div class="tests">
    <div class="tests-title">
        <h2>Ваши тесты</h2>
        <p>Выберите нужный или создайте новый</p>
    </div>
    <b-container>
    <!-- Load -->
     <!-- <b-form-file  ref="myFile"  @change="onFileChange" class="mt-3"></b-form-file> -->
     <input type="file" id="file" @change="onFileChange" />
     <label for="file" class="load-symbol">&#128228;</label>
    <!-- / Load -->
    <b-list-group v-if="lenTest">
      <!-- li -->
        <b-list-group-item 
            v-for="(test, index) in getTests" 
            :key="index"
            class="d-flex list-item justify-content-between align-items-center">
          <div class="title-item d-flex align-items-center w-100" @click="view(test)">
            <div class="title-test">{{test.titleTest}}</div>
            <b-badge class="ml-auto" variant="primary" pill>Кол-во вопросов: {{test.questions.length}}</b-badge>    
          </div>
          <b-button-group class="btn-group">
            <b-button variant="danger" class="del" @click="deleteTest(test)">-</b-button>
            <b-button variant="warning" class="del" @click="edit(test)">✎</b-button>
          </b-button-group>
        </b-list-group-item>
        <!--/ li -->
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
        tests: [],
        text: '',
        someData: ''
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
      'selectTestACT',
      'editTestACT',
      'saveTestACT'
    ]),
    view(test){
      // console.log(test);
      this.$store.dispatch('selectTestACT', { titleTest: test.titleTest, questions: test.questions });
      this.$router.push('/view');
    },
    deleteTest(test){
      // console.log(test);
      localStorage.removeItem(test.titleTest);  
      this.getLocalStorage();
    },
    edit(test){
      // console.log("edit");
      this.$store.dispatch('editTestACT', { titleTest: test.titleTest, questions: test.questions });
      this.$router.push('/create');
    },
    getLocalStorage(){
      this.tests = [];
      let keys = Object.keys(localStorage);
      for(let key = 0; key < keys.length; key++) {
        if(keys[key] == 'loglevel:webpack-dev-server') continue;
        this.tests.push({
          titleTest: keys[key],
          questions: JSON.parse(localStorage.getItem(keys[key]))
        });
      }
    },
    onFileChange(ev){
      // console.log('selected a file');
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        let {titleTest, questions} = JSON.parse(e.target.result);
        // console.log(JSON.parse(e.target.result));
        this.$store.dispatch('saveTestACT', JSON.parse(e.target.result));
        this.getLocalStorage();
      }
      reader.readAsText(file);
    }
  },
  created(){
    this.getLocalStorage();
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
.del{
  width: 30px;
  height: 30px;
  padding: 0px;
}
.list-item{
  padding: 0;
  cursor: pointer;
}
.list-item:hover{
  background: #f3f0f0;
}
.title-item{
  padding: .75rem 1.25rem;
}
.btn-group{
  margin-right: 1.25rem;
}
.container{
  text-align: right;
}
.load-symbol{
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
  transition: all .3s;
  margin: 0;
  margin-bottom: 5px;
}
.load-symbol:hover{
  transform: translateY(-5px);
}
/*  */
[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

 </style>