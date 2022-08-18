// Runs on first entry to website after startup.js has loaded everything

//ORDER
// After startup load animation decide if to continue to main or not

//TODO
// Make rain animation
// Seperate intro from main
// Text on screen

function intro() {
    // Rain animation start
    const body = document.body
    console.log("Working!");
    animcanvas = document.createElement("div");
    animcanvas.classList.add("animcanvas");
    body.appendChild(animcanvas)
    const timer = setInterval(createDrop, 50)
    setTimeout(function () {
        clearInterval(timer)
        animcanvas.style.display = "none"
        const menu = document.getElementById("suMenus")
        menu.
    }, 5000)
}

function createDrop() {
    const rain = document.createElement("div");
    rain.classList.add("blooddrop");
    rain.style.left = `${Math.random() * 100}vw`
    rain.style.animationDuration = `${Math.random() * 1 + 2}s`
    animcanvas.appendChild(rain);
    img = document.createElement("img");
    img.src = "Images/bloodDrop.png";
    rain.appendChild(img);

    setTimeout(() => rain.remove(), 3000)
}

// Calls intro if first time
if (localStorage.getItem("AltarSave") == null) intro()