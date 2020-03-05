/*
    Block Strm.Yandex.Ru (ad domain)
    (c) 2020, anchovy — No Limits for YaMusic
    //github.com/Anchovys/yandexmusic-adblocker
*/
var correctUrlRegex = /^https?:\/\/(?:[^./?#]+\.)?music.yandex\.ru/;

if(chrome.webRequest.onBeforeRequest.hasListener(function () { return {cancel: true} })) 
{
    chrome.webRequest.onBeforeRequest.removeListener( function () { return {cancel: true} });
}
chrome.webRequest.onBeforeRequest.addListener( function () { return {cancel: true}  }, {urls: ['*://strm.yandex.ru/*']}, ['blocking']);