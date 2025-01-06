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
            <div class="logo">
                <img src="~/assets/images/logo/logo.png" alt="">
            </div>
            <nav class="nav_field">
                <ul>
                    <li><NuxtLink to=""><i class="pi pi-home"></i></NuxtLink></li>
                    <li><NuxtLink to=""><i class="pi pi-search"></i></NuxtLink></li>
                    <li><NuxtLink to=""><i class="pi pi-asterisk"></i></NuxtLink></li>
                </ul>
            </nav>
            <div class="nothing"></div>
        </div>

        <div class="container_hero">
            <div class="container_child">
                <div class="search_like">
                    <div class="search">
                        <i class="pi pi-search"></i>
                        <form class="form">
                            <input type="text" placeholder="Search">
                        </form>
                    </div>
                    <div class="like">
                        <div class="true_like">
                            <i class="pi pi-heart"></i>
                            <div class="text">Like !</div>
                        </div>
                    </div>
                </div>
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
        justify-content: space-between;
        flex-direction: column;
        padding: 10px 0;
        gap: 20px;
        /* background-color: rgb(36, 96, 148); */
    }

    .logo{
        width: 80px;
        display: flex;
        align-items: start;
        justify-content: center;
        /* height: 20%; */
    }

    .logo img {
        width: 100%;
        /* height: 10px; */
    }

    .nav_field{
        padding: 15px  20px;
        height: 150px;
        width: 50px;
        border-radius: 30px;
        backdrop-filter: blur(50px);
        box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.15), 10px 10px 30px rgba(0, 0, 0, 0.1);
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
        box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.05), 10px 10px 30px rgba(0, 0, 0, 0.55);
        border-radius: 30px;
        padding: 30px;
        display: grid;
        grid-template-rows: 40px 1fr;
    }

    .search_like {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 250px 1fr;
    }

    .search{
        border-radius: 30px;
        box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 10px rgba(255, 255, 255, 0.01), 10px 10px 10px rgba(0, 0, 0, 0.25), -10px -10px 10px rgba(255, 255, 255, 0.01);
        display: flex;
        align-items: center;
        padding-left: 15px;
        color: rgb(134, 134, 134);
        gap: 10px;
    }

    .form input{
        background-color: transparent;
    }

    .like{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .true_like {
        padding: 5px 20px;
        background-color: var(--black);
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
        border-radius: 20px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }


    @media screen and (max-width: 1200px) {
        .app{
            display: flex;
            flex-direction: column;
            /* grid-template-rows: 175px 1fr;
            grid-template-columns: 1fr; */
            height: 100%;
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

    @media screen and (max-width: 600px) {

        body{
            overflow-x: hidden;
            overflow-y: scroll;
        }

        .nav_field{
            width: 40%;
        }

        .search_like{
            grid-template-columns: 1fr;
        }

        .like {
            display: none;
        }

        .container_child{
            padding: 10px;
        }
    }
</style>