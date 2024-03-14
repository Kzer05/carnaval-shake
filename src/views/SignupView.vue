<script setup>
import { RouterLink } from 'vue-router'
import Box from '@/components/BoxComponent.vue';
import DecoratedButton from "@/components/DecoratedButtonComponent.vue";
import DecoratedInput from "@/components/DecoratedInputComponent.vue";
import DecoratedCheckBox from "@/components/DecoratedCheckBoxComponent.vue";
import icon from "@/assets/icon.svg";
</script>

<template>
    <div id="container">

        <Box id="box" color="orange">
            <header id="header-box">
                <img id="icon" :src="icon" alt="Icone da taça">
                <p id="first-p">FAÇA O SEU CADASTRO EM</p>
                <h1>CARNAVAL SHAKE</h1>
            </header>

            <div id="inputs">
                <DecoratedInput label="Nome" type="text"></DecoratedInput>
                <DecoratedInput label="Email" type="emaill"></DecoratedInput>
                <DecoratedInput label="Senha" type="password"></DecoratedInput>
            </div>
            <div id="terms">
                <DecoratedCheckBox id="checkBox"></DecoratedCheckBox>
                <p>Concordo com os termos de serviço </p>
            </div>

            <div id="buttons">
                <RouterLink to="/event">
                    <DecoratedButton type="rectangle">Registrar-se</DecoratedButton>
                </RouterLink>
                <RouterLink to="/signin">
                    <DecoratedButton type="text">Já tenho uma conta</DecoratedButton>
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

#header-box {
    height: 20%;
}

img#icon {
    height: 80px;
    margin-top: 10px;
}

p#first-p {
    margin-bottom: 0;
}

h1 {
    margin: 0 auto 5% 0;
}


#inputs>* {
    margin-bottom: 10%;
}

#terms {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: left;
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
    padding: 20px;

}

@media screen and (min-width: 768px) {}
</style>
