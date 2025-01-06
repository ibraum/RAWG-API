import { defineStore } from "pinia";

export const useOneGameStore = defineStore('game', () => {
    const game = ref([])
    const { $axios } = useNuxtApp()

    const fetchGame = async (id) => {
        try {
            const response = await $axios.get('/games/'+id)
            game.value = response
        } catch (error) {
            console.log(error)
        }
    }

    return { game }
});