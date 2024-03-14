<script setup> 
    const props = defineProps(["type", 'textColor'])
</script>

<template>
    <button v-if="props.type != 'text'" :class="['button', {'rectangleButton': type == 'rectangle'}]"><slot></slot></button>
    <a v-if="props.type == 'text'" class="text-button" :style="{color: textColor ?? '#fff'}"><slot></slot></a>
</template>


<style scoped>
.button {
    font-weight: 400;
}


.button {
    color: white;
    border: none;
    padding: 20px 0px;
    width: 80%;
    border-radius: 112px;
    background: linear-gradient(180deg, #DA3030 0%, #F55B3A 100%);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    font-size: 20px;
    transition: .2s;
    margin-top: 10px;
    cursor: pointer;
}

.text-button {
    width: 100%;
    padding: 10px;
    margin: 10px;
}

.rectangleButton {
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25);

}

.button:hover,
a:hover {
    filter: contrast(0.8);
}

</style>