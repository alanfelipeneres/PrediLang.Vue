<script setup lang="ts">
import HelloWorld from '../Home/Message.vue'
</script>

<template>
  <header>
    <img alt="PrediLang logo" class="logo" src="@/assets/logo.svg" width="250" height="250" />

    <div class="wrapper">
      <HelloWorld msg="Faça você mesmo!" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
