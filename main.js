var gameData = fetch('./gameData.json')

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
}, gameData.timer)

var savedGame = JSON.parse(localStorage.getItem("AltarSave"))
if (savedGame !== null) {
    gameData = savedGame
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.blood += gameData.bloodPerAutoClick * (diff/ 500)
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + savedGame.timer / 60000 + " Minute(s)"
}

function updateValues() {
    document.getElementById("bloodGained").innerHTML = "Blood: " + formatter(gameData.blood)
    document.getElementById("bloodPerClickUI").innerHTML = "Blood Per Click: " + formatter(gameData.bloodPerClick * gameData.totalUpgrade)
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pin: " + formatter(gameData.bloodPerClickCost)
    document.getElementById("bloodPerAutoClickUI").innerHTML = "Automatic Generation: " + formatter(gameData.bloodPerAutoClick * gameData.totalAutoUpgrade)
    document.getElementById("perClickAutoUpgrade").innerHTML = "Upgrade Altar: " + formatter(gameData.bloodPerAutoClickCost)
    if (document.getElementById('researchBar').children.length == 0) {
        document.getElementById('researchBar').style.display = "none"
        } else {
            document.getElementById('researchBar').style.display = "block" 
        }
}

var ValueLoader = window.setInterval( function() { 
    updateValues()
    upgradeButton()
}, 100)

function formatter(number) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 6) return number.toFixed(1)
    return mantissa.toFixed(2) + "e" + exponent
}

function stabFinger(type) {
    if (type == 'manual') {gameData.blood += gameData.bloodPerClick * gameData.totalUpgrade};
    if (type == 'automatic') {gameData.blood += gameData.bloodPerAutoClick * gameData.totalAutoUpgrade};
}

function buyBloodPerClick(type) {
    if (type == 'manual') {
        if (gameData.blood >= gameData.bloodPerClickCost) {
            gameData.blood -= gameData.bloodPerClickCost
            gameData.bloodPerClick += 0.5
            gameData.bloodPerClickCost *= 1.5
        }
    }
    if (type == 'automatic') {
        if (gameData.blood >= gameData.bloodPerAutoClickCost) {
            gameData.blood -= gameData.bloodPerAutoClickCost
            gameData.bloodPerAutoClick += 0.5
            gameData.bloodPerAutoClickCost *= 1.5
        }
    }
    
}

function tab(tab) {
    document.getElementById("stabFingerMenu").style.display = "none";
    document.getElementById("shopMenu").style.display = "none";
    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById("clearData").innerHTML = "Clear Data!";
    document.getElementById("saveData").innerHTML = "Save Data";
    document.getElementById("saveData").style.backgroundColor = "";
    document.getElementById(tab).style.display = "flex";
}
tab("stabFingerMenu");

function clearData() {
    if (document.getElementById("clearData").innerHTML == "Are you sure?") {
    localStorage.removeItem("AltarSave")
    location.reload(true);
    };
    document.getElementById("clearData").innerHTML = "Are you sure?"
}

function saveData() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
    document.getElementById('saveData').innerHTML = "Saved!"
    document.getElementById('saveData').style.backgroundColor = "green"
    
}

function updateSlider() {
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + document.getElementById("autosave-time").value + " Minute(s)";
    gameData.timer = document.getElementById("autosave-time").value * 1000
}

var mainGameLoop = window.setInterval(function() {
    stabFinger('automatic');
}, 500)

function upgradeButton() {
    var upgrades = gameData.upgrades
    var blood = gameData.blood
    for (var i = 1; i < (Object.keys(gameData).length - 1); i++) {
        if (blood >= upgrades[i].price / 2 && document.getElementById(upgrades[i].id) == null && upgrades[i].bought == false) {
            var button = document.createElement('button');
            document.getElementById('researchBar').appendChild(button);
            button.id = upgrades[i].id
            button.innerHTML = upgrades[i].name + "<br>" + upgrades[i].description + "<br>" + upgrades[i].price
            button.addEventListener('click', function () {buyResearch(i)})
        }
    }
}

function buyResearch(i) {
    var upgrade = gameData.upgrades[i]
    console.log(i)
    var upgradeType = upgrade.upgradeType
    if (gameData.blood >= upgrade.price) {
        gameData.blood -= upgrade.price
        if (upgradeType == "manual") {
            gameData.totalUpgrade *= upgrade.upgrade
        } else if (upgradeType == "automatic") {
            gameData.totalAutoUpgrade *= upgrade.upgrade
        } else if (upgradeType == "total") {
            gameData.totalUpgrade *= upgrade.upgrade;
            gameData.totalAutoUpgrade *= upgrade.upgrade;
        }
        upgrade.bought = true
        document.getElementById('researchBar').removeChild(document.getElementById(upgrade.id))
    }
}

var transformed = false
function translateLogo() {
    var menuIcon = document.getElementById('menuIcon')
    if (transformed == false) {
        menuIcon.style.transform = 'translateX(725px)'
        menuIcon.style.transform += 'translateY(400px)'
        console.log(menuIcon.style.height)
        menuIcon.style.transform += 'scaleX(3)'
        menuIcon.style.transform += 'scaleY(3)'
        transformed = true
        return 
    }
    if (transformed == true) {
        menuIcon.style.transform = 'translateX(10px)'
        menuIcon.style.transform += 'translateY(10px)'
        menuIcon.style.transform += 'scaleX(1)'
        menuIcon.style.transform += 'scaleY(1)'
        transformed = false
        return
    }

}



if (typeof savedGame.blood !== "undefined") gameData.blood = savedGame.blood;
if (typeof savedGame.bloodPerAutoClick !== "undefined") gameData.bloodPerAutoClick = savedGame.bloodPerAutoClick;
if (typeof savedGame.bloodPerClick !== "undefined") gameData.bloodPerClick = savedGame.bloodPerClick;
if (typeof savedGame.bloodPerAutoClickCost !== "undefined") gameData.bloodPerAutoClickCost = savedGame.bloodPerAutoClickCost;
if (typeof savedGame.buyBloodPerClick !== "undefined") gameData.buyBloodPerClick = savedGame.buyBloodPerClick;
if (typeof savedGame.lastTick !== "undefined") gameData.lastTick = savedGame.lastTick;
if (typeof savedGame.timer !== "undefined") gameData.timer = savedGame.timer;
if (typeof savedGame.upgrades !== "undefined") gameData.upgrades = savedGame.upgrades;