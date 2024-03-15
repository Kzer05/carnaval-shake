<script setup>
import { ref } from 'vue';

const props = defineProps(["placeholder", "maxCharacters"])

const text = ref('');
const maxCharacters = props.maxCharacters ?? 1000;
const characterCount = ref(0);

const updateCharacterCount = () => {
    characterCount.value = text.value.length;
};
</script>

<template>
    <div class="textarea-container">
        <textarea class="custom-textarea" v-model="text" :placeholder="props.placeholder ?? ''" @input="updateCharacterCount"></textarea>
        <div class="character-count">
            {{ characterCount }} / {{ maxCharacters }}
        </div>
    </div>
</template>


<style scoped>
.textarea-container {
    position: relative;
}

.custom-textarea {
    width: -webkit-fill-available;
    height: 150px;
    padding: 10px;

    background-color: rgba(255, 255, 255, 0.15);
    color: white;

    border: none;
    border-radius: 5px;

    font-size: 15px;
    
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    resize: none;
    outline: 2px solid #ffffff65; 
}

.custom-textarea::placeholder {
    color: white;
}

.character-count {
    position: absolute;
    bottom: 10px;
    right: 5px;
    font-size: 12px;
    color: white;
}
</style>