import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import type { Race, Classes, Background } from '@/types/types.ts'
export const useBuildStore = defineStore('buildStore', () => {

  const background = ref<Background | null>(null)
  const race = ref<Race | null>(null)
  const classes = ref<Classes | null>(null)

  const getBackground = computed(() => {
    return background
  })

  const getRace = computed(() => {
    return race
  })
  const getСlasses = computed(() => {
    return classes
  })

  const setBackground = (value: Background) => {
    if (value === undefined) return
    background.value = value
  }

  const setRace = (value: Race) => {
    if (value === undefined) return
    race.value = value
  }
  
  const setСlasses = (value: Race) => {
    if (value === undefined) return
    classes.value = value
  }

  return {
    getBackground,
    getRace,
    getСlasses,
    setBackground,
    setRace,
    setСlasses
  }
})