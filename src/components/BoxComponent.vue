<script setup>
    const props = defineProps(["color"])
</script>

<template>
    <div :class="['box', {'orangeBox': color == 'orange'}]">
        <slot></slot>
    </div>
</template>

<style>
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