<template>
    <div>
        Hello
        {{  response }}
    </div>
</template>

<script setup lang="ts">
    const { $axios } = useNuxtApp()
    const response = ref()
    try {
    response.value = await $axios.get('/games', 
    {
        params: {
            key: '7ca69c1404024421a16145814ae40c77'
        }
    });
    console.log(response.value);
  } catch (error) {
    console.error('Error during API call:', error.message);
    console.error('Full error:', error);
  }

    // onMounted(async () => {
    //     data.value = 
    // });
</script>

<style scoped>
    
</style>