import { reactive } from 'vue'

export const store = reactive({
  name: 'store',
  favoritesCharacters: [] as any[]
})
