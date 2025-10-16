import { defineNuxtPlugin } from "#app";
import Notification from "~/utils/NotifyManager.util";

const typeColorMap: Record<string, string> = {
  success: "green",
  info: "blue",
  error: "red",
  warning: "amber",
  warn: "amber",
  dark: "slate",
  loading: "blue",
  promise: "blue"
};

export default defineNuxtPlugin(() => {
  if (!process.client) {
    return;
  }

  const toast = useToast();

  Notification.subscribe(({ type, message, skin }) => {
    if (type === "loading") {
      toast.add({
        title: message,
        icon: "i-ph-spinner",
        color: skin === "light" ? "gray" : typeColorMap[type] ?? "slate",
        timeout: 0
      });
      return;
    }

    toast.add({
      title: message,
      color: skin === "light" ? "gray" : typeColorMap[type] ?? "slate",
      timeout: 4000
    });
  });
});
