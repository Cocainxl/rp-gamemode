import { defineNuxtPlugin } from "#app";
import EventManager from "~/utils/EventManager.util";
import Notification from "~/utils/NotifyManager.util";
import { useCurrentPage } from "~/composables/pageRegistry";

export default defineNuxtPlugin(() => {
  if (!process.client) {
    return;
  }

  const page = useCurrentPage();

  const setPage = (newPage: string | null) => {
    page.value = newPage;
  };

  EventManager.addHandler("system", "setPage", setPage);
  EventManager.addHandler("notify", "show", (data: { type: any; message: string; skin: any }) =>
    Notification.show(data.type, data.message, data.skin)
  );
  EventManager.stopAddingHandler("notify");
  EventManager.stopAddingHandler("system");
});
