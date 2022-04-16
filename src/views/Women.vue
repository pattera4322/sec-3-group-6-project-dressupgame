<script setup>
import { ref, onBeforeMount, computed } from "vue";
import ClothList from "../components/ClothList.vue";
import BaseButton from "../components/BaseButton.vue";
// import createCloth from "../components/createCloth.vue";


const sex = "women/women.png";
const clothJson = ref([]);
const getclothList = async () => {
  const res = await fetch(`http://localhost:5000/clothes`);
  if (res.status === 200) {
    clothJson.value = await res.json();
    console.log(clothJson.value);
  } else {
    console.log("error kuay");
  }
};
onBeforeMount(async () => {
  await getclothList();
});

const createClothes = async (sex,top,bottom,shoe) => {
  console.log('success')
  const res = await fetch(`http://localhost:5000/Add`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({sex: sex,finTop: top,finBot: bottom,finShoes: shoe})

  })
  if (res.status === 201) {
    const finishedCloth = await res.json()
    clothJson.value.push(finishedCloth)
    console.log('added sucessfully')
  } else console.log('error, cannot be added')
} 

let top = ref("");
let bottom = ref("");
let shoe = ref("");
const clickTop = (e) => (top.value = e);
const clickBottom = (e) => (bottom.value = e);
const clickShoes = (e) => (shoe.value = e);


</script>

<template>
  <div class="body">
    <h1>Women Dress up</h1>
    <img class="women" src="women/women.png" width="600" height="600" />
    <div>   
      <img :class="bottom != ``? 'enable':'disable'" v-bind:src="bottom" id="bottom"/>
      <img :class="shoe != ``? 'enable':'disable'" v-bind:src="shoe" id="shoe"/>
      <img :class="top != ``? 'enable':'disable'" v-bind:src="top" id="top"/>
    </div>

    <div class="wardrode">
      <h2>Wardrobe</h2>
      <ClothList :clothes="clothJson.topWomen" @clothObj="clickTop" />
      <ClothList :clothes="clothJson.bottomWomen" @clothObj="clickBottom" />
      <ClothList :clothes="clothJson.shoesWomen" @clothObj="clickShoes" />
    </div>

    <router-link :to="{ name: 'Finish' }">
      <!-- <createCloth @createCloth="createClothes" /> -->
      <BaseButton yourText="Finish" @click="createClothes(sex,top,bottom,shoe)"/>
    </router-link>
  </div>
</template>

<style scoped>
.women {
  position: absolute;
  z-index: 99;
  top: 15%;
  right: 60%;
}
#top {
  position: absolute;
  z-index: 99;
  top: 15%;
  right: 60%;
  width: 600px;
  height: 600px;
}
#bottom {
  position: absolute;
  z-index: 99;
  bottom: 23%;
  right: 60%;
  width: 600px;
  height: 600px;
}
#shoe {
  position: absolute;
  z-index: 99;
  bottom: 22.5%;
  right: 60%;
  width: 600px;
  height: 600px;
}
.wardrode {
  position: absolute;
  z-index: 99;
  top: 15%;
  left: 40%;
}
.disable {
    display: none;
}
.enable {
    display: inline;
}
</style>
