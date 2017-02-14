#pragma strict

import UnityEngine.SceneManagement;

public var speed : int = -3;
public var score : scoreScript;
public var spawn : spawnScript;

// Function called when the enemy is created
public function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    // Add a vertical speed to the enemy
    r2d.velocity.y = speed;

    // Make the enemy rotate on itself
    r2d.angularVelocity = Random.Range(-100, 100);

    // Finds the scoreScript so score can be updated
    score = GameObject.Find("ScoreObj").GetComponent.<scoreScript>();

    // Finds the spawnScript so spawn time can be updated
    spawn = GameObject.Find("spawn").GetComponent.<spawnScript>();
}

// Function called when the object goes out of the screen
public function OnBecameInvisible() {
    // Destroy the enemy
    Destroy(gameObject);
}

// Function called when the enemy collides with another object
public function OnTriggerEnter2D(coll : Collider2D) {
    // Name of the object that collided with the enemy
    var name = coll.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet(Clone)") {
        // Update score
        score.increment();

        // Update spawn time
        if (score.getScore() % 10 == 0) {
            spawn.spawnFaster(spawn.spawnTime * .9);
        }

        // Destroy itself (the enemy) and the bullet
        Destroy(gameObject);
        Destroy(coll.gameObject);
    }

    // If the enemy collided with the spaceship
    if (name == "cursor") {
        // End the game
        SceneManager.LoadScene("EndScene", LoadSceneMode.Single);
    }
} 