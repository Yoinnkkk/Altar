if (gameData.firstTime == true) {
    intro()
} else {
    tab("stabFingerMenu");
}

function intro() {
    //makes sure the code doesnt repeat after first run
    gameData.firstTime = false

}