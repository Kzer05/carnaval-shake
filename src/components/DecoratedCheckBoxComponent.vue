<script setup>
import { ref } from 'vue';

const isChecked = ref(false);
</script>

<template>
    <label class="custom-checkbox">
        <input type="checkbox" v-model="isChecked" class="checkbox-input" />
        <span class="checkbox-custom"></span>
    </label>
</template>


<style scoped>
.custom-checkbox {
    position: relative;
    display: inline-block;
    width: 20px;
    /* Largura do checkbox */
    height: 20px;
    /* Altura do checkbox */
}

.checkbox-input {
    position: absolute;
    opacity: 0;
}

.checkbox-custom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    /* Cor de fundo transparente */
    border: 4px solid white;
    /* Borda branca */
    border-radius: 10px;
    /* Raio de borda baixo */
}

.checkbox-custom::after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    /* Largura do marcador */
    height: 8px;
    /* Altura do marcador */
    background-color: white;
    /* Cor do marcador */
    border-radius: 50%;
    /* Círculo como marcador */
}

.checkbox-input:checked~.checkbox-custom::after {
    display: block;
}
</style>