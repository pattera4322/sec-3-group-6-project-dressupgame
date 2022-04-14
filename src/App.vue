<script setup>
import {ref , onBeforeMount} from 'vue';

const clothJson = ref([]);
const getclothList = async (clothObj) => {
    const res = await fetch(`http://localhost:5000/${clothObj}`)
    if(res.status === 200){
        clothJson.value = await res.json();
        console.log(clothJson.value);
    }else{ console.log("error kuay") }
}
onBeforeMount(async () => {
  await getclothList(clothObj)
})

</script>
 
<template>
    <div>
        <div>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
 
<style>

</style>