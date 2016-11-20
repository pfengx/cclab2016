using UnityEngine;
using System.Collections;

public class Pacdot : MonoBehaviour {

    void OnCollisionEnter2D(Collision2D coll)
    {
        if (coll.gameObject.tag == "pacman")
            Destroy(gameObject);
    }
}
