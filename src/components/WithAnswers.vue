<template>
  <div class="with-answers">
    <table class="table">
      <thead>
        {{value}}
          <tr>
           <th v-for="(val, index) in value" :key="index" scope="col">Var {{val.var}} {{val.value}}</th>
          </tr>
          <tbody>
            <tr v-for="(val, index) in value" :key="index" >
              <th scope="row">
                {{index+1}}
              </th>
              <td>{{ val }}</td>
            </tr>
          </tbody>
      </thead>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'WithAnswers',
  props: ['value'],
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
ul,li{
    list-style: none;
}
.success{
  background: #51f957;
}


 </style>