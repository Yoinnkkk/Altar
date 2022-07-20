/*{
    "blood":1,
    "bloodPerClick":1,
    "bloodPerAutoClick":0,
    "bloodPerAutoClickCost":10,
    "bloodPerClickCost":10,
    "lastTick":1643542521537,
    "timer":60000,
    "totalUpgrade":1,
    "totalAutoUpgrade":1,
    "firstTime":false,
    "upgrades":{"1":{"name":"Upgrade Knife","price":300,"upgrade":2,"description":"Change out that rusty knife, you might get tetanus...","id":1,"bought":false,"upgradeType":"manual"},"2":{"name":"Sturdier Skin","price":500,"upgrade":2,"description":"I guess your skin just got sturdier from all that poking!","id":2,"bought":false,"upgradeType":"manual"},"3":{"name":"Higher Quality Bricks","price":1000,"upgrade":1.5,"description":"Buy higher quality bricks for your altar.","id":3,"bought":false,"upgradeType":"total"},"4":{"name":"Blood Thinners","price":3000,"upgrade":1.5,"description":"Those new pills you bought really work a charm huh...","id":4,"bought":false,"upgradeType":"manual"},"5":{"name":"Polish the altar","price":3500,"upgrade":2,"description":"The altar is filled with cracks and grooves, maybe you should polish it...","id":5,"bought":false,"upgradeType":"total"},"6":{"name":"Oiled Gears","price":5000,"upgrade":2,"description":"Those rusty gears will be highly outclassed by these ones!","id":6,"bought":false,"upgradeType":"automatic"},"7":{"name":"Change your blood","price":10000,"upgrade":3,"description":"You heard theres 'Golden' blood in hospitals, no idea how you'll get it into your body but go with it","id":7,"bought":false,"upgradeType":"manual"},"8":{"name":"Rebuild the automatic machine","price":13250,"upgrade":2,"description":"Should it really be making those noises?","id":8,"bought":false,"upgradeType":"automatic"},"9":{"name":"Maybe a little too much","price":30000,"upgrade":2,"description":"What if you took multiple of those pills you bought earlier... just maybe...","id":9,"bought":false,"upgradeType":"manual"},"10":{"name":"Acquire Volunteers...","price":50000,"upgrade":4,"description":"I swear they signed the form","id":10,"bought":false,"upgradeType":"newbutton","upgradeTypeSpecific":"volunteers","buttonName":"Volunteers"},"11":{"name":"More potent blood thinners","price":100000,"upgrade":2,"description":"These ones are stronger!","id":11,"bought":false,"upgradeType":"total"}}}
    */
var gameData = {
    firstTime: true,
    blood: 0,
    bloodPerClick: 1,
    bloodPerAutoClick: 0,
    bloodPerAutoClickCost: 10,
    bloodPerClickCost: 10,
    lastTick: Date.now(),
    timer: 60000,
    totalUpgrade: 1,
    totalAutoUpgrade: 1,
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
var gameDataDefault = {
    firstTime: true,
    blood: 0,
    bloodPerClick: 1,
    bloodPerAutoClick: 0,
    bloodPerAutoClickCost: 10,
    bloodPerClickCost: 10,
    lastTick: Date.now(),
    timer: 60000,
    totalUpgrade: 1,
    totalAutoUpgrade: 1,
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