import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: nuxtApp.$config.public.BASE_URL,
  });
  axiosInstance.interceptors.request.use((config) => {
    const defaultQueryParams = {
      key: process.env.API_KEY || '',
      lang: 'fr',
    };

    config.params = {
      ...config.params,
      ...defaultQueryParams,
    };

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
