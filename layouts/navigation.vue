<template>
    <div class="app">
        <teleport to='body'>
            <div class="video">
                <video autoplay muted loop>
                    <source src="~/assets/videos/bg.mp4" type="video/mp4">
                </video>
            </div>
        </teleport>
        <div class="navbar">
            <nav class="nav_field">
                <ul>
                    <li><NuxtLink to=""><i class="pi pi-home"></i></NuxtLink></li>
                    <li><NuxtLink to=""><i class="pi pi-search"></i></NuxtLink></li>
                    <li><NuxtLink to=""><i class="pi pi-asterisk"></i></NuxtLink></li>
                </ul>
            </nav>
        </div>

        <div class="container_hero">
            <div class="container_child">
                <slot/>
            </div>
        </div>
                
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .app, .video{
        width: 100%;
        height: 100%;
    }

    .app{
        display: grid;
        grid-template-columns: 100px 1fr;
        z-index: 100;
    }

    .navbar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: rgb(36, 96, 148); */
    }

    .nav_field{
        padding: 15px  20px;
        height: 20%;
        width: 50px;
        border-radius: 30px;
        backdrop-filter: blur(50px);
        box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.2);
        position: relative;
        z-index: 100;
    }

    .nav_field::after{
        content: '';
        width: 105%;
        height: 105%;
        /* background-color: white; */
        position: absolute;
        top: -2.5%;
        left: -2.5%;
        z-index: -20;
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    ul li{
        color: var(--white);
    }

    .video{
        position: absolute;
        top: 50%;
        bottom: 0;
        left: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        z-index: -10;
    }

    .video video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .video video source {
        width: 100%;
    }

    /* ------------------------------------------------------- */

    .container_hero{
        width: 100%;
        height: 100%;
        padding: 10px 10px 10px 0;
    }

    .container_child{
        width: 100%;
        height: 100%;
        backdrop-filter: blur(50px);
        box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.25), 10px 10px 30px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        padding: 30px;
    }

    @media screen and (max-width: 1200px) {
        .app{
            display: grid;
            grid-template-rows: 100px 1fr;
            grid-template-columns: 1fr;
            z-index: 100;
        }

        .nav_field{
            padding: 15px  20px;
            display: flex;
            gap: 30px;
            width: 20%;
            height: 50px;
            border-radius: 30px;
            backdrop-filter: blur(50px);
            box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.2);
        }

        ul{
            flex-direction: row;
        }

        .container_hero{
            padding: 0px 10px 10px 10px;
        }
    }
</style>