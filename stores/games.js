import { defineStore } from "pinia";

export const useGamesStore = defineStore('games', () => {
  const { $axios } = useNuxtApp();
  const games = ref([]);

  const fetchGames = async () => {
    try {
      const response = await $axios.get('/games');
      games.value = response;
    } catch (error) {
      console.error('Erreur lors de la récupération des jeux:', error);
    }
  };

  fetchGames()
  return { games};
});
