/*
    PopUp dispatcher
    (c) 2020, anchovy — No Limits for YaMusic
    //github.com/Anchovys/yandexmusic-adblocker
*/
var background = chrome.extension.getBackgroundPage();
var loaded = true;

function onError(error) 
{
    console.error(`Error: ${error}`);
}

/*
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse)
{
    if(message.data == "Loaded")
    {
        loaded = true;
    }
    
    sendResponse({
        data: "Ok"
    }); 
});
*/
document.addEventListener('DOMContentLoaded', function()
{
    chrome.tabs.getSelected(null, function(tab)
    {
        var statusBar = document.getElementById('status-bar');
        var statusImg = document.getElementById('status-img');

        if (background.correctUrlRegex.test(tab.url)) // check is url correct
        {
            if(loaded)
            {
                statusBar.style.borderColor = '#6cd66c';
                statusBar.innerHTML = 'Works pretty.</b><br>But, if you have a problems, reload the page!';
                statusImg.src = '../img/facegreen.png';
            } else 
            {
                statusBar.style.borderColor = '#6cd66c';
                statusBar.innerHTML = 'Some problems.</b><br>Have a some problems with page!';
                statusImg.src = '../img/faceyellow.png';
            }

        } else
        {
            statusBar.style.borderColor = 'darkred';
            statusBar.innerHTML = '<b>Not works...</b><br>Please, switch tab with opened Ya.Music!';
            statusImg.src = '../img/facered.png';
        }
    });
}, false);