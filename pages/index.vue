<template>
    <div>
        ggggg
    </div>
</template>

<script setup lang="ts">
    definePageMeta(
        {
            layout: 'navigation'
        }
    )
    const { $axios } = useNuxtApp()
    const response = ref()

    onMounted(async () => {
        response.value = await $axios.get('/games') 
    });
</script>

<style scoped>
    
</style>