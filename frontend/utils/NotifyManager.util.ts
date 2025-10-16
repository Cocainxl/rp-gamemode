type NotificationType =
  | "loading"
  | "promise"
  | "success"
  | "info"
  | "error"
  | "warning"
  | "warn"
  | "dark";

type NotificationSkin = "light" | "dark" | "colored";

type NotificationPayload = {
  type: NotificationType;
  message: string;
  skin: NotificationSkin;
};

type NotificationHandler = (payload: NotificationPayload) => void;

class Notify {
  private handlers = new Set<NotificationHandler>();

  subscribe(handler: NotificationHandler) {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  clear() {
    this.handlers.clear();
  }

  private emit(type: NotificationType, message: string, skin: NotificationSkin) {
    const payload: NotificationPayload = { type, message, skin };
    this.handlers.forEach((handler) => handler(payload));
  }

  show(type: NotificationType, message: string, skin: NotificationSkin = "dark") {
    this.emit(type, message, skin);
  }

  error(message: string, skin: NotificationSkin = "dark") {
    this.emit("error", message, skin);
  }

  loading(message: string, skin: NotificationSkin = "dark") {
    this.emit("loading", message, skin);
  }

  success(message: string, skin: NotificationSkin = "dark") {
    this.emit("success", message, skin);
  }

  info(message: string, skin: NotificationSkin = "dark") {
    this.emit("info", message, skin);
  }

  warning(message: string, skin: NotificationSkin = "dark") {
    this.emit("warning", message, skin);
  }

  warn(message: string, skin: NotificationSkin = "dark") {
    this.emit("warn", message, skin);
  }

  dark(message: string, skin: NotificationSkin = "dark") {
    this.emit("dark", message, skin);
  }
}

const Notification = new Notify();
export type { NotificationPayload, NotificationType, NotificationSkin };
export default Notification;
