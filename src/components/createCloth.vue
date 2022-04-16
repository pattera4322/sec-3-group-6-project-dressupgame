<script setup>
import { ref, computed } from 'vue'

defineEmits(['createCloth', 'updateCloth'])
const props = defineProps({
  currentCloth: {
    type: Object,
    default: {}
  }
})
console.log(props.currentCloth)
// const newNote = ref({
//   id: props.currentNote.id,
//   noteDetail: props.currentNote.noteDetail
// })
const newCloth = computed(() => {
  return {
      sex: props.currentCloth.sex,
      finTop: props.currentCloth.finTop,
      finBot: props.currentCloth.finBot,
      finShoes: props.currentCloth.finShoes,
      id: props.currentCloth.id
  }
})
console.log(newCloth.value)
</script>

<template>
  <div>
    
    <button @click="$emit('createCloth', newCloth.id)">
      FINISH
    </button>
  </div>
</template>

<style></style>

<!-- <h2>Create/Edit Note</h2>
    Note Detail: <input type="text" v-model="newNote.noteDetail" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">
      Save
    </button> -->