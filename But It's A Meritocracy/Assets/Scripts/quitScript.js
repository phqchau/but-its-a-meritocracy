#pragma strict

// Quits when escape key is pressed
function Update() {
    if (Input.GetKey ("escape")) {
        quit();
    }
}

// Quits when quit button is pressed
function quit() {
    Application.Quit();
}
