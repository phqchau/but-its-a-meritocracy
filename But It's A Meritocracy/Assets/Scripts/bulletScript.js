#pragma strict
@RequireComponent(AudioSource)

// Public variable 
public var speed : int = 6;

// Function called once when the bullet is created
function Start () {
	var audio: AudioSource = GetComponent.<AudioSource>();
	audio.Play();
	audio.Play(44100);
	
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    // Make the bullet move upward
    r2d.velocity.y = speed;
}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}