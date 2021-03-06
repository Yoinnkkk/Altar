/*var gameData = {
    blood: 1,
    bloodPerClick: 1,
    bloodPerAutoClick: 0,
    bloodPerAutoClickCost: 10,
    bloodPerClickCost: 10,
    lastTick: Date.now(),
    timer: 60000,
    totalUpgrade: 1,
    volunteerUnlock: false,
    totalAutoUpgrade: 1,
    firstTime: true,
    upgrades: {
        1: {
            name: "Upgrade Knife",
            price: 300,
            upgrade: 2,
            description: "Change out that rusty knife, you might get tetanus...",
            id: 1,
            bought: false,
            upgradeType: "manual"
        },
        2: {
            name: "Sturdier Skin",
            price: 500,
            upgrade: 2,
            description: "I guess your skin just got sturdier from all that poking!",
            id: 2,
            bought: false,
            upgradeType: "manual"
        },
        3: {
            name: "Higher Quality Bricks",
            price: 1000,
            upgrade: 1.5,
            description: "Buy higher quality bricks for your altar.",
            id: 3,
            bought: false,
            upgradeType: "total"
        },
        4: {
            name: "Blood Thinners",
            price: 3000,
            upgrade: 1.5,
            description: "Those new pills you bought really work a charm huh...",
            id: 4,
            bought: false,
            upgradeType: "manual"
        },
        5: {
            name: "Polish the altar",
            price: 3500,
            upgrade: 2,
            description: "The altar is filled with cracks and grooves, maybe you should polish it...",
            id: 5,
            bought: false,
            upgradeType: "total"
        },
        6: {
            name: "Oiled Gears",
            price: 5000,
            upgrade: 2,
            description: "Those rusty gears will be highly outclassed by these ones!",
            id: 6,
            bought: false,
            upgradeType: "automatic"
        },
        7: {
            name: "Change your blood",
            price: 10000,
            upgrade: 3,
            description: "You heard theres 'Golden' blood in hospitals, no idea how you'll get it into your body but go with it",
            id: 7,
            bought: false,
            upgradeType: "manual"
        },
        8: {
            name: "Rebuild the automatic machine",
            price: 13250,
            upgrade: 2,
            description: "Should it really be making those noises?",
            id: 8,
            bought: false,
            upgradeType: "automatic"
        },
        9: {
            name: "Maybe a little too much",
            price: 30000,
            upgrade: 2,
            description: "What if you took multiple of those pills you bought earlier... just maybe...",
            id: 9,
            bought: false,
            upgradeType: "manual"
        },
        10: {
            name: "Acquire Volunteers...",
            price: 50000,
            upgrade: 4,
            description: "I swear they signed the form",
            id: 10,
            bought: false,
            upgradeType: "newbutton",
            upgradeTypeSpecific: "volunteers",
            buttonName: "\"Volunteers\""
        },
        11: {
            name: "More potent blood thinners",
            price: 100000,
            upgrade: 2,
            description: "These ones are stronger!",
            id: 11,
            bought: false,
            upgradeType: "total",
        },
    }
}
*/


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
    if (gameData.volunteerUnlock == false) {
        document.getElementById("volunteersButton").style.display = "none";
    }
}

var ValueLoader = window.setInterval( function() { 
    updateValues()
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
            gameData.bloodPerAutoClick += 1
            gameData.bloodPerAutoClickCost *= 1.4
        }
    }
    
}

function tab(tab) {
    document.getElementById("stabFingerMenu").style.display = "none";
    document.getElementById("shopMenu").style.display = "none";
    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById("volunteersMenu").style.display = "none";
    document.getElementById("clearData").innerHTML = "Clear Data!";
    document.getElementById("saveData").innerHTML = "Save Data";
    document.getElementById("saveData").style.backgroundColor = "";
    document.getElementById(tab).style.display = "flex";
}

function updateSlider() {
    document.getElementById("autoSaveLabel").innerHTML = "Autosave Time: " + document.getElementById("autosave-time").value + " Minute(s)";
    gameData.timer = document.getElementById("autosave-time").value * 60000
}

var mainGameLoop = window.setInterval(function() {
    stabFinger('automatic');
    buttonProduction();
}, 500)


function buttonProduction() {
    var listofupgrades = gameData.upgrades
    var blood = gameData.blood
    for (var i = 1; i < (Object.keys(gameData.upgrades).length + 1); ++i) {
        if (listofupgrades[i].bought == false && blood >= listofupgrades[i].price / 2 && document.getElementById(listofupgrades[i].id) == null  ) {
            var bar = document.getElementById('researchBar');
            var button = document.createElement('button')
            bar.appendChild(button)
            button.id = listofupgrades[i].id
            button.innerHTML =  listofupgrades[i].name + "<br>" + listofupgrades[i].description + "<br>" + listofupgrades[i].price;
            button.addEventListener('click', function() {buyResearch(this.id)})
        }
    }
}


function buyResearch(button) {
    var upgrade = gameData.upgrades[button]
    var upgradeType = gameData.upgrades[button].upgradeType
    if (gameData.blood >= upgrade.price) {
        gameData.blood -= upgrade.price
        if (upgradeType == "manual") {
            gameData.totalUpgrade *= upgrade.upgrade
        } else if (upgradeType == "automatic") {
            gameData.totalAutoUpgrade *= upgrade.upgrade
        } else if (upgradeType == "total") {
            gameData.totalUpgrade *= upgrade.upgrade;
            gameData.totalAutoUpgrade *= upgrade.upgrade;
        } else if (upgradeType == "newbutton") {
            createButtonInNav(gameData.upgrades[button])
        }
        upgrade.bought = true
        document.getElementById('researchBar').removeChild(document.getElementById(button))
    }
}

function createButtonInNav(upgradeInfo) {
    var button = document.getElementById('volunteersButton')
    if (gameData.volunteerUnlock == true) {
        button.style.display = inline-block
    }
    navDiv.appendChild(button)
}

function newButtonFunctions(upgradeID) {

}