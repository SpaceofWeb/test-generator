<template>
  <div class="for-answers">
    <div class="title">
        <h3>{{getTestsTitle.testTitle}}</h3>
    </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">A</th>
                <th scope="col">B</th>
                <th scope="col">C</th>
                <th scope="col">D</th>
                <th scope="col">F</th>
                <th scope="col" style="max-width: 70px;">Для испавлений</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(count, index) in countQuestions" :key="index" >
                    <th scope="row">{{index+1}}</th>
                    <td v-for="(count, index) in 6" :key="index" style="border-left: 1px solid #333;"></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions } from 'vuex';
import {mapGetters } from 'vuex';

export default {
  name: 'ForAnswers',
  components: {
    
  },
  data(){
    return{
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
  },
  created(){
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
 </style>