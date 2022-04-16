<script setup>
import { ref, onBeforeMount } from "vue";
import ClothList from "../components/ClothList.vue";

const clothJson = ref([]);
const getclothList = async () => {
  const res = await fetch(`http://localhost:5000/clothes`);
  if (res.status === 200) {
    clothJson.value = await res.json();
    console.log(clothJson.value);
    console.log(clothJson.value.part);
  } else {
    console.log("error");
  }
};
onBeforeMount(async () => {
  await getclothList();
});


let top = ref("");
let bottom = ref("");
let shoe = ref("");
const clickTop = (e) => (top.value = e);
const clickBottom = (e) => (bottom.value = e);
const clickShoes = (e) => (shoe.value = e);

</script>

<template>
  <div>
    <h1>Men Dress Up</h1>
    <img class="men" src="men/man.png" width="600" height="600" />
    <div>
      <img :class="bottom != ``? 'enable':'disable'" v-bind:src="bottom" id="bottom"/>
      <img :class="shoe != ``? 'enable':'disable'" v-bind:src="shoe" id="shoe"/>
      <img :class="top != ``? 'enable':'disable'" v-bind:src="top" id="top"/>
    </div>
    <div class="wardrobe">
      <h2>Wardrobe</h2>
      <ClothList :clothes="clothJson.topMen" @clothObj="clickTop" />
      <ClothList :clothes="clothJson.bottomMen" @clothObj="clickBottom" />
      <ClothList :clothes="clothJson.shoesMen" @clothObj="clickShoes" />
    </div>
  </div>
</template>

<style scoped>
.men{
    position: absolute;
    z-index: 99;
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
    bottom: 23%;
    right: 60%;
    width:600px;
    height: 600px;
}
#shoe{
    position: absolute;
    z-index: 99;
    bottom: 22.5%;
    right: 60%;
    width:600px;
    height: 600px;
}
.wardrobe{
    position: absolute;
    z-index: 99;
    top: 15%;
    left: 40%;
}
.disable{
    display: none;
}
.enable{
    display: inline;
}
</style>
