<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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

export default {
  name: 'Home',
  components: {
    Question
  },
  data(){
    return{
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
    inputQuestion(payload){
      console.log(payload);
      this.questions[payload.index].question = payload.value;
    },
    // Check Box
    inputAnswersCheck(payload){
      console.log(payload);
      let {value, index, ansIndex} = payload;
      this.questions[index].answers[ansIndex].isCorrect = !value;
      console.log(`Now ${ this.questions[index].answers[ansIndex].isCorrect = !value}`);
    },
      // Field
    inputAnswersField(payload){
      console.log(payload);
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
      console.log(this.questions);
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
      console.log(ind);
      console.log(this.questions[ind]);
      this.questions.splice(ind, 1);
    }
  }
}
</script>


 <style scoped>
 .addQuestion{
   margin-top: 30px;
 }
 </style>