import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const projects = ref([])

  const addProject = (project) => {
    projects.value.push(project)
  }
  return {
    projects,
    addProject
  }
})
