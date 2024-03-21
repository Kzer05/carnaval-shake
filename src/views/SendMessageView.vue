<script setup>
import { RouterLink } from 'vue-router'
import Box from '@/components/BoxComponent.vue';
import DecoratedButton from "@/components/DecoratedButtonComponent.vue";
import DecoratedInput from "@/components/DecoratedInputComponent.vue";
import DecoratedTextarea from "@/components/DecoratedTextareaComponent.vue";
import StickerComponent from "@/components/StickerComponent.vue";

</script>

<template>
    <div id="container">

        <Box id="box" color="orange">
            <h1>Deixe sua mensagem para Caruzo</h1>

            <RouterLink to="/chose_sticker">
                <StickerComponent id="sticker"></StickerComponent>
            </RouterLink>
            <div id="inputs">
                <DecoratedInput label="Apelido" type="Text"></DecoratedInput>
                <DecoratedTextarea placeholder="Deixe sua mensagem aqui..." max-characters="200"></DecoratedTextarea>
            </div>

            <div id="buttons">
                <RouterLink to="/friend_event">
                    <DecoratedButton type="rectangle">DEIXAR MENSAGEM</DecoratedButton>
                </RouterLink>
            </div>
        </Box>
    </div>
</template>

<style scoped>
#container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

#box {
    stroke: white;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
}

h1 {
    font-size: 20px;
    margin: 10px auto 20px 0;
}

#sticker {
    margin: 0 auto 20px auto
}

#inputs {
    margin-bottom: 20px;
}

#inputs:first-child {
    margin-bottom: 50px;
}

#buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#buttons a {
    color: white !important;
}

@media screen and (min-width: 768px) {
    #box {
        width: 30%;
    }
}
</style>
