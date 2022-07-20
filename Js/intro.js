// Runs on first entry to website after startup.js has loaded everything



function intro() {
    console.log("Working!");

}


// Calls intro if first time
if (localStorage.getItem("AltarSave") == null) intro()