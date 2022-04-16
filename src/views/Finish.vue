<script setup>
import {ref, onBeforeMount } from 'vue'
import FinishClothes from "../components/FinishCloth.vue";

const finishCloth = ref([]);
const getclothList = async () => {
  const res = await fetch(`http://localhost:5000/Add`);
  if (res.status === 200) {
    finishCloth.value = await res.json();
    console.log(finishCloth.value);
  } else {
    console.log("error, cannot get data");
  }
};

onBeforeMount(async () => {
  await getclothList();
});



//DELETE
const removeCloth = async (removeClothId) => {
  const res = await fetch(`http://localhost:5000/Add/${removeClothId}`, {
    method: "DELETE",
  });
  if (res.status === 200) {
    finishCloth.value = finishCloth.value.filter((Add) => Add.id !== removeClothId);
    console.log("delete successfully");
  } else {
    console.log("error,cannot delete");
  }
};
</script>
 
<template>
  <div class="body">
    
    <FinishClothes :finClothes="finishCloth" @delete="removeCloth" />

    <router-link :to="{ name: 'Play' }">
        <img id="home" src="Homie.png" @click="removeCloth(currentId)">
    </router-link>
  </div>
</template> 
 
<style scoped>
.men{
    position: absolute;
    z-index: 9;
    top: 15%;
    right: 60%;
}
#top{
    position: absolute;
    z-index: 99;
    top: 15%;
    right: 60%;
    width:600px;
    height: 600px;
}
#bottom{
    position: absolute;
    z-index: 99;
    top: 15%;
    bottom: 23%;
    right: 60%;
    width:600px;
    height: 600px;
}
#shoe{
    position: absolute;
    z-index: 99;
    top: 15%;
    bottom: 22.5%;
    right: 60%;
    width:600px;
    height: 600px;
}
.disable{
    display: none;
}
.enable{
    display: inline;
}
</style>