import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: nuxtApp.$config.public.BASE_URL,
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
