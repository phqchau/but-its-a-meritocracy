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
    if (Input.GetKey("up"))
        r2d.velocity.y = 10;
    else if (Input.GetKey("down"))
        r2d.velocity.y = -10;
    else
        r2d.velocity.y = 0;

    // Keeps the cursor from moving offscreen
    if (transform.position.x <= -9.8f) 
        transform.position = new Vector2(-9.8f, transform.position.y);
    else if (transform.position.x >= 9.8f) 
        transform.position = new Vector2(9.8f, transform.position.y);
    if (transform.position.y <= -4.1f) 
    transform.position = new Vector2(transform.position.x, -4.1f);
    else if (transform.position.y >= 4.1f) 
        transform.position = new Vector2(transform.position.y, 4.1f);

    // When the spacebar is pressed
    if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position” 
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
} 