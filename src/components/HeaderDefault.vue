<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="logo">
      <img alt="PrediLang logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
    </div>
    <nav class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cenario">Cenário</a></li>
        <li><a href="/template">Template</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.logo h1 {
  margin: 0;
}

.nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-left: 20px;
}

.nav a {
  text-decoration: none;
  transition: color 0.3s;
}

.nav a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .nav ul {
    flex-direction: column;
    align-items: center;
  }

  .nav li {
    margin-left: 0;
    margin-top: 10px;
  }
}

/* Light mode */
@media (prefers-color-scheme: light) {
  .header {
    background-color: #fff;
    color: #000;
  }
  .nav a {
    color: #000;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .header {
    background-color: #181818;
    color: #fff;
  }
  .nav a {
    color: #fff;
  }
}
</style>
