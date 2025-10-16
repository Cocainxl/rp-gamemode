import { registerPage } from "~/composables/pageRegistry";
import { createPlaceholderComponent } from "~/components/pages/common/createPlaceholder";

const CreatorPlaceholder = createPlaceholderComponent(
  "Character Creator",
  "The character creator flow is being rebuilt in Vue. Use the legacy interface until this port is completed."
);

registerPage("creator", CreatorPlaceholder);
