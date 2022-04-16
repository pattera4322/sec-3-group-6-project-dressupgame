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

// const scrollCloth = (e) => {
//   // e.preventDefault();
//   scrollCloth.scrollBy({
//     left: e < 0 ? -30 : 30,
//   });
//   console.log('0|0');
// }
</script>
 
<template>
  <div id="cloth">
      <span v-for="(cloth, index) in clothes" :key="index">
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

  .colth{
    display: flex;
    overflow-x: scroll;
    max-width: 50rem;
    margin: 0 auto;
    background-color: blanchedalmond;
  }

  .colth span img{
    border-radius: 8px;
    background-color: white;
    background: transparent 50%;
    padding: 2rem 3rem;
    margin: 2rem 1rem;
  }

</style>