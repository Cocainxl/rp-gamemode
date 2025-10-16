<template>
  <div class="app-shell">
    <slot />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.1), transparent 60%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95));
  color: white;
  font-family: "Montserrat", sans-serif;
}
</style>
