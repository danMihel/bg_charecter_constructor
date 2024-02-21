<script setup lang="ts">
import { useBuildStore } from '@/stores/store';

const buildStore = useBuildStore();
const background = buildStore.getBackground
const race = buildStore.getRace
const classes = buildStore.getСlasses

</script>

<template>
  <div>
    <p>Происхождение: {{ background?.name || "По выбору" }}</p>
    <p>Расса: {{ race?.name || "По выбору" }}</p>
    <p> {{race?.description }}</p>
    <div>
      <span>Оружие: </span>
      <span v-for="item in race?.features.weapon">{{item}},&nbsp</span>
    </div>
    <p>Класс: {{ classes?.name || "По выбору" }}</p>
  </div>
</template>
  
<style scoped lang="scss">
img {
  background-color: black;
}
</style>