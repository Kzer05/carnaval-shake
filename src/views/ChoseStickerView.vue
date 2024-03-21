<script setup>
import StickerComponent from "@/components/StickerComponent.vue";
import { ref } from 'vue';

const ingredients = ref([
    "Vodka",
    "Rum",
    "Tequila",
    "Gin",
    "Whisky",
    "Vermute",
    "Triple Sec",
    "Licor de Café",
    "Cointreau",
    "Triple Sec",
    "Licor de Melão",
    "Licor de Amêndoa",
    "Licor de Pêssego",
    "Suco de Limão",
    "Suco de Laranja",
    "Suco de Cranberry",
    "Refrigerante de Cola",
    "Água Tônica",
]);
</script>

<template>
    <h2 id="event-person">Escolha um <span id="special">Ingrediente</span></h2>

    <RouterLink to="/send_message">
        <div id="ingredients">
            <StickerComponent v-for="(ingredient, index) in ingredients" :key="index" :ingredient="ingredient">
            </StickerComponent>
        </div>
    </RouterLink>
</template>


<style scoped>
#ingredients {
    padding: 20px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

#ingredients>* {
    max-width: 25vw;
    max-height: 25vw;
}

h2 {
    font-weight: 600;
    font-size: 28px;
    color: #828282;
    margin: 40px 0 0 0;
}

#special {
    color: #9C2E2E;
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

@media screen and (min-width: 768px) {
    
}
</style>
