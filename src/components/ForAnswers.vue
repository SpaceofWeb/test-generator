<template>
  <div class="for-answers">
    <div class="fio text-right">
      <p class="m-0" >Дата ________________</p>
      <p class="m-0">Ф.И.О. ___________________</p>
      <p class="m-0">группа ______________</p>
    </div>
    <div class="title">
        <h3>{{getTestsTitle.testTitle}}</h3>
        <h4  class="variant">Вариант ____</h4>
    </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th v-for="(countMax, indexMax) in getMaxAnswers" :key="indexMax" scope="col">
                  {{String.fromCharCode(65 + indexMax)}}
                </th>
                <th scope="col" style="max-width: 60px;">Для испавлений</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in values[0]" :key="index">
                    <th scope="row" class="row-count">{{index+1}}</th>
                    <td v-for="(answer, ansIndex) of +getMaxAnswers+1" :key="ansIndex">
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="signature text-right">
          ___________________________
        </div>    
        <div class="info text-left">
          *Ставим любые пометки в соответствующих правильным ответам ячейках. Если ошиблись, то в графе "Для исправлений" в соответствующей строке прописываем желаемый ответ(одно или более, в зависимости от вопроса, значений)
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import { log } from 'util';

export default {
  name: 'ForAnswers',
   props: {
    values: Array
  },
  components: {
    
  },
  data(){
    return{
      maxAnswers: 0
    }
  },
  computed:{
    ...mapGetters([
        'getTestsTitle',
        'countQuestions',
        'getQuestions'
    ]),
    getMaxAnswers(){
      return this.maxAnswers;
    }
  },
  methods: {
  },
  created(){
    this.values.forEach(value => {
      value.forEach(questions => {
        this.maxAnswers < questions.answers.length ? this.maxAnswers = questions.answers.length : false;
      });
    });
    // console.log(this.maxAnswers);
  }
}
</script>


<style scoped>
.title{
    padding: 20px 0;
    width: 100%;
    max-width: 500px;  
    margin: 0 auto;        
}
.fio,
.signature{
  padding-top: 50px;  
}
th,tr, td{
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  border-width: 2px;
  border-color: #333 !important;
}
.for-answers{
  width: 95%;
  margin: 0 auto;  
}
.row-count{
  width: 50px !important;
}
 </style>