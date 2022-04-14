<script setup>
import {ref , onBeforeMount} from 'vue'
import ClothList from './components/ClothList.vue'
// const topMen = ref([])
const imageBlob = ref()


const clothJson = ref([])
const getclothList = async () => {
    const res = await fetch(`http://localhost:5000/topMen`)
    if(res.status === 200){
        clothJson.value = await res.json()
        console.log(clothJson.value)
        console.log(clothJson.value.part)
    }else{ console.log("error kuay") }
}
onBeforeMount(async () => {
  await getclothList()
});
// console.log(clothJson.value.part)

// const getclothList2 = async () => {
//     console.log('test')
//     const res = await fetch(`http://localhost:5000/topMen`)
//     if(res.status === 200){
//         imageBlob.value = await res.blob()
//         const imageObjURL = URL.createObjectURL(imageBlob)
//         const image = document.createElement('img')
//         image.src = imageObjURL
//         const container = document.getElementById("test")
//         container.append(image)
//     }else{ console.log("error kuay") }
// }
</script>
 
<template>
<div>
    <!-- <div id="test"></div> -->
    <ClothList :clothes = 'clothJson' urlCloth = 'men/topM3.png' />
    <img src="men/topM2.png">
</div>
</template>
 
<style>

</style>