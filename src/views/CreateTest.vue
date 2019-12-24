<template>
  <div class="create-test">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-alert show variant="info" class="m-0" >
        <b-button variant="info" @click="saveTest">Сохранить</b-button>
    </b-alert>

   <b-col class="m-auto" sm="6">
     <h2 class="title-test">Название теста</h2>
      <b-form-textarea
        v-model="titleTest"
        placeholder="Введите название теста">
      </b-form-textarea>
    </b-col>

    <Question 
      v-for="(question, ind) in questions"
      :key="ind" 
      :index="ind"
      :question="question.question"
      :answers="question.answers"
      @inputQuestion="inputQuestion"
      @inputAnswersField="inputAnswersField"
      @inputAnswersCheck="inputAnswersCheck"
      @addAnswer="addAnswer"
      @deleteAnswer="deleteAnswer"
      @deleteQuestion="deleteQuestion"/>
      <b-button @click="addQuestion" variant="success" class="addQuestion">Добавить вопрос</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import { log } from 'util'

export default {
  name: 'CreateTest',
  components: {
    Question
  },
  data(){
    return{
      titleTest: '',
      questions: [
        {
          question: '',
          answers: [{
            title: '',
            isCorrect: false
          }]
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'saveTestACT'
    ]),
    inputQuestion(payload){
      console.log(payload);
      this.questions[payload.index].question = payload.value;
    },
    // Check Box
    inputAnswersCheck(payload){
      let {value, index, ansIndex} = payload;
      this.questions[index].answers[ansIndex].isCorrect = !value;
      // console.log(`Now ${ this.questions[index].answers[ansIndex].isCorrect = !value}`);
    },
      // Field
    inputAnswersField(payload){
      // console.log(payload);
      let {value, index, ansIndex} = payload;
      this.questions[index].answers[ansIndex].title = value;
    },
    // Add Answer
    addAnswer(payload){
      let {index} = payload;
      this.questions[index].answers.push({
            title: '',
            isCorrect: false
          });
    },
    // Delete Answer
    deleteAnswer(payload){
       let {index, ansIndex} = payload;
       this.questions[index].answers.splice(ansIndex, 1);
    },
    // Add Question
    addQuestion(){
      // console.log(this.questions);
      this.questions.push({
        question: '',
        answers: [{
          title: '',
          isCorrect: false
        }]
      });
    },
    // Delete Question
    deleteQuestion(ind) {
      this.questions.splice(ind, 1);
    },
    // Save
    saveTest(){
      this.$store.dispatch('saveTestACT', { titleTest: this.titleTest, questions: this.questions });
      this.$router.push('/view');
    },
    ...mapMutations([
      'editClear'
    ])
  },
  computed: {
    ...mapGetters([
      'getEditTest'
    ])
  },
  created(){
    if(Object.entries(this.getEditTest).length > 0){
      let {titleTest, questions} = this.getEditTest;
      this.titleTest = titleTest;
      this.questions = questions;
      this.$store.commit('editClear');
    }
    // console.log(`Edit = ${this.getEditTest}`);
    // console.log(Object.entries(this.getEditTest).length > 0);
  }
}
</script>

 <style scoped>
 .addQuestion{
   margin-top: 30px;
 }
 .title-test{
   padding-top: 50px;
 }
 .create-test{
   padding-bottom: 100px;
 }
 </style>