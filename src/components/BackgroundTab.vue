<script setup lang="ts">
import type { Background } from '@/types/types';
import { ref } from 'vue';

import { useBuildStore } from '@/stores/store';
const buildStore = useBuildStore();

defineProps<{ 
  db: Array<Background> | null 
  tab: string
  }>();
let backgroundToShow = ref<string | undefined>('')

</script>

<template>
  <div class="grid-container">
    <div @click="buildStore.setBackground(item?.name)" class="grid-item" v-for="item in db" :key="item?.id">
      <img @click="backgroundToShow = item?.description" :src="item?.icon">
      <p>{{ item.name }}</p>
    </div>
  </div>
  <p class="description">{{ backgroundToShow }}</p>
  {{ tab }}
</template>

<style scoped lang="scss">
.grid-container {
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
}
</style>