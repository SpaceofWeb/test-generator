<template>
  <div class="test">
    <div class="title">
        <h3>{{getTestsTitle.testTitle}}</h3>
        <h4>Вариант {{index+1}}</h4>
        {{isSaved}}
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
    countQuest: Number,
    isSaved: Boolean
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
      // this.$emit('setValue', {var: this.index+1, value: this.getQuest});
      this.$emit('setValue', {value: this.getQuest});
    }
  },
  created(){
    console.log("Create randomQuestions");
    this.randomQuestions = !this.isSaved ? shuffle(this.getQuestions) : this.getQuestions;
    this.$parent.$on('getVariant', this.setValue);
  }
}
// Privat
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
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