import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/styles/init.scss"],
  components: [{ path: "~/components", pathPrefix: false }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/vars.scss" as *;'
        }
      }
    }
  }
});
