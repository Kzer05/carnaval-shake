<script setup>
    import { RouterLink } from 'vue-router'

    const props = defineProps(["color", "backArrowTo"])
</script>

<template>
    <div :class="['box', {'orangeBox': color == 'orange'}]">
        <RouterLink v-if="backArrowTo" :to="backArrowTo">
            <div id="back"> </div>
        </RouterLink>
        <slot></slot>
    </div>
</template>

<style scoped>
    #back {
        position: absolute;
        padding: 12px;
        box-shadow: 2px -2px 0 1px #ffffff inset;
        border: solid transparent;
        border-width: 0 0 2px 2px;
        transform: rotate(45deg);
        cursor: pointer;
    }

    .box {
        background-color: #FBE3CD;
        color: #E98458;
        padding: 15px 8px;
        border-radius: 24px;
        margin: 0 auto;
        box-shadow: 0px 4px 29.5px -14px rgba(0, 0, 0, 0.342);
        text-align: center;
    }

    .orangeBox {
        background: linear-gradient(#F55B3A, #DA3030);
        color: white ;
    }
</style>