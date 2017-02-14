#pragma strict

import UnityEngine.UI;

public var scoreText : Text;
private static var score : int;
public var isNewGame : boolean;

// Sets the score to zero
function Start() {
    if (isNewGame){
        score = 0;
        Update();
    }
}

// Updates the score display
function Update () {
    scoreText.text = "Score: " + score;
}

// Increments the score by 1, called when an enemy is shot
function increment() {
    score++;
    Update();
}

function getScore() {
    return score;
}
