<template>
  <div class="view">
    <div class="btn-group">
        <b-button-group>
        <b-button @click="changeState('test')">Тестовое задание</b-button>
        <b-button @click="changeState('answer')">Бланк для ответов</b-button>
        <b-button @click="changeState('withanswer')">Ответы</b-button>
        </b-button-group>
    </div>
    <div v-if="state == 'test'">
        <div class="div col-3 m-auto">
            <b-alert show variant="primary">
                Кол-во вариантов
                <b-input class="text-center col-4 m-auto" v-model="countVariant"></b-input>
                Кол-во questions
                <b-input class="text-center col-4 m-auto" v-model="countQuest"></b-input> 
            </b-alert>
        </div>

        <Test v-for="(count, index) in +countVariant" 
              :key="index" 
              :index="index" 
              :countQuest="+countQuest"
              @setValue="setValue"/>
    </div>
    <ForAnswers v-if="state == 'answer'"/>
    <WithAnswers :value="value" v-if="state == 'withanswer'" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions } from 'vuex';
import {mapGetters } from 'vuex';
import Test from '@/components/Test.vue';
import ForAnswers from '@/components/ForAnswers.vue';
import WithAnswers from '@/components/WithAnswers.vue';

export default {
  name: 'view',
  components: {
    Test,
    ForAnswers,
    WithAnswers
  },
  data(){
    return{
        countVariant: 1,
        countQuest: 0,
        state: 'test',
        value: []
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
    ...mapActions([
        'ActGetTests'
    ]),
    getValiants(){
    },
    changeState(val){
      if(val == 'withanswer'){        
        this.value = [];
        this.$emit('getVariant');
      }  
      this.state = val;
    },
    setValue(payload){
      this.value.push(payload);
      console.log(this.value);
    }
  },
  created(){
  }
}
</script>


<style scoped>
.btn-group{
    padding: 5px 0 5px 0;
}
ul,li{
    list-style: none;
}

 </style>