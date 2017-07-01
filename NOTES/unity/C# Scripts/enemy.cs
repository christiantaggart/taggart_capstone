using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemy : MonoBehaviour {

	//The target CLIENT
	private Transform CLIENT;

	//At what distance will the enemy walk towards the CLIENT?
	public float walkingDistance = 150.0f;

	//In what time will the enemy complete the journey between its position and the CLIENTs position
	public float smoothTime = 3.0f;

	//Vector3 used to store the velocity of the enemy
	private Vector3 smoothVelocity = Vector3.zero;
	private Animation anim;

	public GameObject body;



	void Start () {

		CLIENT = GameObject.Find ("CLIENT").transform;
		anim = GetComponent<Animation> ();
		body = GameObject.Find ("body");
		smoothVelocity.y = 0;
	}



	void OnTriggerEnter(Collider mainCharacter){
		//It will check for the name of the GameObject that had enter inside the enemy trigger
		if(mainCharacter.gameObject.name == "body"){
			//Inside this if you will have the confirmation that the player is being hit by the enemy
			Debug.Log("HITTING PLAYER");
			//So in here you will access the script that have the variable for the player health
			//Something like this
			(mainCharacter.gameObject.GetComponent("Gun")as Gun).Health -= 10;
			(mainCharacter.gameObject.GetComponent("Gun")as Gun).bulletsLeft += 120;

		}
	}




	void Update () {

		//Look at the CLIENT
		transform.LookAt (CLIENT);

		//Calculate distance between CLIENT
		float distance = Vector3.Distance (transform.position, CLIENT.position);

		//If the distance is smaller than the walkingDistance
		if (distance < 2f) {

			anim.Play ("attack");

		} else if (distance < walkingDistance) {

			anim.Play ("walk");
			//Move the enemy towards the CLIENT with smoothdamp
			transform.position = Vector3.SmoothDamp (transform.position, CLIENT.position, ref smoothVelocity, smoothTime);

		} else {
			anim.Play ("attack");
		}

	}

}
