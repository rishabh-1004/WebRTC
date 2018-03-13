(function(){
	var video= document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.getUserMedia ||
			     navigator.webkitGetUserMedia ||
			     navigator.mozGetUserMedia ||
			     navigatormsGetUserMedia;

	navigator.getMedia({
		video:true,
		audio:true
		},function(stream){
			video.src = vendorUrl.createObjectURL(stream);
			video.play()	
		},
		function(error){
		// an error occured
		
	});	
})();
