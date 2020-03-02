/*
    PoUp dispatcher
*/
document.addEventListener('DOMContentLoaded', function()
{
    chrome.tabs.getSelected(null, function(tab)
    {
        var tablink  = tab.url.replace('https://','').split(/[/?#]/)[0];
        var status = document.getElementById('status');

        if (tablink != 'www.music.yandex.ru' && tablink != 'music.yandex.ru')
        {
            status.innerHTML = 'Don`t works. (This extension works on domain music.yandex.ru only!)';
        } else
        {
            status.innerHTML = 'Works right now! (If you not see, please, reload page!)';
        }
        
    });
}, false);