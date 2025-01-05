import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.baseURL,
  });
  axiosInstance.interceptors.request.use((config) => {
    const defaultQueryParams = {
      key: runtimeConfig.public.apiKey,
      lang: 'fr',
    };
    config.params = {
      ...(config.params || {}) ,
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
