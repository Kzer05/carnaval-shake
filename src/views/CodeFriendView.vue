<script setup>
import { RouterLink } from 'vue-router'
import Box from '@/components/BoxComponent.vue';
import DecoratedButton from "@/components/DecoratedButtonComponent.vue";
import DecoratedInput from "@/components/DecoratedInputComponent.vue";

</script>

<template>
    <div id="container">

        <Box id="box" color="orange">
            <h1>Encontre seus amgos com o código deles!</h1>

            <div id="inputs">
                <DecoratedInput label="Codigo do(a) amigo(a)" type="Text"></DecoratedInput>
            </div>

            <div id="buttons">
                <RouterLink to="/friend_event">
                    <DecoratedButton type="rectangle">Procurar</DecoratedButton>
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

#inputs {
    margin: 50px 20px;
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

@media screen and (min-width: 768px) {}
</style>
