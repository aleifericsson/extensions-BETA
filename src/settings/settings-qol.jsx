
function sendMessage(message){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
  });
  }

  export {sendMessage}