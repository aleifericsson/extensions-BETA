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

export {setStore, getStore}