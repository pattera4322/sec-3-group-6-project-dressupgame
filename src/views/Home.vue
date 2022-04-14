<script setup>
import {ref , onBeforeMount} from 'vue'
import BaseButton from '../components/BaseButton.vue'
import { useRoute, useRouter } from 'vue-router'

  onBeforeMount(async () => {
    await showGender()
    await music()
  })

  //gender
  const genders = ref([])
  const whatGender = ref(false)
  const showGender = async () => {
      const res = await fetch(`http://localhost:5000/gender`)
      if (res.status === 200) {
       genders.value = await res.json()
       console.log(genders.value);
      } 
  }  
  const sex = ref(whatGender? genders.man : genders.women)
  console.log(sex);

  //startButton
  const startButton = ref(false)
//   const firstPage = ref(true)
  const name= ref('')

  //Music
  let { params } = useRoute()
  console.log(params.noteId)
  const appRouter = useRouter()
//   const goBack = () => appRouter.go(-1)
  const goToDressup = () => appRouter.push(whatGender == false? { name: 'Women' }: { name: 'Men'})

  const musicOn = ref(true)
  const getMusic = ref([])
//   const musicPause = 'musicpause'
//   const musicPlay = 'musicplay'
  const music = async () => {
      const res = await fetch(`http://localhost:5000/music`)
      if (res.status === 200) {
       getMusic.value = await res.json()
       console.log(getMusic.value);
      } 
  }
  const audio = new Audio (getMusic.playMusic);
  const playMusic =  (musicOn) => musicOn == true  ? audio.pause() : audio.play() ;
  const play = getMusic.play
  const pause = getMusic.pause;  
</script>
 
<template>
<div>
    <h1 class="pt-5">Welcome to Dressup Game</h1>
    <h3>First, choose your gender!!</h3>

    <!--choose gender-->
    <span class="tooltip-container">
      <img v-bind:src='genders.man'  class="tran" width="300" height="300" @click="whatGender = true , startButton = true">
      <span class="tooltip">man</span>
    </span>
    
    <span class="tooltip-container">
      <img v-bind="genders.women" class="tran" width="300" height="300" @click="whatGender = false , startButton = true">
      <span class="tooltip">woman</span>
    </span>
    <!-- <span class="tooltip-container">
      <img src="src/assets/men/man-button.png" class="tran" width="300" height="300" @click="whatGender = true , startButton = true">
      <span class="tooltip">man</span>
    </span>
    
    <span class="tooltip-container">
      <img src="src/assets/women/women-button.png" class="tran" width="300" height="300" @click="whatGender = false , startButton = true">
      <span class="tooltip">woman</span>
    </span> -->

    <!--show gender-->
    <div v-show="startButton" id="textbox">
    
    <div v-if="whatGender == true" id="inputtext">
     <div class="input-group mb-2">
       <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">        
             <img v-bind:src="genders.manSign" width="24" height="24">
           </span>
       </div>
      <input v-model="name" type="text" class="col-xs-2" placeholder="Your's name" aria-label="Username" aria-describedby="basic-addon1">
      </div> 
    </div>

    <div v-else-if="whatGender == false" id="inputtext">
      <div class="input-group mb-2">
       <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">        
             <img v-bind:src="genders.womenSign" width="24" height="24">
           </span>
       </div >
      <input v-model="name" type="text" class="col-xs-2" placeholder="Your's name" aria-label="Username" aria-describedby="basic-addon1">
     </div>  
    </div>

    <!--start button-->
    <!-- <router-link :to="{ name: 'Play' , params: {whatGender: sex}}">START</router-link> loop -->
    <!-- <BaseButton yourText="START" [routerLink]="['Play', whatGender]"/> loop -->
    <!-- <button @click="goToDressup">START</button> -->
      <BaseButton yourText="START" class="btn-hover color-6" @click="goToDressup" id = "buttonStart"/>
    </div>
 
  <!--music button-->
  <!-- :class="musicOn == true? musicPause : musicPlay"  -->
    <div 
        @click="playMusic(!musicOn), musicOn == true? musicOn = false : musicOn = true">
        <img :src="musicOn == true ? play : pause" width="50" height="50"> 
    </div>
</div>
</template>
 
 <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&family=Playfair+Display:wght@800&display=swap');
    .block{
        margin-left: 80px;
        margin-right: 80px;
    }
    .block :hover{
        width:340px;
        height:330px;
        transition: 0.6s;
    }
    
    h1 {
   font-family: 'Playfair Display', serif;
  }
    h3 {
    font-family: 'Hahmlet', serif;
  }
    .body {
    text-align: center;
    background-image: 
    radial-gradient(at 1% 17%, #f3d1f4, transparent 50%),
    radial-gradient(at 80% 10%, #f5fcc1, transparent 50%),
    radial-gradient(at 90% 90%, #bae5e5, transparent 50%),
    radial-gradient(at 14% 91%, #98d6ea, transparent 50%);
    /* background-attachment: fixed; */
    height: 100vh;
    }
</style>