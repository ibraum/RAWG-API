<template>
    <div class="new_releases">
       <div class="trending">
            <h2>Tendances</h2>
            <div class="trending_div_father">
                <template v-for="trend in trends" :key="trend.id">
                    <div class="tendance_games">
                        <div>{{ trend.name }}</div>
                    </div>
                </template>
            </div>
       </div>
       <div class="hero_releases"> 
                 <h2>&nbsp;</h2>
            <div class="hero">
                <div class="container_game_informations">
                    <div class="game_infos">
                        <h1 class="game_title">{{ game?.name }}</h1>
                        <p  class="game_description">
                            <p v-html="game?.description"></p>
                        </p>
                        <div class="more_show_details">
                            <NuxtLink to="">
                                <button class="show_details"><i class="pi pi-eye"></i></button>
                            </NuxtLink>

                            <NuxtLink to="">
                                <button class="more">more</button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <img :src="game?.background_image" alt="" class="img"/>
            </div>
            <div class="releases">
                <div class="new white_text">New Releases</div>
                <div class="new_games">
                    <template v-for="game in games" :key="game?.id">
                        <div class="game">
                            <img :src="game.background_image" alt="">
                            <div class="game_under_description">
                                {{ game.name }}
                            </div>
                        </div>
                    </template>
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

    const trends = ref(
        [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 1,
                name: 'Tir'
            },
            {
                id: 1,
                name: 'FPS'
            },
            {
                id: 1,
                name: 'RPG'
            }
        ]
    )

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

    const fetchGames = async (a: Number) => {
        try {
            const response = await $axios.get('/games?page_size='+a)
            games.value = response.data.results
        } catch (error) {
            console.log(error)
        }
    }

        let i = 0;
    onBeforeMount(() => {
        setInterval(() => {
            if (i === 4) i = 0;
            const popularGames = [
                'minecraft',
                'injustice-god-amons-us',
                'titan-quest',
                'fortnite',
            ];
            fetchGame(popularGames[i])
            i += 1;
        }, 10000)
    }),

    onMounted(() => {
        fetchGames(4)
        fetchGame('fortnite')
    });
</script>

<style scoped>
    .new_releases {
        width: 100%;
        height: 100%;
        padding-top: 10px;
        display: flex;
        gap: 20px;
        overflow-y: scroll;
    }

    .hero_releases{
        width: calc(100% - 250px);
    }

    .new_releases::-webkit-scrollbar{
        width: 0;
    }

    .hero {
        width: 100%;
        height: 350px;
        box-shadow: inset 10px -10px 60px black, -5px -5px 15px rgba(255, 255, 255, 0.091);
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .container_game_informations{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(30deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
        padding-left: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: end;
        justify-content: start;
    }

    .img {
        object-fit: cover;
        object-position: top center;
        width: 100%;
        height: 100%;
    }

    .more_show{
        margin-top: 10px;
    }

    .game_description {
        height: 100px;
        overflow: hidden;
    }

    .more_show_details{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .show_details{
        width: 40px;
        height: 40px;
        background-color: var(--black);
        border-radius: 5px;
        box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.3), 10px 10px 30px rgba(255, 255, 255, 0.3);
    }

    .more {
        height: 35px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 1);
        backdrop-filter: blur(10px);
        color: var(--black);
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
    }

    .releases {
        padding-top: 20px;
        min-height: 100px;
    }

    .new_games{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;
        gap: 20px;
        min-height: calc(100vh - 590px);
    }

    .game {
        flex-grow: 1;
        width: 200px;
        min-width: 200px;
        height: 400px;
        border-radius: 15px;
        box-shadow: inset 10px -10px 60px black, -10px -10px 30px rgba(255, 255, 255, 0.091);
        position: relative;
        overflow: hidden;
    }

    .game img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -100;
    }

    .game_under_description{
        z-index: 100;
        padding: 10px;
        background: linear-gradient(10deg, black,rgba(0, 0, 0, 0.232), rgba(255, 255, 255, 0));
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: end;
        font-size: 1.2rem;
    }

    .trending{
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 100%;
    }

    .trending_div_father{
        width: 100%;
        height: calc(100%);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .tendance_games{
        box-shadow: inset 10px -10px 60px rgba(0, 0, 0, 0.443);
        width: 100%;
        height: 25%;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tendance_games div{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        transition: all .1s .1s ease-in-out;
    }

    .tendance_games div:hover{
        font-weight: bold;
        background-color: black;
        color: rgb(255, 187, 0);
        cursor: pointer;
    }

    .hover_div{
        background-color: transparent;
    }

    @media screen and (max-width: 1000px) {
        .new_releases {
            margin-top: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            overflow: initial;
            min-height: 100vh;
        }

        .trending{
            min-height: 80px;
            max-height: 400px;
            height: initial;
            width: 100%;
            align-items: start;
            justify-content: center;
        }

        .trending_div_father{
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .tendance_games{
            width: 120px;
            height: 50px;
            flex-grow: 1;
        }

        .hero_releases{
            margin-bottom: 10px;
            width: 100%;
            min-height: 100vh;
        }
        .new_games{
            min-height: calc(100vh - 590px);
        }

        .hero {
            height: 400px;
        }
    }
</style>