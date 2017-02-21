#pragma strict

public var bullet : GameObject;
public var audio : AudioSource;

function Update() {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    // Move the player when an arrow key is pressed
    if (Input.GetKey("right") || Input.GetKey(KeyCode.D))
        r2d.velocity.x = 10;
    else if (Input.GetKey("left") || Input.GetKey(KeyCode.A))
        r2d.velocity.x = -10;
    else
        r2d.velocity.x = 0;
    if (Input.GetKey("up") || Input.GetKey(KeyCode.W))
        r2d.velocity.y = 10;
    else if (Input.GetKey("down") || Input.GetKey(KeyCode.S))
        r2d.velocity.y = -10;
    else
        r2d.velocity.y = 0;

    // Keeps the player from moving offscreen
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
        // Which is the current position of the player
        GetComponent.<AudioSource>().Play();
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
} 