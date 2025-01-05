<template>
    <div class="">
        {{response}}
    </div>
  </template>

<script setup lang="ts">
    definePageMeta(
        {
            layout: 'navigation'
        }
    )

    const response = ref()

    onMounted( () => {
        response.value = useOneGameStore().game
    });
  </script>
  
<style scoped>

</style>