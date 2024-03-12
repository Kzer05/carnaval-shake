<script setup>
import { RouterLink } from 'vue-router'
import Box from '@/components/BoxComponent.vue';
import DecoratedButton from "@/components/DecoratedButtonComponent.vue";
import DecoratedInput from "@/components/DecoratedInputComponent.vue";
import icon from "@/assets/icon.svg";
</script>

<template>
    <div id="container">

        <Box id="box" color="orange">
            <img id="icon" :src="icon" alt="Icone da taça">
            <p id="first-p">FAÇA O SEU CADASTRO EM</p>
            <h1>CARNAVAL SHAKE</h1>


            <div id="inputs">
                <DecoratedInput label="Email" type="emaill"></DecoratedInput>
                <DecoratedInput label="Senha" type="password"></DecoratedInput>
            </div>

            <div id="buttons">
                <DecoratedButton type="rectangle">Entrar</DecoratedButton>
                <DecoratedButton type="text">Esqueci minha senha!</DecoratedButton>
                <RouterLink to="/signup">
                    <DecoratedButton type="text">Não tenho uma conta!</DecoratedButton>
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

img#icon {
    height: 90px;
    margin-top: 10px;
}

p#first-p {
    margin-bottom: 0;
}

h1 {
    margin: 0 auto 50px 0;
}


#inputs>* {
    margin-bottom: 50px;
}

#terms {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

#terms #checkBox {
    position: relative;
    top: -5px;
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

@media screen and (min-width: 768px) {}
</style>
