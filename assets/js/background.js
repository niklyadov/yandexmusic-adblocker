/*
    Block Strm.Yandex.Ru (ad domain)
*/
if(chrome.webRequest.onBeforeRequest.hasListener(function () { return {cancel: true} })) 
    chrome.webRequest.onBeforeRequest.removeListener( function () { return {cancel: true} });
chrome.webRequest.onBeforeRequest.addListener( function () { return {cancel: true}  }, {urls: ['*://strm.yandex.ru/*']}, ['blocking']);
