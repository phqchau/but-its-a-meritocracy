#pragma strict
public var bullet : GameObject;

function Update() {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    // Move the spaceship when an arrow key is pressed
    if (Input.GetKey("right"))
        r2d.velocity.x = 10;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -10;
    else
        r2d.velocity.x = 0;

    // Keeps the cursor from moving offscreen
    if (transform.position.x <= -8.1f) 
        transform.position = new Vector2(-8.1f, transform.position.y);
    else if (transform.position.x >= 8.1f) 
        transform.position = new Vector2(8.1f, transform.position.y);

    // When the spacebar is pressed
    if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position” 
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
} 