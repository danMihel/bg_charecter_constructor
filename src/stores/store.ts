import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
export const useBuildStore = defineStore('buildStore', () => {
  
  const background = ref('По выбору')
  const race = ref('')

  const getBackground = computed(() => {
    return background.value
  })

  const setBackground = (value: string | undefined) => {
    if(value === undefined) return
    background.value = value
  }

  return { 
    getBackground, 
    setBackground 
  }
})