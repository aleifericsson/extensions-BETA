import { detect, find } from "./qol"

let popup = null;

function initControl(){
    detect(document, "keydown", handleKeyPresses)
}

const handleKeyPresses = (e) => {
    if (e.key === "ArrowUp") {
      } else if (e.key === "ArrowDown") {
      } else if (e.key === "ArrowLeft") {
      } else if (e.key === "ArrowRight") {
      }
}

