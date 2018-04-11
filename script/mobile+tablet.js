function onlyIndex() {
  return ((window.location.pathname == '/') || (window.location.pathname.search("index") != -1 )); 
}
function onlyKontakt() {
  return (window.location.pathname.search("kontakt") != -1 ); 
}
function onlyImpressum() {
  return (window.location.pathname.search("impressum") != -1 ); 
}
function getViewpotHeight() {
  return (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
}
function getScrollHeight() {
  return (window.pageYOffset || document.documentElement.scrollTop);
}
/******************************************************************************/
function onloadEvent() {
  var styleObj = document.body; 
  clearAllSettings(); 
  changeSettings();
  setMenueScrollBtnSizes();   
  if ((window.getComputedStyle(styleObj,null).display != "flex")) {   
    /*veränderung bei nicht ausreichender browser version*/
    document.getElementById("header").style.display = "none"; 
    document.getElementById("images").style.display = "none"; 
    document.getElementById("header-menu").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("banner-croque").style.display = "none";
    document.getElementById("croque").style.display = "none";    
    document.getElementById("banner-extras").style.display = "none";  
    document.getElementById("extras").style.display = "none";  
    document.getElementById("banner-salads").style.display = "none";  
    document.getElementById("salads").style.display = "none";
    document.getElementById("banner-creps").style.display = "none";  
    document.getElementById("creps").style.display = "none";  
    document.getElementById("banner-drinks").style.display = "none";   
    document.getElementById("drinks").style.display = "none";
    document.getElementById("infotabelle").style.display = "none";  
    document.getElementsByTagName("footer")[0].style.display = "none";
  }
  if ((window.location.pathname == '/') || (window.location.pathname.search("index") != -1 )) { /*nur f?r index.html*/ 
  /*console.log("index.html onload start | pathname: " + window.location.pathname);*/
    setBannerSizesToMenuSizes();
    /*loadYelp();*/
  }    
  if (window.location.pathname.search("kontakt") != -1 ) {  
    setMenueScrollBtnSizes(); 
    googleMaps();
  }
  if (!onlyIndex()) {  /*All Sites except index.html*/
    document.getElementById("header").getElementsByTagName("p")[0].addEventListener("click", function(){ window.location = "http://www.croque-francais.de/";});
  }
}
function clearAllSettings() {
  document.getElementById("header").removeAttribute("style"); 
  if (onlyKontakt() || onlyImpressum()) { 
    if (document.getElementById("logo")) {
      document.getElementsByTagName("body")[0].removeChild(document.getElementById("logo"));
    } 
    document.getElementById("header").removeAttribute("style");
    document.getElementById("backgroundScreen").removeAttribute("style"); 
  } 
  if (onlyIndex()) {    
    document.getElementById("backgroundPic").removeAttribute("style"); 
    document.getElementById("overlap_pics").removeAttribute("style");
    if (document.getElementById("corner-phone")) {
      document.getElementsByTagName("body")[0].removeChild(document.getElementById("corner-phone"));
    }  
    if (document.getElementById("banner-croque_before")) {
      document.getElementById("banner-croque").removeChild(document.getElementById("banner-croque_before"));
    } 
    if (document.getElementById("banner-drinks_before")) {
      document.getElementById("banner-drinks").removeChild(document.getElementById("banner-drinks_before"));
    }   
    if (document.getElementById("extra-heading")) {
      document.getElementById("infotabelle").removeChild(document.getElementById("infotabelle-heading"));
      document.getElementById("extras").removeChild(document.getElementById("extra-heading"));
    } 
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].removeAttribute("style");  
    document.getElementById("infotabelle").removeAttribute("style");
    document.getElementById("extras").removeAttribute("style");
  }  
  if (onlyIndex() || onlyKontakt()) {
    if (document.getElementById("telephone").getElementsByTagName("p")[1]) {
      document.getElementById("telephone").removeChild(document.getElementById("telephone").getElementsByTagName("p")[0]);
      var newNote = document.createElement("div");
      var newLink = document.createElement("a");
      newLink.href = "tel:+49040911921"; 
      newLink.innerHTML = "040 4 91 19 21";
      newNote.appendChild(newLink);
      document.getElementById("contact").removeChild(document.getElementById("contact").getElementsByTagName("hr")[0]);
      document.getElementById("telephone").insertBefore(newNote, document.getElementById("telephone").getElementsByTagName("p")[0]);
    }
  }  
  if (document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML.search("in") != -1) { 
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "Seit 34 Jahren Ihr Croque Laden!";
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[3].innerHTML = "Schreiben Sie mir doch.";
  } 
}
function changeSettings() {
  if (onlyIndex()) {
    document.getElementById("croque_specialty").getElementsByTagName("p")[33].innerHTML = "Cro. Burgunderbraten";
    document.getElementById("croque_specialty").getElementsByTagName("p")[36].innerHTML = "Cro. Schweinebraten"; 
    document.getElementById("telephone").getElementsByTagName("div")[0].getElementsByTagName("a")[0].innerHTML = "040 4 91 19 21";
  }
}
/**
  setzt die H�he von Menu-Scroll auf genaue Werte f�r Possition fixed
*/
function setMenueScrollBtnSizes()  {  
  var btnHeight =  document.getElementById("menue").clientHeight;
  var btnWidth =  document.getElementById("menue").offsetWidth;
  /*console.log("MenueBtn - " + btnHeight + " <-Height Width -> " + btnWidth);*/ 
  if (MenuOpen) {
    btnWidth = document.getElementById("header-menu-banner").offsetWidth; 
    if (document.body.offsetWidth < 421) { 
      document.getElementById("menue-scroll").style.width = (btnWidth * 0.3) + "px";  
    } else {          
      document.getElementById("menue-scroll").style.width = (btnWidth * 0.2) + "px";   
    }
  } else {   
    document.getElementById('menue-scroll').style.width = btnWidth + 'px'; 
  }
  document.getElementById('menue-scroll').style.position = "fixed";  
  
  /*Menu -> ul -> arrow*/
  document.getElementById("header-menue-croque-list-arrow").style.height = document.getElementById("header-menue-croques").clientHeight + "px";
} 
/**
  setzt die Banner Gr��en die des Header Element gleich
*/
function setBannerSizesToMenuSizes() {
  var headerHeight =  document.getElementById('header').clientHeight;
  var headerWidth =  document.getElementById('header').clientWidth;
  /*console.log("Header Sizes - " + headerHeight + " <-Height Width -> " + headerWidth);*/
  document.getElementById("banner-croque").style.height = headerHeight + 'px';
  document.getElementById("banner-croque").style.width = headerWidth + 'px'; 
  document.getElementById("banner-salads").style.height = headerHeight + 'px';
  document.getElementById("banner-salads").style.width = headerWidth + 'px';
  document.getElementById("banner-creps").style.height = headerHeight + 'px';
  document.getElementById("banner-creps").style.width = headerWidth + 'px'; 
  document.getElementById("banner-drinks").style.height = headerHeight + 'px';
  document.getElementById("banner-drinks").style.width = headerWidth + 'px'; 
}
/**
  ermittelt die Scroll Position (oberster Wert ganz oben des Viewports)
*/  
function getScrollHeight() {
  var de = document.documentElement;
  var myHeight = window.pageYOffset || de.scrollTop || document.body.scrollTop;
  return myHeight;  
}
/**
  ermittelt die H�her �ber dem Croque Banner
*/
function getHeightAboveBannerCroque() {
  var myheight = document.getElementById('header').offsetHeight;
  myheight += document.getElementById('contact').offsetHeight; 
  return myheight;
} 
function touchMoveEvent(e) {
    e.preventDefault();
  } 
