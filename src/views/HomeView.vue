<script setup lang="ts">
import Home from '../components/Home/Home.vue'

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.remove('body-flow')
  document.body.classList.add('body-center')
})
</script>

<template>
  <main>
    <Home />
  </main>
</template>
