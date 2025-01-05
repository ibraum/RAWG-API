<template>
    <div class="new_releases">
       <div>1</div>
       <div class="hero_releases">
            <div class="hero"></div>
            <div class="releases">
                <div class="new white_text">New Releases</div>
                <div class="new_games">
                    {{ response }}
                </div>
            </div>
       </div>
    </div>
</template>

<script setup lang="ts">

    definePageMeta(
        {
            layout: 'navigation'
        }
    )

    onMounted( () => {
        const response = useGamesStore()
    });
</script>

<style scoped>
    .new_releases {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 20px;
    }

    .hero {
        width: 100%;
        height: 400px;
        box-shadow: inset 10px -10px 60px black;
        border-radius: 15px;
    }

    .releases {
        padding-top: 20px;
    }

    @media screen and (max-width: 600px) {
        .new_releases {
            grid-template-columns: 1fr;
        }
    }
</style>