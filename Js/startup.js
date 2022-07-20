// Javascript file to load the rest of the javascript files

const loadarray = ["intro.js","gameData.js", "saveManagement.js","main.js"]
function loadScripts(path) {
    var header = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "Js/"+path
    header.appendChild(script);
}
i = 0
while (i < loadarray.length) {
    loadScripts(loadarray[i]);
    i++
}