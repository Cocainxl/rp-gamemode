import { defineComponent, h } from "vue";
import PagePlaceholder from "~/components/pages/common/PagePlaceholder.vue";

export function createPlaceholderComponent(title: string, description: string) {
  return defineComponent({
    name: `${title.replace(/\s+/g, "")}Placeholder`,
    setup() {
      return () => h(PagePlaceholder, { title, description });
    }
  });
}
