<script setup>
import { ref, onBeforeMount , computed } from 'vue'
import ClothList from '../components/ClothList.vue'


const clothJson = ref([])
const getclothList = async () => {
    const res = await fetch(`http://localhost:5000/clothes`)
    if (res.status === 200) {
        clothJson.value = await res.json()
        console.log(clothJson.value)
    } else { console.log("error kuay") }
}
onBeforeMount(async () => {
    await getclothList()
});

//CREATE
/*const createNewNote = async (newNote) => {
  const res = await fetch("http://localhost:5001/notes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ noteDetail: newNote }),
  });
  if (res.status === 201) {
    const addedNote = await res.json();// <--- ทำเพื่อให้เมื่อกดลบแล้วให้ front end เปลี่ยนการแสดงผลไปด้วย
    notes.value.push(addedNote);// <--- ทำเพื่อให้เมื่อกดลบแล้วให้ front end เปลี่ยนการแสดงผลไปด้วย
    console.log("Created successfully");
  } else {
    console.log("error,cannot create");
  }
};*/

let top = ref("")
let bottom = ref("")
let shoe = ref("")
const clickTop = (e) => {top.value = e}
const clickBottom = (e) => bottom.value = e
const clickShoes = (e) => shoe.value = e

</script>
 
<template>
    <div class="body">
        <h1>Jim ./.</h1>
        <img src="women/women.png" width="600" height="600">
        <img v-if="top != null" v-bind:src="top" >
        <img v-if="bottom != null" v-bind:src="bottom" >
        <img v-if="shoe != null" v-bind:src="shoe" >

        <div>
            <h2>Wardrobe</h2>
            <ClothList :clothes='clothJson.topWomen' @clothObj="clickTop"/>
            <ClothList :clothes='clothJson.bottomWomen' @clothObj="clickBottom"/>
            <ClothList :clothes='clothJson.shoesWomen' @clothObj="clickShoes"/>
        </div>
    </div>
</template>
 
<style scoped>
</style>