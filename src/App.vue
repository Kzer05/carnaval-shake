<script setup>
import { RouterLink, RouterView} from 'vue-router'
import Welcome from './views/WelcomeView.vue'

</script>

<template>
 <!-- 
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
 -->

  <RouterView></RouterView>
</template>

<style scoped>

</style>
