import { registerPage } from "~/composables/pageRegistry";
import { createPlaceholderComponent } from "~/components/pages/common/createPlaceholder";

const SettingsPlaceholder = createPlaceholderComponent(
  "Settings",
  "The in-game settings menu is in the middle of a Vue makeover. Configuration options will be restored once porting concludes."
);

registerPage("settings", SettingsPlaceholder);
