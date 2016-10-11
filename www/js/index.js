var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    //On Load, create Device Ready listener
    function onLoad() { 
        document.addEventListener("deviceready", onDeviceReady, false); // When the application has loaded, call the onDeviceReady function
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    // On Device ready event, create the pause and resume listeners
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false); //When app is resumed trigger onResume function
		document.addEventListener("pause", onPause, false); //When app is paused trigger onPause function
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
    // Handle Resume event
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
