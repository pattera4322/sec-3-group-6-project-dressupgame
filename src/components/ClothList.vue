<script setup>
import {ref, onBeforeMount } from 'vue';
defineEmits(['clothObj'])
defineProps({
  clothes: {
    type: [Array, Object],
    require: true
  },
  urlCloth: {
    type: String,
    require: true
  }
})
</script>
 
<template>
<div>
    
      <span v-for="(cloth, index) in clothes" :key="index" class="y">
         <img v-bind:src="cloth.part" @click="$emit('clothObj',cloth.part)">
      </span>
    
  </div>
</template>
 
<style scoped>
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

</style>