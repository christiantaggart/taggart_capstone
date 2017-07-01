using UnityEngine;

public class Target : MonoBehaviour {

	public float health = 50f;
	private Animation anim;
	public GameObject ammopickup;

	void Start () {



		anim = GetComponent<Animation> ();

		Physics.gravity = new Vector3(0, -100.0F, 0);

//		 IF THERE ARE LESS THAN 6 ENEMIES (Tagged with Player) SPAWN THESE
		if (GameObject.FindGameObjectsWithTag ("Player").Length < 6) {

			Instantiate (Resources.Load ("Prefabs/z1", typeof (GameObject)));
			Spawn ();
		}

	}

	//	WHEN SHOT REMOVE HEALTH
	public void TakeDamage (float ammount) {
		health -= ammount;
		anim.Play ("back_fall");

		if (health <= 0f) {
			Die ();

		}

	}

	//	DIE FUNCTION
	void Die () {

		Destroy (gameObject);
		Spawn ();

		Vector3 position = new Vector3 (Random.Range (-30F, 64.0F), 0f, Random.Range (-30.0F, 64.0F));

		if (GameObject.FindGameObjectsWithTag ("ammopickup").Length > 3) {
//			Debug.Log (GameObject.FindGameObjectsWithTag ("ammopickup").Length);
			return;

		} else {
			Instantiate (Resources.Load ("Prefabs/ammopickup", typeof(GameObject)), position, Quaternion.identity);
		}

	}

	// RANDOM POSITION TO SPAWN Zombie game objects (Named "z1-z11")
	void Spawn () {

		Vector3 position = new Vector3 (Random.Range (-30F, 64.0F), 0.5f, Random.Range (-30.0F, 64.0F));
		Instantiate (Resources.Load ("Prefabs/z1", typeof (GameObject)), position, Quaternion.identity);

	}

}
