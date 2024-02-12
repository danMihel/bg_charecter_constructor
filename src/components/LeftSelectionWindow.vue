<script setup lang="ts">
import type {Race, Classes, Background} from '@/types/types.ts'
import  BackgroundTab from '@/components/BackgroundTab.vue';

defineProps<{
  db: Array<Race | Classes | Background> | null 
  tab: string
}>();
</script>

<template>
  <div v-if="db">
    <BackgroundTab v-if="tab === 'background'" :tab="tab" :db="db"/>
  </div>
</template>
  
<style scoped lang="scss">
img {
  background-color: black;
}
</style>