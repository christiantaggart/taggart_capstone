using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ammopickup : MonoBehaviour {

	// Use this for initialization

	void OnTriggerEnter(Collider mainCharacter){
		//It will check for the name of the GameObject that had enter inside the enemy trigger
		if(mainCharacter.gameObject.name == "body"){

      // script on my body element 
			(mainCharacter.gameObject.GetComponent("Gun")as Gun).bulletsLeft += 120;
			if (mainCharacter.gameObject.name == "body") {
				Destroy (gameObject);
			}
		}

	}

}
