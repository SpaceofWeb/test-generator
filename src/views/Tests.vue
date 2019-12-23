<template>
  <div class="tests">
    <div class="tests-title">
        <h2>Ваши тесты</h2>
        <p>Выберите нужный или создайте новый</p>
    </div>       
      <b-container>
    <b-list-group>
        <b-list-group-item href="#" v-for="(test, ind) in getTestsTitle" :key="ind" 
          @click="view"
          class="d-flex test-item justify-content-between align-items-center">
            <p style="text-align: left;" class="m-0">
              <span style="font-weight: bold">{{test}}</span><br>
              <span style="font-size: 13px;">{{test.data}}</span>
            </p>
            <b-badge variant="primary" pill>Кол-во вопросов: {{countQuestions}}</b-badge>
        </b-list-group-item>
    </b-list-group>
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
      }
  },
  computed:{
    ...mapGetters([
        'getTestsTitle',
        'countQuestions'
    ])
  },
  methods: {
    ...mapActions([
        'ActGetTests'
    ]),
    view(){
      this.$router.push('/view');
    }
  },
  created(){
      //  this.$store.dispatch('ActGetTests', 2);
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
 </style>