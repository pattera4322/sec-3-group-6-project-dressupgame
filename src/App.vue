<script setup>
import { ref,onBeforeMount } from 'vue'
    const musicOn = ref(true)
    const musicPause = 'musicpause'
    const musicPlay = 'musicplay'
    const audio = new Audio ('public/song.mp3');
    const playMusic =  (musicOn) => musicOn == true  ? audio.pause() : audio.play() ;
    const play = 'public/play.png'
    const pause = 'public/pause.png' 


</script>
 
<template>
  <div class="body">
    <div v-if="$route.path == '/'">
      <router-link :to="{ name: 'Play' }">
        <div class="center">
          <img src="PlayGame.png" width="100" height="100">
        </div>
      </router-link>
    </div>

    <router-view></router-view>
    
    <div :class="musicOn == true? musicPause : musicPlay" 
    @click="playMusic(!musicOn), musicOn == true? musicOn = false : musicOn = true">
    <img :src="musicOn == true ? play : pause" class="music"> 
  </div>
  </div>
</template>
 
<style scoped>
.center {
  padding-top: 300px;
  text-align: center;
}
.music {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 95%; 
    top: 90%; 
    transform:translate(-50%, -50%);
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