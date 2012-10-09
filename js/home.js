var sectionID="loginSection";

function onPageLoad(){
	document.addEventListener("deviceready", phonegapReady, false);
}

function onPause() {
//alert('Pausing application');
}

function onResume() {
//alert('Resuming Application');
}

function onBack() {
//alert('Resuming Application');
}

function phonegapReady(){
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("backbutton", onBack, false);
};

function clear(sectionID){
	$("#"+sectionID).hide();
}

function show(section){
	clear(sectionID);
	sectionID=section;
	$("#"+sectionID).show();
}
function login(){
	//$("#loginResult").html("Invalid username and password.");
	showTrack();
}

function createAccount(){
	$("#createResult").html("Email address already has account created.");
}
function changeTitle(str){
	$("#title").html(str);
}
function showCreateAccount(){
	changeTitle("Create Account");
	show("createAccountSection");
}

function showLogin(){
	changeTitle("Track Me - Sign In");
	show("loginSection");
}

function showTrack(){
	changeTitle("Your Tracking Information");
	show("trackSection");
	var myOptions = {
	  zoom: 16,	
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  panControl: false,
	  rotateControl: false,
	  scaleControl: false,
	  streetViewControl: false,
	  zoomControl: false,
	  overviewMapControl: false,
	  mapTypeControl: false
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	setInterval(function(){getLocation()},1000)
}

function getLocation()
 {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{$("#trackInfo").html("Geolocation is not supported by this browser.");}
 }
  
function showPosition(position)
 {
	
	initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(initialLocation);
	
	$("#long").html(position.coords.longitude);
	$("#lat").html(position.coords.latitude);

	var centerLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	
	
	var marker = new google.maps.Marker({
	      position: centerLatlng,
	      map: map,
	      title:"You Are Here!"
	});
 }
  
  
function showError(error)
{
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      $("#trackInfo").html("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      $("#trackInfo").html("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      $("#trackInfo").html("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      $("#trackInfo").html("An unknown error occurred.");
      break;
    }
 }