/**
  open and slide Menu in and no scroll is possible 
*/
var MenuOpen = false;
function btnMenu() { 
  if (MenuOpen) {   
    /*Menu wird jetzt geschlossen*/ 
    document.getElementById("backgroundScreen").style.height = "0px";    
    document.getElementById("header-menu").className = "";
    document.getElementById("header").className = "";
    document.body.className = "";  
    
    /*refresh Menu Btn Image*/ 
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].src = "pics/menue94x46_transparent-white.png";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].removeChild(document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("source")[0]);
    var refreshSource1 = document.createElement("source"); 
    refreshSource1.media = "(min-width: 320px) and (max-width: 1024px)";
    refreshSource1.srcset = "pics/menue94x46_transparent-white.png";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].insertBefore(refreshSource1, document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0]);
    
    MenuOpen = false;
    onresizeEvent();
  } else { 
    /*Menue wird nun ge�ffnet*/           
    document.getElementById("backgroundScreen").style.height = "100%";
    document.getElementById("header-menu").className = "header-menu-active";    
    
    /*refresh Menu Btn Image*/ 
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].src = "pics/menuClose100x100_t.png";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].removeChild(document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("source")[0]);
    var refreshSource1 = document.createElement("source"); 
    refreshSource1.media = "(min-width: 320px) and (max-width: 1024px)";
    refreshSource1.srcset = "pics/menuClose100x100_t.png";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].insertBefore(refreshSource1, document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0]);
    
    document.body.className = "body-active"; 
    document.getElementById("header").className = "header-active"   
    MenuOpen = true;
  }
}
function showMenuCroques() {
  if (document.getElementById("header-menue-croque-list-active") == null) {
     /*wird nun eingeblended*/   
     document.getElementsByClassName("header-menue-croque-list")[0].id = "header-menue-croque-list-active";
     document.getElementById("header-menue-croque-list-arrow").getElementsByTagName("img")[0].src="pics/arrowUp.png";
  } else {    
     /*wird nun ausgeblended*/
     document.getElementById("header-menue-croque-list-active").id = "";
     document.getElementById("header-menue-croque-list-arrow").getElementsByTagName("img")[0].src="pics/arrowDown.png";
  }
}
/**
  fade the extra menue in or out
*/ 
var ExtraBtnAktive = false;  
var extrasHeight = 0;         /**current Height of the extra Div Elem*/
var amoundOfVisibleItems = 0; /**amound of visible p Elems in Extra*/
var itemHeight = 0;           /**necessary for var extraHeight*/
/*Extras SLIDE DOWN*/
function extraSlideDown() { 
  var ex = document.getElementById("extras");
  extrasHeight +=  ex.getElementsByTagName("p")[amoundOfVisibleItems].offsetHeight;
  ex.style.height = extrasHeight + "px";
  if (ex.offsetHeight >= itemHeight ) {
    ex.getElementsByTagName("p")[amoundOfVisibleItems].className += " extra-item-visible";
    if (amoundOfVisibleItems < 8) {
      ex.getElementsByTagName("p")[amoundOfVisibleItems+1].className += " extra-item-visible";  
    }
    amoundOfVisibleItems += 2;
    itemHeight += (amoundOfVisibleItems < 9) ? ex.getElementsByTagName("p")[amoundOfVisibleItems].offsetHeight : 0;  
  }
  if (amoundOfVisibleItems < 10) {
    var ani = setTimeout( extraSlideDown, 150);
  }
}  
/*Extras SLIDE UP*/
function extraSlideUp() { 
  var ex = document.getElementById("extras");  
  itemHeight -=  extrasHeight / 5;
  ex.style.height = (itemHeight < 0 ) ? "0px" :  itemHeight + "px";
  if (itemHeight > 0) {
    var ani = setTimeout( extraSlideUp, 100);
  }
}                                        
function onClickExtras() { 
  if (ExtraBtnAktive) {
    /*nun ausblenden*/
    extrasHeight = document.getElementById("extras").offsetHeight; 
    itemHeight = extrasHeight;
    extraSlideUp();
    var i = 0;   
    while (typeof document.getElementById("extras").getElementsByTagName("p")[i] != 'undefined') { 
      document.getElementById("extras").getElementsByTagName("p")[i].classList.remove("extra-item-visible");
      i++;  
    }
    ExtraBtnAktive = false;
    document.getElementById("btn-extras").getElementsByTagName("img")[0].src="pics/arrowDown.png";
    document.getElementById("event_extras_1").classList.remove("event_extras_1-visible");
  } else {   
    /*nun einblenden*/ 
    amoundOfVisibleItems = 0;
    extrasHeight = 0; 
    itemHeight = document.getElementById("extras").getElementsByTagName("p")[0].offsetHeight;
    extraSlideDown();   
    ExtraBtnAktive = true;
    document.getElementById("btn-extras").getElementsByTagName("img")[0].src="pics/arrowUp.png";
    document.getElementById("event_extras_1").className += "event_extras_1-visible";
  }    
}  
/**
  By click on the Route Symbol forwarding to Google Maps 
*/
function routeBtn() {
  if (window.confirm("Sie werden nun zu Google Maps weitergeleitet.")) {
    window.open("https://www.google.com/maps/dir//Croque+Francais,+Stellinger+Weg+8,+20255+Hamburg,+Deutschland/@53.5753993,9.9465966,16z");
  }
} 

