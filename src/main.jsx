import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import settings3d from './settings/settings3d.js'
import Settings from './settings/Settings.jsx'
import './main.css'
import fireship3d from './settings/fireship3d'
import { isDevMode } from './content/ext-qol.jsx'

if (!isDevMode){
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Settings />
  </StrictMode>,
)

}

//settings3d()
fireship3d()