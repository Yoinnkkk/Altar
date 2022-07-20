// File to support game saving and game loading along with other things



// Loop to save the game
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
}, gameData.timer)
// Nav button saving
/*
window.onbeforeunload = function(event) {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
}
*/

// loading the saveGame
var savedGame = JSON.parse(localStorage.getItem("AltarSave"))
if (savedGame !== null) {
    gameData = savedGame
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.blood += gameData.bloodPerAutoClick * (diff / 500)
    document.getElementById("autosave-time").value = gameData.timer / 600000
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + gameData.timer / 60000 + " Minute(s)"
}




// Clear data button function
function clearData() {
    if (document.getElementById("clearData").innerHTML == "Are you sure?") {
        gameData = gameDataDefault
        localStorage.removeItem("AltarSave")
        location.reload(true);
    };
    document.getElementById("clearData").innerHTML = "Are you sure?"
}


// Save data button function
function saveData() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
    document.getElementById('saveData').innerHTML = "Saved!"
    document.getElementById('saveData').style.backgroundColor = "green"
    
}
