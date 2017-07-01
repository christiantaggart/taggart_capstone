using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using UnityStandardAssets.CrossPlatformInput;
using UnityEngine.SceneManagement;


public class Gun : MonoBehaviour {

    // GUN STATS
    public float damage = 10f;
    public float range = 300f;
    public float impactForce = 200f;
	//WAS 7
    private int fireRate = 7;
    public int bullets = 120;
    public int bulletsLeft = 0;

    // RAY CAST WITH Camera
    public Camera fpsCam;
    // muzzleflash (Created with particle system)
    public ParticleSystem muzzleFlash;
    // impactEffect (Created with particle system)
    public GameObject impactEffect;
    // HOLDS CURRENT ROUNDS FIRED THIS SECOND VALUE
    private float nextTimeToFire = 0f;
    // SIMPLE NAME TO CALL ANIMATIONS ON EVENTS
    private Animation anim;
    // SOUND
    public AudioSource shootSound;

    //    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI	//    GUI
    // SCORE SHOWN IN GUI
    private int score;
    public Text GUI_Score;
    // HEALTH LEFT GUI
    public int Health = 100;
    public Text GUI_Health;
    // AMMO LEFT SHOWN IN GUI
    public Text GUI_Ammo;
    //GAME OVER SCREEN
//    public Image gameover;

    // AMMO DROP REPLENISH AMMO
    public GameObject ammopickup;
//    public GameObject GUI_AMMOPICKUP;

    // RELOAD STUFF
	public Text GUI_ammoInMag;
    public int magAmmo = 30;
	public float reloadTime = 1f;
    private int ammoInMag;
	private bool isReloading = false;


	// RELOAD FUNCTION
	IEnumerator Reload () {
		isReloading = true;
		anim.Play ("Reloading");
		yield return new WaitForSeconds (reloadTime);
		if (bulletsLeft >= 30) {
			ammoInMag = magAmmo;
			bulletsLeft -= magAmmo;
		} else {
			ammoInMag = bulletsLeft;
		}

		isReloading = false;
	}



	void updateBullets () {
		if (bullets > 0) {
			bulletsLeft = bullets -= 1;
			GUI_Ammo.text = bulletsLeft.ToString ();
		}
	} // END updateBullets



	void Shoot () {
		ammoInMag--;

		muzzleFlash.Play ();

		RaycastHit hit;

		if (Physics.Raycast (fpsCam.transform.position, fpsCam.transform.forward, out hit, range)) {
			// ASSIGNING target TO OBJECTS WITH TARGET SCRIPT
			Target target = hit.transform.GetComponent<Target> ();
			// IF target has TARGET SCRIPT ADD DAMAGE
			if (target != null) {
				score += 50; //increments score
				GUI_Score.text = ("SCORE: " + score.ToString ());
				target.TakeDamage (damage);
			}
			if (hit.rigidbody != null) {
				hit.rigidbody.AddForce (-hit.normal * impactForce);
			}
			GameObject impactGO = Instantiate (impactEffect, hit.point, Quaternion.LookRotation (hit.normal));
			Destroy (impactGO, 2f);
		}
		updateBullets ();
	} // END SHOOT




	// AMMO PICKUP
	void OnTriggerEnter (Collider col) {
		//It will check for the name of the GameObject that had enter inside the enemy trigger
		if (col.gameObject.tag == "ammopickup") {
			//Inside this if you will have the confirmation that the player is being hit by the enemy
			Debug.Log ("ammopickup");
			bullets += 120;
			bulletsLeft += 120;
			updateBullets ();
//			GUI_AMMOPICKUP.gameObject.SetActive (true);

		}
	}




	void Start () {

		ammoInMag = magAmmo;
		anim = GetComponent<Animation> ();
		shootSound = GetComponent<AudioSource> ();
		score = 0;

	}




    void Update () {
		// RELOADING STUFF
		GUI_ammoInMag.text = ammoInMag.ToString ();
//		if (bulletsLeft == 0 && ammoInMag == 0) {
//			return;
//		}
		if (isReloading || bulletsLeft == 0 && ammoInMag == 0) {
			return;
		}
		if (bulletsLeft >= 1 && ammoInMag <= 0 || Input.GetKey (KeyCode.R)) {
			StartCoroutine (Reload ());

			return;
		}
//		if (Input.GetKey (KeyCode.R)) {
//			StartCoroutine (Reload ());
//			return;
//		}




        // MY GUI FOR HEALTH
        GUI_Health.text = ("HEALTH : " + Health.ToString () + "%");
        if (Health <= 0) {
            // gameover.gameObject.SetActive (true);



             Time.timeScale = 0; // THIS WILL PAUSE THE GAME ON DEATH
        }
        // ADD "Down" TO GetButton TO MAKE SEMI AUTO
        if (Input.GetButton ("Fire1") && Time.time >= nextTimeToFire) {
            if (bulletsLeft >= 0) {
                //Shooting Animation PLAYS WHEN SHOOT BUTTON PRESSED
                anim.Play ("AKM");
                // KEEPS TRACK OF ROF
                nextTimeToFire = Time.time + 1f / fireRate;
                // CALLS Shoot FUNCTION
                Shoot ();
                shootSound.enabled = true;
                // shootSound.loop = true;
                shootSound.Play ();

            } else {
                shootSound.enabled = false;
                // shootSound.loop = false;

            }

        }






    } // END UPDATE

}
