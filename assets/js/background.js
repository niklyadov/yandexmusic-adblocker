/*
    Block Strm.Yandex.Ru (ad domain)
    Block Yandex Direct
    (c) 2020, anchovy — No Limits for YaMusic
    //github.com/Anchovys/yandexmusic-adblocker
*/
var correctUrlRegex = /^https?:\/\/(?:[^./?#]+\.)?music.yandex\.ru/;

const filter = {
    urls: [
        "*://awaps.yandex.net/*",
        "*://awaps.yandex.ru/*",
        "*://awaps.yandex.com/*",
        "*://awaps.yandex.kz/*",
        "*://awaps.yandex.ua/*",
        "*://awaps.yandex.by/*",
        "*://an.yandex.ru/*",
        "*://an.yandex.ua/*",
        "*://an.yandex.net/*",
        "*://an.yandex.com/*",
        "*://an.yandex.kz/*",
        "*://an.yandex.by/*",
        "*://googleadservices.com/*",
        "*://*.googleadservices.com/*",
        "*://strm.yandex.ru/*",
        "*://*.strm.yandex.ru/*",
        "*://banners.adfox.ru/*",
        "*://content.adfox.ru/*",
        "*://ads.adfox.ru/*",
        "*://jstracer.yandex.ru/*",
    ],
  }
  
const webRequestFlags = [
    'blocking',
];

window.chrome.webRequest.onBeforeRequest.addListener(
    page => {
      console.log('page blocked - ' + page.url);
  
      return {
        cancel: true,
      };
    },
    filter,
    webRequestFlags,
);