<script setup lang="ts">
import { useBuildStore } from '@/stores/store';

const buildStore = useBuildStore();
const background = buildStore.getBackground
const race = buildStore.getRace

</script>

<template>
  <div>
    <p>Класс: {{ background?.name || "По выбору" }}</p>
    <p>Расса: {{ race?.name || "По выбору" }}</p>
  </div>
</template>
  
<style scoped lang="scss">
img {
  background-color: black;
}
</style>