<script setup>
import { RouterLink } from 'vue-router'
import DecoratedButton from '@/components/DecoratedButtonComponent.vue';
import orange from '@/assets/stickers/laranja.png';


</script>

<template>
    <div id="event">
        <div id="div-image-event">
            <img id="big-image-event" src="../assets/cup.png" alt="Taça">
            <div id="ingredients">
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
                <div class="ingredient">
                    <img :src="orange" alt="Laranja">
                    <p>Kzer0</p>
                </div>
            </div>
        </div>

        <div id="content">
            <p id="event-quantity">1/20</p>
            <p id="event-person">DRINK DE <span id="person">Caruzo</span></p>
        </div>

        <div id="buttons">
            <DecoratedButton v-if="!isFriend" type="filled">COMPARTILHAR DRINK</DecoratedButton>

            <RouterLink v-if="isFriend" to="/chose_sticker">
                <DecoratedButton type="filled">DEIXAR UM INGREDIENTE</DecoratedButton>
            </RouterLink>
        </div>


        <footer> © 2024 Revigorah - All Rights Reserved.</footer>
    </div>
</template>


<style scoped>
#ingredients {
    position: absolute;
    padding: 80px;
    top: 0;
    left: 0;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

#ingredients:has(.ingredient:nth-child(2)) .ingredient:nth-child(1),
#ingredients:has(.ingredient:nth-child(2)) .ingredient:nth-child(2) {
    margin: 0 5%;
}

.ingredient img {
    width: 13vw;
}

.ingredient p {
    font-size: 25px;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 15px black;
}

/* #div-image-event {
    display: flex;
    height: 35vh;
    flex-direction: column;
    align-items: center;
} */

p {
    margin: 0;
}

p#event-quantity {
    font-size: 25px;
    font-weight: 900;
    color: #828282;
}

p#event-person {
    font-weight: 600;
    font-size: 35px;
    color: #828282;
}

#person {
    color: #9C2E2E;
}

#div-image-event {
    position: relative;
}

#big-image-event {
    height: 60vh;
    margin: 10% 0 0 0;
    max-width: 100%;
    object-fit: cover;
}

#reflex-big-image-event {
    object-fit: cover;
    height: 100%;
    max-width: 100%;
    position: relative;
    top: -25%;
    z-index: -1;
    transform: rotate(180deg);
    filter: brightness(0) blur(10px) opacity(0.2);
    mask: linear-gradient(to bottom, transparent, transparent, white);

}

#buttons {
    display: flex;
    flex-direction: column;
    height: 15vh;
    align-items: center;
    justify-content: center;
}

#buttons .button {
    display: block;
    margin: 2% auto;
}

footer {
    color: white;
}

@media only screen and (max-height: 670px) {
    #buttons {
        height: 25vh;
        justify-content: center;
    }

    footer {
        display: none;
    }
}


@media screen and (min-width: 768px) {
    #event {
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    #ingredients {
        padding: 15% 35%;   
    }

    #ingredients:has(.ingredient:nth-child(3)) .ingredient:nth-child(1),
    #ingredients:has(.ingredient:nth-child(3)) .ingredient:nth-child(2) {
        margin: 0 5%;
    }

    .ingredient img {
        width: 4vw;
    }

    .ingredient p {
        font-size: 25px;
        color: rgb(255, 255, 255);
        text-shadow: 1px 1px 15px black;
    }

    #div-image-event {
        height: 100%;
        display: flex;
        justify-content: center;
    }

    #reflex-big-image-event {
        display: none;
    }

    #buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: min-content;
    }
}
</style>