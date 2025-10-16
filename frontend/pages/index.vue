<template>
  <div class="app">
    <ClientOnly>
      <component v-if="currentPage" :is="currentPage.component" v-bind="currentPage.props" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getRegisteredPage, useCurrentPage } from "~/composables/pageRegistry";

const modules = import.meta.glob("~/page-modules/*.ts", { eager: true });
void modules;

const page = useCurrentPage();

if (!page.value) {
  page.value = "auth";
}

const currentPage = computed(() => getRegisteredPage(page.value));
</script>

<style scoped>
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
