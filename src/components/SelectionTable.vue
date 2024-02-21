<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { Race, Classes, Background } from '@/types/types'

import { useBuildStore } from '@/stores/store';
const buildStore = useBuildStore();

const props = defineProps<{
  db: Array<Background> | null
  tab: string
}>();

const background =  buildStore.getBackground;
const race = buildStore.getRace;
const classes =  buildStore.getСlasses;

const selectedItemId = ref<number | undefined>()

const backgroundToShow = ref<string | undefined>('')

watch(() => props.tab, (newValue) => {
  if (newValue === 'background') {
    backgroundToShow.value = background.value?.description;
    selectedItemId.value = background.value?.id;
  }
  if (newValue === 'race') {
    backgroundToShow.value = race.value?.description;
    selectedItemId.value = race.value?.id;
  }
  if (newValue === 'classes') {
    backgroundToShow.value = classes.value?.description;
    selectedItemId.value = classes.value?.id;
  }
});

const onImgClick = (item: Background | Race | Classes, currentTab: string): void => {
  switch (currentTab) {
    case 'background':
      buildStore.setBackground(item);
      break;
    case 'race':
      buildStore.setRace(item);
      break;
    case 'classes':
      buildStore.setСlasses(item);
      break;
    default:
      break;
  }
}
</script>

<template>
  <div class="grid-container">
    <div @click="onImgClick(item, props.tab)" class="grid-item" v-for="item in db" :key="item?.id">
      <img @click="backgroundToShow = item?.description;
      selectedItemId = item.id" :src="item?.icon" :class="{ 'selected': item?.id === selectedItemId }">
      <p>{{ item.name }}</p>
    </div>
  </div>
  <p class="description">{{ backgroundToShow }}</p>
</template>

<style scoped lang="scss"> .grid-container {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 10px;

   .grid-item {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     background-color: #f2f2f2;
     padding: 10px;

     .selected {
       border: 2px solid red;
     }

     img {
       max-width: 100px;
       background-color: black;
     }
   }
 }

 .description {
   max-width: 75%;
   margin: 0 auto;
   text-align: center;
   margin-top: 14px;
   margin-bottom: 30px;
 }
</style>