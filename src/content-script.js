import { detect, render } from "./content/qol.js";
import { generateRoot, injectReact, isRendered, removeReact } from "./content/ext-qol.jsx";
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
    if (message.message == "toggle_detection"){ //{message, detecting}  
        const popup_detect = (e) => {
            if (e.key === "p") {
                isRendered() ? removeReact() : injectReact(Popup, root,{startx:popup_pos.x,starty:popup_pos.y})
            }
        }
        if(message.detecting){
            detect(document, "keydown", popup_detect)
        }
        else{
            undetect(document, "keydown", popup_detect)
        }
    }
});

export {root, popup_pos}
