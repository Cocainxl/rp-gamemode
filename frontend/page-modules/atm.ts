import { registerPage } from "~/composables/pageRegistry";
import { createPlaceholderComponent } from "~/components/pages/common/createPlaceholder";

const AtmPlaceholder = createPlaceholderComponent(
  "ATM",
  "The ATM interface is currently undergoing the Vue migration. Deposits and withdrawals will be back shortly."
);

registerPage("atm", AtmPlaceholder);
