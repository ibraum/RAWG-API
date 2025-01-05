import { defineStore } from "pinia";

export const useOneGameStore = defineStore('game', (id) => {
    const game = ref([])
    const { $axios } = useNuxtApp()

    const fetchGame = async (id) => {
        try {
            const response = await $axios.get('/games/'+id??4)
            game.value = response
        } catch (error) {
            console.log(error)
        }
    }

    fetchGame(id)
    return { game }
});