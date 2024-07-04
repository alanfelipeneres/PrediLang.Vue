<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h4>
      Insights futuros. <br />
      Decisões inteligentes.
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h4 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h4 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h4 {
    text-align: left;
  }
}
</style>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
}

.welcome-items {
  display: flex;
  flex-direction: column;
}
</style>
