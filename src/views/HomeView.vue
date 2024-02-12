<script setup lang="ts">
import Constructor from '../components/Constructor.vue'

import { useBuildStore } from '@/stores/store';
const store = useBuildStore();
</script>

<template>
  <main>
    {{ store }}
    <h1>BALDUR’S GATE 3 BUILD PLANNER</h1>
    <Constructor/>
  </main>
</template>
<style lang="scss" scoped>
</style>
