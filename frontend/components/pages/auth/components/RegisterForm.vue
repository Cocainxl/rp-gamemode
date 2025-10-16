<template>
  <div class="authform" ref="authForm">
    <form autocomplete="off" @submit.prevent="onSubmit">
      <div class="content">
        <input
          v-model="username"
          class="usernameInput"
          type="text"
          name="auth_username"
          maxlength="32"
          placeholder="Username"
          autocomplete="off"
        />
        <input
          v-model="email"
          type="email"
          name="auth_email"
          maxlength="32"
          placeholder="Email"
          autocomplete="off"
        />
        <input
          v-model="password"
          type="password"
          name="auth_password"
          maxlength="74"
          placeholder="Password"
        />
        <input
          v-model="confirmPassword"
          type="password"
          name="auth_confirm_password"
          maxlength="74"
          placeholder="Confirm Password"
        />
        <button class="submit" type="submit" name="auth_submit">
          Register
          <img src="~/assets/images/auth/icons/register.svg" alt="register" />
        </button>
      </div>
    </form>
    <div class="footer">
      Already have an account?
      <span @click="emit('switch', 'auth')">Login now!</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EventManager from "~/utils/EventManager.util";
import Notification from "~/utils/NotifyManager.util";

const emit = defineEmits<{
  (event: "switch", value: "auth" | "reg"): void;
}>();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const authForm = ref<HTMLDivElement | null>(null);

const onSubmit = () => {
  if (!username.value || !password.value || !email.value || !confirmPassword.value) {
    Notification.error("Fill out the forms!");
    return;
  }

  EventManager.emitServer("auth", "register", {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  });

  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>
