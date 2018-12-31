window.alert("Hello")

function loadScript() {
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.async = true;
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAWAb0Dr2cDdOicUsKYqBGMcscdV79Nutg&avoid=TOLLS&libraries=places&callback=init";
	document.body.appendChild(script);
}
window.addEventListener('load', loadScript());

function init() {
	window.alert("success");
	var map;
	// var maps;
	map = new this.google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: {
			lat: -34.397,
			lng: 150.644
		}
	});
}