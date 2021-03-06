﻿#pragma strict

public var enemies : GameObject[];
public var spawnTime : float = 2;

function Start() {
    // Call the 'addEnemy' function in 0 second
    // Then every 'spawnTime' seconds
    InvokeRepeating("addEnemy", 0, spawnTime);
}

// New function to spawn an enemy
function addEnemy() {
    // Get the renderer component of the spawn object
    var rd = GetComponent.<Renderer>();

    // Position of the left edge of the spawn object
    // It's: (position of the center) minus (half the width)
    var x1 = transform.position.x - rd.bounds.size.x/2;

    // Same for the right edge
    var x2 = transform.position.x + rd.bounds.size.x/2;

    // Randomly pick a point within the spawn object
    var spawnPoint = Vector2(Random.Range(x1, x2), transform.position.y);

    // Randomly select an enemy
    var i = Mathf.Floor(Random.Range(0, enemies.length));

    // Create an enemy at the 'spawnPoint' position
    Instantiate(enemies[i], spawnPoint, Quaternion.identity);
} 

function spawnFaster(newTime : float) {
    spawnTime = newTime;
    Start();
}