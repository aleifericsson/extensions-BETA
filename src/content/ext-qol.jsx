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

function isRendered(){
  return root_render ? true : false
}

function sendMessage(message){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
});
}

const setStore = (key_obj) => { //key_obj example: {detecting: false}
    chrome.storage.local.set(key_obj).then(() => {
        //console.log("Value is set");
    });    
}

const getStore = (key) =>{ //key example: "detecting"
    chrome.storage.local.get([key]).then((result) => {
        //console.log("Value currently is " + result.key);
    });
}


export {injectReact, removeReact, generateRoot, sendMessage, isRendered, setStore, getStore}