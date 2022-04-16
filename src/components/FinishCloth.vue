<script setup>
import {ref, onBeforeMount } from 'vue';
defineEmits(['delete'])
defineProps({
  finClothes: {
    type: [Array, Object],
    require: true
  }
})

</script>
 
<template>
  <div id="cloth">
      <span v-for="(cloth, index) in finClothes" :key="index">
         <img v-bind:src="cloth.sex"> 
         <img v-bind:src="cloth.finTop"> 
         <img v-bind:src="cloth.finBot"> 
         <img v-bind:src="cloth.finShoes"> 
         <button @click="$emit('delete',cloth.id)">DELETE</button>
      </span>
  </div>
        
</template>
 
<style scoped>
  

</style>