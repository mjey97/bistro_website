function callback() {
  console.log("onload von der externen javascript datei");
  onloadEvent();
}
function loadScript(url) {
  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState){  //IE
      script.onreadystatechange = function(){
          if (script.readyState == "loaded" || script.readyState == "complete"){  
              console.log("IE onload function by loadScript");
              script.onreadystatechange = null;
              onloadEvent();
          }
      };
  } else {  //Others
      script.onload = function(){
        onloadEvent();
      };
  }
  script.src = url;    
  /*referenceNode = document.querySelector('script[src="script/always.js"]');   
  console.log(document.getElementsByTagName("html")[0]);
  document.getElementsByTagName("body")[0].insertBefore(script, referenceNode);*/  
  document.getElementsByTagName("head")[0].appendChild(script);
}
function removeScript() {
  if (document.querySelector('script[src="script/mobile+tablet.js"]') != null) {
    var script = document.querySelector('script[src="script/mobile+tablet.js"]');
  } else {   
    var script = document.querySelector('script[src="script/pc.js"]');
  }
  document.getElementsByTagName("head")[0].removeChild(script); 
}
window.onresize = function() {
  /*console.log(document.body.offsetWidth);*/
  if (MOBILE_TABLET_ON && (document.body.offsetWidth > 1024)) {
    removeScript();
    loadScript("script/pc.js", function(){ ; }); 
    MOBILE_TABLET_ON = false;
    PC_ON = true;
  }
  if (PC_ON && (document.body.offsetWidth < 1025)) {
    removeScript();
    loadScript("script/mobile+tablet.js", function(){ ; });
    MOBILE_TABLET_ON = true;
    PC_ON = false;  
  }
  if (document.body.offsetWidth < 1025) {
    /*MOBILE & TABLET*/ 
    onresizeEvent();
  } else { 
    onresizeEvent();
    /*PC*/ 
  } 
}                         

var MOBILE_TABLET_ON = false;
var PC_ON = false;
window.onload = function() { 
  /*veränderung bei nicht ausreichender browser version*/
  var styleObj = document.body; 
  if ((window.getComputedStyle(styleObj,null).display != "flex")) {
    //Veralteter Browser //  Flex wird nicht unterstützt  
    document.getElementById("wrapper").style.display = "block"; 
  } 
  
  if (document.body.offsetWidth < 1025) {
    /*MOBILE & TABLET*/ 
    /*console.log("mobile");*/
    loadScript("script/mobile+tablet.js");
    MOBILE_TABLET_ON = true;
    PC_ON = false;
  } else {
    /*PC*/   
    /*console.log("pc");*/ 
    loadScript("script/pc.js"); 
    MOBILE_TABLET_ON = false;
      PC_ON = true;
  }
}

window.onscroll = function(e) { 
  if (PC_ON) {
    onscrollEvent();
  }
}
