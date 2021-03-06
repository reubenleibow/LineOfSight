﻿#pragma strict

var theTarget : GameObject;
var fieldView : int  = 30;
var viewDistance : int = 10;
var inSight : boolean;

function Update () 
{
	var hit : RaycastHit;
	Physics.Raycast(this.transform.position,theTarget.transform.position - this.transform.position,hit);
	var direction = theTarget.transform.position - this.transform.position;
	var TAngle = Vector3.Angle(direction,this.transform.forward);
	
	if(hit.transform.name == theTarget.name)
	{
		var rayHitDistance = hit.distance;
		inSight = true;
	}
	else
	{
		inSight = false;
	}
	if(rayHitDistance <= viewDistance && inSight == true)
	{
		if(TAngle <= fieldView)
		{
			Debug.DrawRay(this.transform.position,direction,Color.green);
		}
		if(TAngle >= fieldView)
		{
			Debug.DrawRay(this.transform.position,direction,Color.red);
		}
	}
	if(rayHitDistance > viewDistance || inSight == false)
	{
		Debug.DrawRay(this.transform.position,direction,Color.red);
	}
}