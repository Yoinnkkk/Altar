var gameData = {
    blood: 0,
    bloodPerClick: 1,
    bloodPerAutoClick: 0,
    bloodPerAutoClickCost: 10,
    bloodPerClickCost: 10,
    lastTick: Date.now(),
    timer: 15000,
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
}, gameData.timer)

var savedGame = JSON.parse(localStorage.getItem("AltarSave"))
if (savedGame !== null) {
    gameData = savedGame
}

function updateValues() {
    document.getElementById("bloodGained").innerHTML = "Blood; " + formatter(gameData.blood)
    document.getElementById("bloodPerClickUI").innerHTML = "BloodPerClick; " + formatter(gameData.bloodPerClick)
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Knife: " + formatter(gameData.bloodPerClickCost)
    document.getElementById("bloodPerAutoClickUI").innerHTML = "BloodPerAutoClick; " + formatter(gameData.bloodPerAutoClick)
    document.getElementById("perClickAutoUpgrade").innerHTML = "Upgrade Altar: " + formatter(gameData.bloodPerAutoClickCost)
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.blood += gameData.bloodPerAutoClick * (diff/ 500)
}
updateValues()

function formatter(number) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(1)
    return mantissa.toFixed(2) + "e" + exponent
}

function stabFinger() {
    gameData.blood += gameData.bloodPerClick
    document.getElementById("bloodGained").innerHTML = "Blood; " + formatter(gameData.blood)
}

function stabFingerAuto() {
    gameData.blood += gameData.bloodPerAutoClick
    document.getElementById("bloodGained").innerHTML = "Blood; " + formatter(gameData.blood)
}

function buyBloodPerClick() {
    if (gameData.blood >= gameData.bloodPerClickCost) {
        gameData.blood -= gameData.bloodPerClickCost
        gameData.bloodPerClick += 1
        gameData.bloodPerClickCost *= 2
        document.getElementById("bloodPerClickUI").innerHTML = "BloodPerClick; " + formatter(gameData.bloodPerClick)
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Knife: " + formatter(gameData.bloodPerClickCost)
    }
}

function buyBloodPerAutoClick() {
    if (gameData.blood >= gameData.bloodPerAutoClickCost) {
        gameData.blood -= gameData.bloodPerAutoClickCost
        gameData.bloodPerAutoClick += 1
        gameData.bloodPerAutoClickCost *= 2
        document.getElementById("bloodPerAutoClickUI").innerHTML = "BloodPerAutoClick; " + formatter(gameData.bloodPerAutoClick)
        document.getElementById("perClickAutoUpgrade").innerHTML = "Upgrade Altar: " + formatter(gameData.bloodPerAutoClickCost)
    }
}

function tab(tab) {
    document.getElementById("stabFingerMenu").style.display = "none";
    document.getElementById("shopMenu").style.display = "none";
    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById(tab).style.display = "inline-block";
}
tab("stabFingerMenu");

function clearData() {
    localStorage.removeItem("AltarSave")
}

var mainGameLoop = window.setInterval(function() {
    stabFingerAuto()
}, 500)

if (typeof savedGame.blood !== "undefined") gameData.blood = savedGame.blood;
if (typeof savedGame.bloodPerAutoClick !== "undefined") gameData.bloodPerAutoClick = savedGame.bloodPerAutoClick;
if (typeof savedGame.bloodPerClick !== "undefined") gameData.bloodPerClick = savedGame.bloodPerClick;
if (typeof savedGame.bloodPerAutoClickCost !== "underfined") gameData.bloodPerAutoClickCost = savedGame.bloodPerAutoClickCost;
if (typeof savedGame.buyBloodPerClick !== "undefined") gameData.buyBloodPerClick = savedGame.buyBloodPerClick;
if (typeof savedGame.lastTick !== "undefined") gameData.lastTick = savedGame.lastTick;