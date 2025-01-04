import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: config.public.baseURL,
  });
  axiosInstance.interceptors.request.use((config) => {
    const defaultQueryParams = {
      key: config.apiKey,
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
