// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	$( "#sayCheese" ).click(function() {
  		getPicture();
	});
}

function getPicture() {
	navigator.camera.getPicture(onSuccess, onFail, { 
		quality: 100,
	    destinationType: Camera.DestinationType.FILE_URI, 
	    sourceType : Camera.PictureSourceType.CAMERA,
	    encodingType: Camera.EncodingType.JPEG,
	    popoverOptions: CameraPopoverOptions,
	    saveToPhotoAlbum: true,
	    
	    // Select Photo From Album
	    // sourceType : Camera.PictureSourceType.PHOTOLIBRARY,

	});

	function onSuccess(imageData) {
	    var image = document.getElementById('myImage');
	    image.src = "data:image/jpeg;base64," + imageData;
	    Camera.PictureSourceType.PHOTOLIBRARY
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}

}