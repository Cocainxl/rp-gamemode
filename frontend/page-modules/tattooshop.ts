import { registerPage } from "~/composables/pageRegistry";
import { createPlaceholderComponent } from "~/components/pages/common/createPlaceholder";

const TattooPlaceholder = createPlaceholderComponent(
  "Tattoo Shop",
  "The tattoo customization UI is being rebuilt with Vue and Nuxt UI. Please hang tight while we finish the migration."
);

registerPage("tattooshop", TattooPlaceholder);
