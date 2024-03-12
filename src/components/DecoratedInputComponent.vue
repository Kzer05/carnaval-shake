<script setup>
import { ref } from 'vue';

const props = defineProps(['label', 'type']
)
const value = ref('');
const isFocused = ref(false);

</script>


<template>
    <div class="custom-input">
        <label :class="{ 'active': isFocused || value }">{{ props.label }}</label>
        <input v-model="value" @focus="isFocused = true" @blur="isFocused = false" :type="props.type ?? 'text'" />
        <span class="underline"></span>
    </div>
</template>


<style scoped>
.custom-input {
    position: relative;
    margin-bottom: 20px;
}

label {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    pointer-events: none;
}

input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    padding: 5px 0;
    width: 100%;
    outline: none;
    color: white;
}

.underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #ffffff;
    transition: all 0.3s ease;
}

.active {
    transform: translateY(-20px) translateX(0px);
    font-size: 12px;
    color: #ffffff;
}
</style>