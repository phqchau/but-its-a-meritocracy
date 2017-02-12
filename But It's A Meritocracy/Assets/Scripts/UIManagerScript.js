#pragma strict

// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {

}

// loads inputted level
function loadScene(scene : String) {
    UnityEngine.SceneManagement.SceneManager.LoadScene(scene, UnityEngine.SceneManagement.LoadSceneMode.Single);
}