import { injectReact, isRendered, removeReact } from "./ext-qol";
import Popup from "./Popup.jsx";
import { detect, undetect } from "./qol";

let popup_pos = {x: 300, y: 500}

const setStore = (key_obj) => { //key_obj example: {detecting: false}
    chrome.storage.local.set(key_obj).then(() => {
        //console.log("Value is set");
    });    
}

const getStore = (key) =>{ //key example: ["detecting"]
    return new Promise(resolve => {
        chrome.storage.local.get(key).then((result) => {
            resolve(result.key)
            //console.log("Value currently is " + result.key);
        });
    })
}


const popup_detect = (e) => {
    if (e.key === "p") {
        isRendered() ? removeReact() : injectReact(Popup, getRoot(),{startx:popup_pos.x,starty:popup_pos.y})
    }
}

const updateSettings = () => {
    console.log("stor")
    getStore({detecting:''}).then((result) => {  
        console.log(result)
        if (result !== undefined){
            result ? detect(document, "keydown", popup_detect) : undetect(document, "keydown", popup_detect)
        }
    })
}

export {setStore, getStore, updateSettings}