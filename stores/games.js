import { defineStore } from "pinia";

export const useGamesStore = defineStore('games', () => {
  const { $axios } = useNuxtApp();
  const games = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchGames = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await $axios.get('/games');
      games.value = response.data;
    } catch (err) {
      error.value = err.message || 'An error occurred while fetching games.';
    } finally {
      loading.value = false;
    }
  };

  return { games, loading, error, fetchGames };
});
