var bloop_count = 0;
var _ItemCount = 0

    //On Load, create Device Ready listener
    function onLoad() { 
        document.addEventListener("deviceready", onDeviceReady, false); // When the application has loaded, call the onDeviceReady function
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#Items").text("Application launched: " + _ItemCount);
		$("#bloop").text("Application resumed: " + bloop_count);
	}


    // device APIs are available
    //
    // On Device ready event, create the pause and resume listeners
    function onDeviceReady() {
		window.localStorage.setItem("Tablet", "Shield");
        _ItemCount++;
		window.localStorage.setItem("Phone", "iPhone");
        _ItemCount++;
		window.localStorage.setItem("Keyboard", "Dell");
        _ItemCount++;
		window.localStorage.setItem("Mouse", "Also Dell");
        _ItemCount++;
		window.localStorage.setItem("Keys", "There"); 
        _ItemCount++;
        
        window.localstorage.getItem("Tablet");
        updateDisplay();
    }



    
    
    // Caboose Event
    function bleepBloop(){
        alert("Bleep Bloop");
        bloop_count++;
        updateDisplay();
        console.log("Bloop Bleep");
    }