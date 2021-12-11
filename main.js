/*
Upgrades template
            name: "a",
            price: 10,
            upgrade: 2,
            description: "a",
            id: "",
            bought: false
*/
var gameData = {
    blood: 0,
    bloodPerClick: 1,
    bloodPerAutoClick: 0,
    bloodPerAutoClickCost: 10,
    bloodPerClickCost: 10,
    lastTick: Date.now(),
    timer: 5000,
    totalUpgrade: 1,
    totalAutoUpgrade: 1,
    upgrades: {
        upgradeKnife: {
            name: "Upgrade Knife",
            price: 300,
            upgrade: 2,
            description: "Change out that rusty knife, you might get tetanus...",
            id: "upgradeKnife",
            bought: false,
        },
        sturdierSkin: {
            name: "Sturdier Skin",
            price: 500,
            upgrade: 2,
            description: "I guess your skin just got sturdier from all that poking!",
            id: "sturdierSkin",
            bought: false,
        }
    },   
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("AltarSave", JSON.stringify(gameData))
}, gameData.timer)

var savedGame = JSON.parse(localStorage.getItem("AltarSave"))
if (savedGame !== null) {
    gameData = savedGame
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.blood += gameData.bloodPerAutoClick * (diff/ 500)
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + savedGame.timer / 1000
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
    if (exponent < 3) return number.toFixed(1)
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
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + document.getElementById("autosave-time").value;
    gameData.timer = document.getElementById("autosave-time").value * 1000
}

var mainGameLoop = window.setInterval(function() {
    stabFinger('automatic');
}, 500)

function upgradeButton() {
    /*  
        Template:
        if (blood >= upgrades.something.price / 2 && document.getElementById(upgrades.something.id) == null && upgrades.something.bought == false) {
        var button = document.createElement('button');
        document.getElementById('researchBar').appendChild(button);
        button.id = upgrades.something.id
        button.innerHTML = upgrades.something.name + "<br>" + upgrades.something.description + "<br>" + upgrades.something.price
        button.addEventListener('click', function(){buyResearch(upgrades.something.name, upgrades.something.id);})
    }
    */
    var upgrades = gameData.upgrades
    var blood = gameData.blood
    if (blood >= upgrades.upgradeKnife.price / 2 && document.getElementById(upgrades.upgradeKnife.id) == null && upgrades.upgradeKnife.bought == false) {
        var button = document.createElement('button');
        document.getElementById('researchBar').appendChild(button);
        button.id = upgrades.upgradeKnife.id
        button.innerHTML = upgrades.upgradeKnife.name + "<br>" + upgrades.upgradeKnife.description + "<br>" + upgrades.upgradeKnife.price
        button.addEventListener('click', function(){buyResearch(upgrades.upgradeKnife.id, upgrades.upgradeKnife.id);})
    }
    if (blood >= upgrades.sturdierSkin.price / 2 && document.getElementById(upgrades.sturdierSkin.id) == null && upgrades.sturdierSkin.bought == false) {
        var button = document.createElement('button');
        document.getElementById('researchBar').appendChild(button);
        button.id = upgrades.sturdierSkin.id
        button.innerHTML = upgrades.sturdierSkin.name + "<br>" + upgrades.sturdierSkin.description + "<br>" + upgrades.sturdierSkin.price
        button.addEventListener('click', function(){buyResearch(upgrades.sturdierSkin.id, upgrades.sturdierSkin.id);})
    }
}

function buyResearch(type, id) {
    var upgrade = gameData.upgrades[type]
    if (gameData.blood >= upgrade.price) {
        gameData.blood -= upgrade.price
        gameData.totalUpgrade *= upgrade.upgrade
        upgrade.bought = true
        document.getElementById('researchBar').removeChild(document.getElementById(id))
    }

}



if (typeof savedGame.blood !== "undefined") gameData.blood = savedGame.blood;
if (typeof savedGame.bloodPerAutoClick !== "undefined") gameData.bloodPerAutoClick = savedGame.bloodPerAutoClick;
if (typeof savedGame.bloodPerClick !== "undefined") gameData.bloodPerClick = savedGame.bloodPerClick;
if (typeof savedGame.bloodPerAutoClickCost !== "underfined") gameData.bloodPerAutoClickCost = savedGame.bloodPerAutoClickCost;
if (typeof savedGame.buyBloodPerClick !== "undefined") gameData.buyBloodPerClick = savedGame.buyBloodPerClick;
if (typeof savedGame.lastTick !== "undefined") gameData.lastTick = savedGame.lastTick;
if (typeof savedGame.timer !== "undefined") gameData.timer = savedGame.timer;
if (typeof savedGame.upgrades !== "undefined") gameData.upgrades = savedGame.upgrades;