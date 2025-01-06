<template>
    <div class="new_releases">
       <div class="trending">
            <h2>Tendances</h2>
            <div class="trending_div_father">
                <div class="tendance_games">1</div>
                <div class="tendance_games">2</div>
                <div class="tendance_games">3</div>
                <div class="tendance_games">4</div>
            </div>
       </div>
       <div class="hero_releases"> 
        {{ game }} 
                 <h2>&nbsp;</h2>
            <div class="hero">
                <img :src="game?.background_image" alt="">
                 <!-- {{ games }} -->
            </div>
            <div class="releases">
                <div class="new white_text">New Releases</div>
                <div class="new_games">
                    <!-- {{ game }} -->
                      <div class="game">1</div>
                      <div class="game">2</div>
                      <div class="game">3</div>
                      <div class="game">4</div>
                </div>
            </div>
       </div>
    </div>
</template>

<script setup lang="ts">
    const { $axios } = useNuxtApp()
    definePageMeta(
        {
            layout: 'navigation'
        }
    )

    interface Game {
        id: number;
        slug: string;
        name: string;
        name_original: string;
        description: string;
        metacritic: number | null;
        metacritic_platforms: any[];
        released: string;
        tba: boolean;
        updated: string;
        background_image: string;
        background_image_additional: string;
        website: string;
        rating: number;
        rating_top: number;
        ratings: Rating[];
        reactions: Record<string, number>;
        added: number;
        added_by_status: AddedByStatus;
        playtime: number;
        screenshots_count: number;
        movies_count: number;
        creators_count: number;
        achievements_count: number;
        parent_achievements_count: number;
        reddit_url: string;
        reddit_name: string;
        reddit_description: string;
        reddit_logo: string;
        reddit_count: number;
        twitch_count: number;
        youtube_count: number;
        reviews_text_count: number;
        ratings_count: number;
        suggestions_count: number;
        alternative_names: string[];
        metacritic_url: string;
        parents_count: number;
        additions_count: number;
        game_series_count: number;
        user_game: any;
        reviews_count: number;
        saturated_color: string;
        dominant_color: string;
        parent_platforms: ParentPlatform[];
        platforms: PlatformDetail[];
        stores: StoreDetail[];
        developers: Developer[];
        genres: Genre[];
        tags: Tag[];
        publishers: Publisher[];
        esrb_rating: EsrbRating | null;
        clip: any;
        description_raw: string;
    }

    interface Rating {
        id: number;
        title: string;
        count: number;
        percent: number;
    }

    interface AddedByStatus {
        yet: number;
        owned: number;
        beaten: number;
        toplay: number;
        dropped: number;
    }

    interface ParentPlatform {
        platform: Platform;
    }

    interface Platform {
        id: number;
        name: string;
        slug: string;
    }

    interface PlatformDetail {
        platform: PlatformWithDetails;
        released_at: string | null;
        requirements: Requirements;
    }

    interface PlatformWithDetails {
        id: number;
        name: string;
        slug: string;
        image: string | null;
        year_end: number | null;
        year_start: number | null;
        games_count: number;
        image_background: string;
    }

    interface Requirements {
        minimum?: string;
        recommended?: string;
    }

    interface StoreDetail {
        id: number;
        url: string;
        store: Store;
    }

    interface Store {
        id: number;
        name: string;
        slug: string;
        domain: string;
        games_count: number;
        image_background: string;
    }

    interface Developer {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
    }

    interface Genre {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
    }

    interface Tag {
        id: number;
        name: string;
        slug: string;
        language: string;
        games_count: number;
        image_background: string;
    }

    interface Publisher {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
    }

    interface EsrbRating {
        id: number;
        name: string;
        slug: string;
    }

    const games  = ref<Game[]>()
    const game  = ref<Game>()

    const fetchGame = async (id: Number | String) => {
        try {
            const response = await $axios.get('/games/'+id)
            game.value = response.data
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        fetchGame(39999)
    });
</script>

<style scoped>
    .new_releases {
        width: 100%;
        height: 100%;
        padding-top: 10px;
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 20px;
        overflow-y: scroll;
    }

    .new_releases::-webkit-scrollbar{
        width: 0;
    }

    .hero {
        width: 100%;
        height: 400px;
        box-shadow: inset 10px -10px 60px black, -5px -5px 15px rgba(255, 255, 255, 0.091);
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero img {
        object-fit: cover;
        object-position: top center;
        width: 100%;
        height: 100%;
    }

    .releases {
        padding-top: 20px;
    }

    .new_games{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;
        gap: 20px;
        height: calc(100vh - 590px);
    }

    .game {
        width: 22%;
        min-width: 250px;
        height: 100%;
        border-radius: 15px;
        box-shadow: inset 10px -10px 60px black, -10px -10px 30px rgba(255, 255, 255, 0.091);
    }

    .trending{
        display: flex;
        flex-direction: column;
        /* gap: 10px; */
    }

    .trending_div_father{
        width: 100%;
        height: calc(100%);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .tendance_games{
        box-shadow: inset 10px -10px 60px black;
        width: 100%;
        height: 25%;
        border-radius: 10px;
    }

    @media screen and (max-width: 1000px) {
        .new_releases {
            margin-top: 10px;
            display: flex;
            flex-direction: column-reverse;
            min-height: 100vh;
        }

        .hero_releases{
            margin-bottom: 10px;
            min-height: 100vh;
        }
    }
</style>