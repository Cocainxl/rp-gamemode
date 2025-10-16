import type { Component } from "vue";

type RegisteredPage = {
  component: Component;
  props?: Record<string, any>;
};

const registry = new Map<string, RegisteredPage>();

export function registerPage<T extends RegisteredPage["props"] = Record<string, any>>(
  name: string,
  component: Component,
  props?: T
): void {
  if (registry.has(name)) {
    if (import.meta.dev) {
      console.warn(`Page '${name}' is already registered, skipping duplicate registration.`);
    }
    return;
  }

  registry.set(name, { component, props });
}

export function getRegisteredPage(name: string | null): RegisteredPage | null {
  if (!name) {
    return null;
  }

  return registry.get(name) ?? null;
}

export function useCurrentPage() {
  return useState<string | null>("ui-current-page", () => null);
}
