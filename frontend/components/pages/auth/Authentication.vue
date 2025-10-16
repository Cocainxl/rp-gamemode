<template>
  <div class="auth-page">
    <component :is="currentComponent" @switch="setForm" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import AuthForm from "./components/AuthForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import './auth.scss'
const form = ref<"auth" | "reg">("auth");

const currentComponent = computed(() => (form.value === "auth" ? AuthForm : RegisterForm));

function setForm(next: "auth" | "reg") {
  form.value = next;
}
</script>

<style scoped lang="scss">
@import "./auth.scss";
</style>



