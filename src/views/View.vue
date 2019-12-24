<template>
  <div class="view">
    <Print v-if="isSaved" class="print"/>
    <div class="btn-group">
        <b-button-group> 
        <b-button @click="changeState('test')">Тестовое задание</b-button>
        <b-button @click="changeState('withanswer')">Ответы</b-button>
        <b-button @click="changeState('answer')">Бланк для ответов</b-button>
        </b-button-group>
    </div>
    <div v-if="state == 'test'">
        <div v-if="!isSaved" class="settings col-3 m-auto">
            <b-alert show variant="primary">
                Кол-во вариантов
                <b-input class="text-center col-4 m-auto" v-model="countVariant"></b-input>
                Кол-во вопросов
                <b-input class="text-center col-4 m-auto" v-model="countQuest"></b-input>
                <b-button variant="success" class="saveBtn" @click="saveValue">Сохранить</b-button>
            </b-alert>
        </div>

        <Test v-for="(count, index) in +countVariant" 
              :key="index" 
              :index="index" 
              :countQuest="+countQuest"
              :isSaved="isSaved"
              @setValue="setValue"/>
    </div>
    <ForAnswers :values="values" v-if="state == 'answer'"/>
    <WithAnswers :values="values" v-if="state == 'withanswer'" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions } from 'vuex';
import {mapGetters } from 'vuex';
import Print from '@/components/Print.vue';
import Test from '@/components/Test.vue';
import ForAnswers from '@/components/ForAnswers.vue';
import WithAnswers from '@/components/WithAnswers.vue';
import { log } from 'util';

export default {
  name: 'view',
  components: {
    Print,
    Test,
    ForAnswers,
    WithAnswers
  },
  data(){
    return{
        countVariant: 1,
        countQuest: 0,
        state: 'test',
        values: [],
        isSaved: false
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
    changeState(val){
      this.state = val;
    },
    saveValue(){
      this.values = [];
      this.$emit('getVariant');
      this.isSaved = true;
    },
    setValue(payload){
      // console.log(payload);
      let {value} = payload
      this.values.push(value);
      // console.log(this.values);
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
.saveBtn{
  margin-top: 10px;
}
@media print {
  .btn-group,
  .settings,
  .print{
    display: none; 
  }
}
 </style>