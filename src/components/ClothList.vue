<script setup>
import {ref, onBeforeMount } from 'vue';
defineEmits(['next','clothObj'])
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
 //const clothPart = ref(clothes.part)

</script>
 
<template>
<div>
    <h2>Wardrobe</h2>
    <button @click="$emit('clothObj',clothes)">kuay</button>
    <ul>
      <li v-for="(cloth, index) in clothes" :key="index">
        cloth Id:{{ cloth.id }} {{ cloth.part }} 
          <img src="{{ cloth.part }}"/> 
          <img src= "{{urlCloth}}"/>  
          {{urlCloth}}
      </li>
      <img src="men/topM3.png">
      <img src="{{ cloth.part[0] }}"/> 
    </ul>
  </div>
</template>
 
<style>

</style>