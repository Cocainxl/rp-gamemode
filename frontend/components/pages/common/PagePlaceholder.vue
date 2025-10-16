<template>
  <div class="placeholder">
    <UCard class="placeholder-card">
      <template #header>
        <div class="title">{{ title }}</div>
      </template>
      <p class="description">
        {{ description }}
      </p>
    </UCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped lang="scss">
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
}

.placeholder-card {
  width: min(720px, 100%);
  background: rgba(30, 41, 59, 0.92);
  color: white;
  text-align: center;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
}

.title {
  font-size: 1.75rem;
  font-weight: 600;
}

.description {
  font-size: 1rem;
  opacity: 0.85;
}
</style>
