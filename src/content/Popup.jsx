//ONSCREEN POPUP NOT THE SETTINGS POPUP

import { useEffect, useState } from 'react'
import { removeReact } from './ext-qol.jsx'
import './popup.css'
import { detect, find } from './qol.js'

const detecting = false;
const speed = 3;

export default function Popup({props}){ //props: {startx, starty}
    const [x, setX] = useState(props.startx)
    const [y, setY] = useState(props.starty)
    const [classes, setClasses] = useState("popup poop")

    const closePopup = () =>{
        removeReact()
    }

    const setPos = (x,y) => {
        setX(x)
        setY(y)
    }

    const getPos = () => {
        return {x, y}
    }

    const handleKeyPresses = (e) => {
        if (e.key === "ArrowUp") {
            setY((y)=>{return y-speed})
          } else if (e.key === "ArrowDown") {
            setY((y)=>{return y+speed})
          } else if (e.key === "ArrowLeft") {
            setX((y)=>{return y-speed})
          } else if (e.key === "ArrowRight") {
            setX((y)=>{return y+speed})
          }
    }
    useEffect(() => {
        detect(document, "keydown", handleKeyPresses)
    }, []); 

    return(
        <div className={classes}style={{left:x,top:y}}>
            <div className="top-bar poop">
                <img className="close-icon" onClick={closePopup} src={ chrome.runtime.getURL('images/close.png')}></img>
            </div>
            <div className='popup-content'>
                Popup
            </div>
        </div>
    )
}