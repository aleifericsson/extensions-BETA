import React from 'react';
import ReactDOM from 'react-dom/client';
import { addClass, addClasses, create, write } from './qol.js';

let root_render = null

function injectReact(Component, root_ele, props={}) {
    if (!root_render){
      root_render = ReactDOM.createRoot(root_ele)
    }
    root_render.render(
      <React.StrictMode>
        <Component props={props}/>
      </React.StrictMode>,
    )
  }

function removeReact(){
  if(root_render){  
    root_render.unmount()
    root_render = null
  }
}

function generateRoot(){  
  const rot = create("div")
  addClasses(rot, ["react-root","plus-ample"])
  return rot
}


export {injectReact, removeReact, generateRoot}