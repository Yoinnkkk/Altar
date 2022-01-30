const slist = ["gameData.js","main.js","intro.js"]

function loadScripts(path) {
    var header = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = path
    header.appendChild(script);
}
i = 0
console.log(slist);
while (i < slist.length) {
    loadScripts(slist[i]);
    i++
    if (slist[i] == 'gameData.js') {
        while (gameData == undefined || gameData == null) {}
    }
}