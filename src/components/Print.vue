<template>
  <div class="print">
    <b-alert show variant="info" class="m-0" >
        <b-button variant="info" @click="print">Печатать</b-button>
    </b-alert>
  </div>
</template>

<script>
export default {
name: 'Print',
  data(){
    return{

    }
  },
  methods: {
    print(){
      window.print();
    }
  }  
}
</script>

<style scoped>

</style>
