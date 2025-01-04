<template>
    <div>
        Hello
        {{  data }}
    </div>
</template>

<script setup lang="ts">
    const data = ref(process.env.BASE_URL)
    const { $axios } = useNuxtApp()

    // onMounted(async () => {
    //     data.value = await $axios.get('/games')
    // });
</script>

<style scoped>
    
</style>