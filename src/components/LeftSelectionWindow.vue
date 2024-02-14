<script setup lang="ts">
import type {Race, Classes, Background} from '@/types/types.ts'
import  SelectionTable from '@/components/SelectionTable.vue';

defineProps<{
  db: Array<Race | Classes | Background> | null 
  tab: string
}>();
</script>

<template>
  <div v-if="db">
    <SelectionTable v-if="tab === 'background' || 'race'" :tab="tab" :db="db"/>
  </div>
</template>
  
<style scoped lang="scss">
img {
  background-color: black;
}
</style>