import { getRoot, injectReact, isRendered, removeReact } from "./ext-qol";
import Popup from "./Popup.jsx";
import { setStore, updateSettings } from "./storage.js";

let popup_pos = {x: 300, y: 500}

function sendMessage(message){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
  });
  }

const handleMessages = () => {
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message == "toggle_popup"){ //{message, popup_visible}
        if(message.popup_visible){
            injectReact(Popup, getRoot(),{startx:popup_pos.x,starty:popup_pos.y})
        }
        else{
            removeReact()
        }
    }
    if (message.message == "toggle_detection"){ //{message, detecting}  
        if (message.detecting){
            setStore({"detecting":true})
            console.log("!!")
        }
        else{
            setStore({"detecting":false})
            console.log("??")
        }
    }
    updateSettings()
});

}

export {sendMessage, handleMessages}