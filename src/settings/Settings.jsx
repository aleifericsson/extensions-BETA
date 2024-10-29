import { useState } from "react";
import './Settings.css'
import { sendMessage } from "../content/message.js";
import { updateStorageToSettings } from "../content/storage.js";



export default function Settings({props}){
    let temp = false
    const all_settings = updateStorageToSettings()
    console.log(all_settings)
    if (all_settings.popup_visible !== undefined && all_settings.popup_visible !== null) {
        temp = all_settings.popup_visible
    }
    const [popup_visible, set_visible] = useState(temp);
    if (all_settings.detecting !== undefined && all_settings.detecting !== null) {
        temp = all_settings.detecting
    }
    const [detecting, set_detecting] = useState(temp);
    
    const togglePopup = (event) => {
        set_visible(!popup_visible)
        sendMessage({message:"toggle_popup", popup_visible: !popup_visible })
    }
    const toggleDetection = (event) => {
        set_detecting(!detecting)
        sendMessage({message:"toggle_detection", detecting: !detecting })
    }

    return(
        <>
            <div className="toggle-box">
                <input
                    type="checkbox"
                    id="show"
                    className="checkbox"
                    checked={popup_visible}
                    onChange={togglePopup}
                />                
                <label className="switch" htmlFor="show"></label>
                <div>Show Popup?</div>
            </div>
            <div className="toggle-box">
                <input
                    type="checkbox"
                    id="detect"
                    className="checkbox"
                    checked={detecting}
                    onChange={toggleDetection}
                />                
                <label className="switch" htmlFor="detect"></label>
                <div>{"Detect Popup? (Press P)"}</div>
            </div>
        </>
    )
}
