#pragma strict

import UnityEngine.SceneManagement;

// loads inputted level
function loadScene(scene : String) {
    SceneManager.LoadScene(scene, LoadSceneMode.Single);
}