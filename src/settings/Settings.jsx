import { useState } from "react";
import { sendMessage } from "./settings-qol.jsx";
import './Settings.css'

export default function Settings({props}){
    const [popup_visible, set_visible] = useState(false);
    
    const togglePopup = (event) => {
        set_visible(!popup_visible)
        sendMessage({message:"toggle_popup", popup_visible: !popup_visible })
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
        </>
    )
}