function loadYelp() {      
 /*(function(d, t) {
   var g = d.createElement(t);
   var s = d.getElementsByTagName(t)[0];
   g.src = "https://yelp.de/biz_badge_js/de_DE/rrc/Gy1J3Czpmshl3xyDWPKeHg.js";
   s.parentNode.insertBefore(g, s);
 }(document, 'script'));*/            
}

function onresizeEvent() {
  setMenueScrollBtnSizes();
  if (onlyIndex()) { /*nur f�r index.html*/
    setBannerSizesToMenuSizes(); 
    if ((document.body.offsetWidth < 421) && InfoBtnCroqueActive) { 
      btnCroqueInfo();
    }   
    if ((document.body.offsetWidth < 421) && InfoBtnSalatActive) {  
      btnSalatInfo();                                                               
    }  
  }    
  if (onlyKontakt()) {
    /*Problem bei Viewport Höhe, der Banner ganz unten für zurück -> IPhone beträgt die Höhe ca. 15% s.u.*/
    if (((getScrollHeight()) > (getViewpotHeight) * 1.15) || ((getScrollHeight()) < (getViewpotHeight()) * 0.85)) {
      googleMaps(); 
    }  
  }
}

/*******************TABLET VERSION***********/ 
var InfoBtnCroqueActive = false;
function btnCroqueInfo() {
  if (! InfoBtnCroqueActive) {
    var newObjekt = document.createElement("p");
    newObjekt.innerHTML = "Zu allen Croques wird auf Wunsch Salat/Kraut, Zwiebeln, Pfeffer, Knoblauch sowie unsere einzigartige hausgemachte Sauce serviert!"; 
    newObjekt.style.color = "white"; 
    newObjekt.style.backgroundColor = "#cccccc";
    newObjekt.style.padding = "0.5em 1em 0.5em 1em"; 
    newObjekt.style.order = "5";
    newObjekt.id = "infoBtnCroque";
    document.body.insertBefore(newObjekt, document.getElementById("croque"));
    document.getElementById("banner-croque").getElementsByTagName("div")[2].getElementsByTagName("img")[0].src = "pics/menuClose100x100_t_smaller_blue.png";
    InfoBtnCroqueActive = true; 
  } else {   
    if (typeof document.getElementById("infoBtnCroque")) {
      document.body.removeChild(document.getElementById("infoBtnCroque")); 
      document.getElementById("banner-croque").getElementsByTagName("div")[2].getElementsByTagName("img")[0].src = "pics/info_icon_blue.png";
    }
    InfoBtnCroqueActive = false;
  }
}
var InfoBtnSalatActive = false;
function btnSalatInfo() {
  if (! InfoBtnSalatActive) { 
    var newObjekt = document.createElement("p");
    newObjekt.innerHTML = "Zu jedem Salat werden auf Wunsch noch Zwieblen, Knoblauch/Pfeffer, sowie unsere einmalige Salat dressing Souce serviert!"; 
    newObjekt.style.color = "white"; 
    newObjekt.style.backgroundColor = "#cccccc";
    newObjekt.style.padding = "0.5em 1em 0.5em 1em";  
    newObjekt.style.order = "10";
    newObjekt.id = "btnSalatInfo";
    document.body.insertBefore(newObjekt, document.getElementById("salads"));
    document.getElementById("banner-salads").getElementsByTagName("div")[2].getElementsByTagName("img")[0].src = "pics/menuClose100x100_t_smaller_blue.png";
    InfoBtnSalatActive = true; 
  } else {   
    if (typeof document.getElementById("btnSalatInfo")) {
      document.body.removeChild(document.getElementById("btnSalatInfo")); 
      document.getElementById("banner-salads").getElementsByTagName("div")[2].getElementsByTagName("img")[0].src = "pics/info_icon_blue.png";
    }
    InfoBtnSalatActive = false;
  }
}
