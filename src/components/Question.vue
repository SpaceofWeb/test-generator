<template>
  <div class="question">
    <b-container fluid>
      <b-row>
        <b-col class="m-auto" sm="6">
          <div class="question-title d-flex align-items-center">
            <h3 class="text-left m-0">Вопрос {{index + 1}}</h3>
            <b-button @click="deleteQuestion(index)" pill variant="outline-danger ml-auto">Удалить вопрос</b-button>
          </div> 
          <b-form-textarea
            @input="inputQuestion"
            :value="question"
            placeholder="Введите вопрос">
          </b-form-textarea>
          <div class="answers">
            <h4 class="text-left">Варианты ответов: </h4>
            <!-- Answers -->
              <div v-for="(answer, ind) in answers" :key="ind" class="d-flex align-items-center answer">
                <!-- Check Box -->
                <!-- {{answer.isCorrect}} -->
                <b-form-checkbox v-model="answer.isCorrect"/>
                <!-- <b-form-checkbox :value="answer.isCorrect" v-model="" @change="inputAnswersCheck($event, ind)"/> -->
                <!-- Field -->
                <b-form-input :value="answer.title" @input="inputAnswersField($event, ind)" placeholder="Введите ответ"></b-form-input>
                <!-- Delete Btn -->
                <b-button :disabled="!canDelete" @click="deleteAnswer(ind)" class="deleteAnswer" variant="danger">-</b-button>
              </div>

              <b-button @click="addAnswer" variant="primary" class="addAnswer">Добавить ответ</b-button>
          </div>  
          <hr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    index: Number,
    question: String,
    answers: Array
  },
  data(){
    return{
    }
  },
  computed:{
    canDelete(){
      return this.answers.length > 1;
    }
  },
  methods: {
    // Textarea
    inputQuestion(value){
      this.$emit('inputQuestion', {value: value, index: this.index});
    },
    // Check Box
    inputAnswersCheck(event, ind){
      // index - component | ansIndex - answer index
      this.$emit('inputAnswersCheck', {value: event, index: this.index, ansIndex: ind});
    },
    // Field
    inputAnswersField(event, ind){
      // index - component | ansIndex - answer index
      this.$emit('inputAnswersField', {value: event, index: this.index, ansIndex: ind});
    },
    addAnswer(){
      this.$emit('addAnswer', {index: this.index});
    },
    deleteAnswer(ind){
      this.$emit('deleteAnswer', {index: this.index, ansIndex: ind});
    },
    deleteQuestion(index){
      console.log(index);
      this.$emit('deleteQuestion', index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question{
    margin-top: 50px;
  }
  .answers{
    margin-top: 25px;
  }
  .answer{
    margin-bottom: 25px;
  }
  .deleteAnswer{
    margin-left: 10px;
  }
  .question-title {
    margin-bottom: 15px;
  }
</style>
