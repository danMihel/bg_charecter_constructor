<script setup lang="ts">

import { useBuildStore } from '@/stores/store';

const buildStore = useBuildStore();
</script>

<template>
  <div>
    <p>Класс: {{ buildStore.getBackground }}</p>
  </div>
</template>
  
<style scoped lang="scss">
img {
  background-color: black;
}
</style>