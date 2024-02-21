<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Race, Classes, Background } from '@/types/types'

import { useBuildStore } from '@/stores/store';
const buildStore = useBuildStore();

const props = defineProps<{
  db: Array<Background> | null
  tab: string
}>();

const background = buildStore.getBackground.value

const race = buildStore.getRace.value

const classes = buildStore.getСlasses.value

const selectedItemId = ref<number | undefined>()

const backgroundToShow = ref<string | undefined>('')

watch(() => props.tab, (newValue) => {
  switch (newValue) {
    case 'background':
      backgroundToShow.value = background?.description;
      selectedItemId.value = background?.id;
      break;
    case 'race':
      backgroundToShow.value = race?.description;
      selectedItemId.value = race?.id;
      break;
    case 'classes':
      backgroundToShow.value = classes?.description;
      selectedItemId.value = classes?.id;
      break;
    default:
      break;
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
       border: 2px solid gold;
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