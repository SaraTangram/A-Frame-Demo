var iframe = document.getElementById("360iframe");
function counterSwap(imgName, matName) {
    iframe.contentWindow.document.querySelector("#countertops").setAttribute("src", imgName);
	document.getElementById("counters").innerHTML = (matName);	
  }
function cabinetSwap(imgName, matName) {
    iframe.contentWindow.document.querySelector("#cabinets").setAttribute("src", imgName);
	document.getElementById("cabs").innerHTML = (matName);
    }
function floorSwap(imgName, matName) {
      iframe.contentWindow.document.querySelector("#floors").setAttribute("src", imgName);	
	document.getElementById("flooring").innerHTML = (matName);	
    }
function display() {
  var x = document.getElementById("loader");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
function video(play) {
        var vid = document.getElementById("360iframe").src;	
        if (vid.indexOf("scene")!==-1) {
            document.getElementById("360iframe").src  = "video.html";
        }
         else {
           document.getElementById("360iframe").src = play;
       }  
    }	
function menuHide() {
	document.getElementById("main-container").style.display = "none";
	document.getElementById("customizer-container").style.display = "block";	
}
function customHide() {
	document.getElementById("main-container").style.display = "block";
	document.getElementById("customizer-container").style.display = "none";
}