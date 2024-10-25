import { render } from "./content/qol.js";
import { generateRoot, injectReact, removeReact } from "./content/ext-qol.jsx";
import Popup from "./content/Popup.jsx";

console.log("bruh")

let popup_pos = {x: 300, y: 500}

const root = generateRoot()
render(document.body, root)

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message == "toggle_popup"){ //{message, popup_visible}
        if(message.popup_visible){
            injectReact(Popup, root,{startx:popup_pos.x,starty:popup_pos.y})
        }
        else{
            removeReact()
        }
    }
});

export {root, popup_pos}
