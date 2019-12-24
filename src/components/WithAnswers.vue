<template>
  <div class="with-answers">
    <h3>Бланк ответов</h3>
    <table class="table">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th v-for="(value, index) in values" :key="index" scope="col">В{{index + 1}}</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in values[0]" :key="index">
          <!-- {{row}} -->
          <th scope="row">{{index + 1}}</th>
          <template v-for="(question) in values">
            <td>
              <span v-for="(answer, ansIndex) in question[index].answers" :key="ansIndex">
                <span class="answer" v-if="answer.isCorrect">({{alphabet[ansIndex]}}) <!--{{answer}}--></span>
              </span>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'WithAnswers',
  props: {
    values: Array
  },
  components: {
  },
  data(){
    return{
      alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L']
    }
  },
  computed:{
    ...mapGetters([
        'getTestsTitle',
        'countQuestions',
        'getQuestions'
    ])
  },
  methods: {
  }
}
</script>


<style scoped>
.question{
    font-weight: bold;
}
.title{
    padding-top: 20px;
    width: 100%;
    max-width: 500px;  
    margin: 0 auto;        
}
.answers{
    text-align: left;
    padding-top: 60px;
}
.answer{
  font-weight: bold;
}
ul,li{
    list-style: none;
}
th,tr, td{
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  border-width: 2px;
  border-color: #333 !important;
}
.with-answers{
  width: 95%;
  margin: 0 auto;  
}
 </style>