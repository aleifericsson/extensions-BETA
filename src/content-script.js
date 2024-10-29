import { render } from "./content/qol.js";
import { generateRoot } from "./content/ext-qol.jsx";
import { handleMessages } from "./content/message.js";
import { updateSettingsToContent } from "./content/storage.js";

console.log("bruh")

const root = generateRoot()
render(document.body, root)

updateSettingsToContent()
handleMessages()
