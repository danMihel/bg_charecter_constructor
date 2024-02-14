<script setup lang="ts">
import LeftSelectionWindow from '@/components/LeftSelectionWindow.vue'
import RigthtSelectionWindow from '@/components/RigthtSelectionWindow.vue'
import api from '../../api.json'
import { ref, onMounted } from 'vue'

import type { Api, Race, Classes, Background } from '@/types/types.ts'

const DataBase: Api = api

const menuList: Array<{ id: string, name: string }> = [
  {
    id: 'background',
    name: "Происхождение",
  },
  {
    id: 'race',
    name: "Расса"
  },
  /* {
     id: 'cantrips',
     name: "Фокусы",
   },
   {
     id: 'classes',
     name: "Класс",
   },
   {
     id: 'skills',
     name: "Навыки"
   } */
]

const chosenTab = ref<string>('');
const filteredDataBase = ref<(Race | Classes | Background)[] | null>(null)

const filterDataBase = (tabs: string) => {
  switch (tabs) {
    case 'background':
      filteredDataBase.value = DataBase.background
      chosenTab.value = tabs
      break
    case 'race':
      filteredDataBase.value = DataBase.race
      chosenTab.value = tabs
      break
    case 'cantrips':
      break
    case 'classes':
      filteredDataBase.value = DataBase.classes
      chosenTab.value = tabs
      break
    case 'skills':
      break
    default:
      filteredDataBase.value = DataBase.background
      chosenTab.value = tabs
      break
  }
}
let selectedItemId = ref<string | undefined>('background')

onMounted(() => {
  chosenTab.value = menuList[0].id
  filterDataBase(chosenTab.value)
})
</script>

<template>
  <div>
    <div class="main-wraper">
      <div class="left-wraper">
        <ul>
          <li @click="filterDataBase(item.id); selectedItemId = item.id" v-for="item in menuList" :key="item.id"
            :class="{ 'selected': item.id === selectedItemId }">{{ item.name }} </li>
        </ul>
        <LeftSelectionWindow :db="filteredDataBase" :tab="chosenTab" />
      </div>
      <RigthtSelectionWindow />
    </div>
  </div>
</template>
  
<style scoped lang="scss">
.main-wraper {
  display: flex;

  .left-wraper {
    width: 50%
  }
}

ul {
  display: flex;
  gap: 14px;
  list-style: none;
  border: 1px solid gray;

  .selected {
    border: 2px solid gold;
  }

  li:hover {
    cursor: pointer;
  }
}

img {
  background-color: black;
}</style>