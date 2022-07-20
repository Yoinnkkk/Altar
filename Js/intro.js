// Runs on first entry to website after startup.js has loaded everything

//ORDER
// After startup load animation decide if to continue to main or not

//TODO
// Make rain animation
// Seperate intro from main
// Text on screen

function intro() {
    const body = document.body
    console.log("Working!");
    animcanvas = document.createElement("div");
    animcanvas.classList.add("animcanvas");
    body.appendChild(animcanvas)
    i = 0
    while (i < 100) {
        div = document.createElement("div");
        div.classList.add("blooddrop");
        animcanvas.appendChild(div);
        img = document.createElement("img");
        img.src = "Images/bloodDrop.png";
        div.appendChild(img);

    }
}


// Calls intro if first time
if (localStorage.getItem("AltarSave") == null) intro()