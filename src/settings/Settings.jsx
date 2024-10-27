import { useState } from "react";
import { sendMessage } from "../content/ext-qol";
import './Settings.css'

export default function Settings({props}){
    const [popup_visible, set_visible] = useState(false);
    const [detecting, set_detecting] = useState(false);
    
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
