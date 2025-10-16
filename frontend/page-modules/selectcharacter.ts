import { registerPage } from "~/composables/pageRegistry";
import { createPlaceholderComponent } from "~/components/pages/common/createPlaceholder";

const SelectPlaceholder = createPlaceholderComponent(
  "Character Selection",
  "The multi-character selection screen is being migrated to Vue. It will be available again shortly."
);

registerPage("selectcharacter", SelectPlaceholder);
