<script setup>
import {ref , onBeforeMount} from 'vue'
import ClothList from './components/ClothList.vue'
// const topMen = ref([])
const imageBlob = ref()

const urlJa = ref([])
const clothJson = ref([])
const getclothList = async () => {
    const res = await fetch(`http://localhost:5000/topMen`)
    if(res.status === 200){
        clothJson.value = await res.json()
        console.log(clothJson.value)
    }else{ console.log("error kuay") }
}
onBeforeMount(async () => {
  await getclothList()
});



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
    <!--<ClothList :clothes = 'clothJson' :urlCloth = 'urlJa'/>-->
</div>
</template>
 
<style>

</style>