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
          v-model="password"
          type="password"
          name="auth_password"
          maxlength="74"
          placeholder="Password"
        />
        <button class="submit" type="submit" name="auth_submit">
          Login
          <img src="~/assets/images/auth/icons/login.svg" alt="login" />
        </button>
      </div>
    </form>
    <div class="footer">
      Don't have an account?
      <span @click="emit('switch', 'reg')">Register now!</span>
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
const password = ref("");
const authForm = ref<HTMLDivElement | null>(null);

const onSubmit = () => {
  if (!username.value || !password.value) {
    Notification.error("Fill out the forms!");
    return;
  }

  EventManager.emitServer("auth", "loginPlayer", {
    username: username.value,
    password: password.value
  });

  username.value = "";
  password.value = "";
};
</script>

