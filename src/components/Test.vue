<template>
  <div class="test">
    <div class="title">
        <h3>{{getTestsTitle.testTitle}}</h3>
        <h4>Вариант {{index+1}}</h4>
      </div>
      <div class="answers">
        <ul v-for="(question, index) in getQuest" :key="index">
            <div class="question">{{index + 1}}. {{ question.question }}</div>
            <li v-for="(answers, index) in question.answers" :key="index">
                <div class="answer">{{answers.title}}</div>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'Test',
  props: {
    index: Number,
    countQuest: Number
  },
  components: {
  },
  data(){
    return{
      randomQuestions: []
    }
  },
  computed:{
    ...mapGetters([
        'getTestsTitle',
        'countQuestions',
        'getQuestions'
    ]),
    getQuest(){
      // let q = this.randomQuestions;
      let q = Object.assign([], this.randomQuestions);

      if(this.countQuest > 0 
        && this.countQuest < this.randomQuestions.length){

        q.length = this.countQuest;
      }
      return q;
    }
  },
  methods: {
    setValue(){
      console.log({var: this.index+1, value: this.getQuest});
      this.$emit('setValue', {var: this.index+1, value: this.getQuest});
    }
  },
  created(){
    console.log("Create randomQuestions");
    this.randomQuestions = shuffle(this.getQuestions);
    this.$parent.$on('getVariant', this.setValue);
  }
}
// Privat
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
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
ul,li{
    list-style: none;
}

 </style>