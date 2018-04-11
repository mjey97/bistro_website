function onloadEvent() {
  /*weiterleitung bei nicht ausreichender browser version*/
  var styleObj = document.body; 
  if ((window.getComputedStyle(styleObj,null).display != "flex")) {
    //Veralteter Browser //  Flex wird nicht unterst�tzt  
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  } 
  clearAllSettings();
  changeSettings(); 
  setSettings();  
}
/******************************************************************************/
function onlyIndex() {
  return ((window.location.pathname == '/') || (window.location.pathname.search("index") != -1 )); 
}
function onlyKontakt() {     
  return (window.location.pathname.search("kontakt") != -1 ); 
}
function onlyImpressum() {
  return (window.location.pathname.search("impressum") != -1 ); 
}
function getViewportWidth() {
  //return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;     
  note = document.getElementsByTagName("body")[0]; 
  viewWidth = note.currentStyle || window.getComputedStyle(note); 
  return Math.floor(parseFloat(viewWidth.width));
    
}
function getViewportHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
function getCurrentScrollHeight() {
  return (window.pageYOffset || document.documentElement.scrollTop);
}
/*wenn man auf die per js ver�nderten/zugesetzen Values zugreifen will, ansonsten -> client/offset width/height*/
function getStyle(styleObjekt) {
  return styleObjekt.currentStyle || window.getComputedStyle(styleObjekt); 
}
/******************************************************************************/
var CORNER_ON = false;
/******************************************************************************/
function clearAllSettings() {
  document.getElementById("menue-scroll").removeAttribute("style");
  if (onlyIndex()) { /*only for index.html*/ 
    document.getElementById("header-menue-croque-list-arrow").removeAttribute("style");
    document.getElementById("banner-croque").removeAttribute("style"); 
    document.getElementById("banner-salads").removeAttribute("style"); 
    document.getElementById("banner-creps").removeAttribute("style"); 
    document.getElementById("banner-drinks").removeAttribute("style");
  }
  document.getElementById("backgroundScreen").removeAttribute("style");   
  document.getElementById("header-menu").className = "";
  document.getElementById("header").className = "";
  document.body.className = "";     
}

function changeSettings() {
  if (onlyIndex()) {
    /*Croque*/
    document.getElementById("croque_specialty").getElementsByTagName("p")[33].innerHTML = "Croque Burgunderbraten";
    document.getElementById("croque_specialty").getElementsByTagName("p")[36].innerHTML = "Croque Schweinebraten";
    document.getElementById("header").style.display = "block";
    /*!!!!!!!!!!!!!!!!!!!!!! down*/ 
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].style.height = (document.getElementById("header").offsetHeight / 1.5) + "px";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].style.width = (document.getElementById("header").offsetHeight / 1.5) + "px";
    document.getElementById("menue-scroll").getElementsByTagName("picture")[0].getElementsByTagName("img")[0].id = "menu-scroll_img-active";
  }
  if (onlyIndex() || onlyKontakt()) {  
    if (document.getElementById("telephone").getElementsByTagName("div")[0]) { 
      document.getElementById("telephone").removeChild(document.getElementById("telephone").getElementsByTagName("div")[0]);
    }
    var newNote = document.createElement("p");
    newNote.innerHTML = "Tel.: 040 4911921";
    document.getElementById("telephone").insertBefore(newNote, document.getElementById("telephone").getElementsByTagName("p")[0]);
    newNote = document.createElement("hr");
    document.getElementById("contact").insertBefore(newNote, document.getElementById("contact").getElementsByTagName("p")[0]);
  }  
  if (onlyKontakt()) {
    document.getElementById("contact").style.display = "none";
    document.getElementById("header").style.display = "none"; 
  }  
  /*Footer*/  /*all Webpages*/
  document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "Seit 34 Jahren Ihr Croque Laden in Eimsb&uuml;ttel!";
  document.getElementsByTagName("footer")[0].getElementsByTagName("p")[3].innerHTML = "Schreiben Sie mir, oder bewerten Sie uns einfach!";
}
function setSettings() {
  document.getElementById("header").style.position = "fixed"; 
  /*backgroundScreen - start the page*/
  document.getElementById("backgroundScreen").classList = "backgroundScreen_active";    
  setTimeout(function(){ document.getElementById("backgroundScreen").style.height = "0px"; document.getElementById("backgroundScreen").style.width = "0px"; }, 3000);
  if (onlyIndex()) { /*only for index.html*/  
    /*Index images */
    var viewportHeight = getViewportHeight();
    var viewportWidth = getViewportWidth();
    var CF_font_Height = getStyle(document.getElementById("CF_font")).height;  /*headline*/ 
    /*Index images - backgroundPic*/
    document.getElementById("backgroundPic").style.top = CF_font_Height;
    document.getElementById("backgroundPic").style.height = viewportHeight - Math.floor(parseFloat(CF_font_Height)) + "px";  
    /*Index images - saturation*/   
    document.getElementById("saturation").classList = "saturation_active";
    /*Index images - front arrow*/
    document.getElementById("overlap_pics").style.width = (viewportWidth/4) + "px";  
    document.getElementById("overlap_pics").style.height = (viewportHeight/2) + "px"; 
    document.getElementById("overlap_pics").style.top = Math.floor(parseFloat(CF_font_Height)) + (viewportHeight/7) + "px";       
    document.getElementById("overlap_pics").classList = "overlap_pics_active";
    /*Index images - back-show - CL Image*/   
    document.getElementById("back-show").style.width = viewportWidth + "px";  
    document.getElementById("back-show").style.height = viewportHeight + "px";
    document.getElementById("back-show").style.top = CF_font_Height;
    document.getElementById("back-show").getElementsByTagName("div")[0].style.height = (viewportHeight - parseFloat(CF_font_Height)) + "px";
    document.getElementById("back-show").getElementsByTagName("div")[1].style.height = (viewportHeight - parseFloat(CF_font_Height)) + "px";
    document.getElementById("back-show").getElementsByTagName("div")[2].style.height = (viewportHeight - parseFloat(CF_font_Height)) + "px";
    document.getElementById("back-show").getElementsByTagName("div")[3].style.height = (viewportHeight - parseFloat(CF_font_Height)) + "px";
    document.getElementById("back-show").getElementsByTagName("div")[4].style.height = (viewportHeight - parseFloat(CF_font_Height)) + "px";
    document.getElementById("back-show").getElementsByTagName("div")[0].style.width = viewportWidth + "px";
    document.getElementById("back-show").getElementsByTagName("div")[1].style.width = viewportWidth + "px";
    document.getElementById("back-show").getElementsByTagName("div")[2].style.width = viewportWidth + "px";
    document.getElementById("back-show").getElementsByTagName("div")[3].style.width = viewportWidth + "px";
    document.getElementById("back-show").getElementsByTagName("div")[4].style.width = viewportWidth + "px";   
    document.getElementById("contact").style.display = "initial";
    /*Contact*/
     document.getElementById("telephone").style.opacity = "1";
    /*Extras Banner*/
    var newNote = document.createElement("p");
    newNote.innerHTML = "Extras";  
    newNote.id = "extra-heading";
    document.getElementById("extras").insertBefore(newNote, document.getElementById("extras").getElementsByTagName("p")[0]);
    /*Extras Infotable*/
    newNote = document.createElement("p");
    newNote.innerHTML = "Inhaltsinformationen";  
    newNote.id = "infotabelle-heading";
    document.getElementById("infotabelle").insertBefore(newNote, document.getElementById("infotabelle").getElementsByTagName("p")[0]);
    if (document.getElementById("extras").offsetHeight > document.getElementById("infotabelle").offsetHeight) {
      document.getElementById("infotabelle").style.height = document.getElementById("extras").offsetHeight + "px";
      document.getElementById("infotabelle").style.paddingBottom = "0px";
    } else { 
      document.getElementById("extras").style.height = document.getElementById("infotabelle").offsetHeight + "px";
      document.getElementById("extras").style.paddingBottom = "0px";
    } 
    /*Croque Banner IMG right*/
    var newNoteBefore = document.createElement("div");
    newNoteBefore.id = "banner-croque_before";   
    newNoteBefore.style.height = document.querySelector("#banner-croque img").naturalHeight + "px";
    newNoteBefore.style.width = (getViewportWidth() / 4) + "px";
    document.getElementById("banner-croque").insertBefore(newNoteBefore, document.getElementById("banner-croque").getElementsByTagName("div")[0]);
    /*Drink Banner IMG right*/
    var newNoteBefore = document.createElement("div");
    newNoteBefore.id = "banner-drinks_before";   
    newNoteBefore.style.height = document.querySelector("#banner-drinks img").naturalHeight + "px";
    newNoteBefore.style.width = (getViewportWidth() / 4) + "px";
    document.getElementById("banner-drinks").insertBefore(newNoteBefore, document.getElementById("banner-drinks").getElementsByTagName("div")[0]);
  }
  if (onlyKontakt() || onlyImpressum()) { 
    /*console.log("ps.js only impressum append new Note before Header -> logo")*/
    var newNote = document.createElement("section");
    newNote.id = "logo"; 
    newNote.addEventListener("click", function() {window.location='http://croque-francais.de';});
    var newNoteImg = document.createElement("img");
    newNoteImg.id = "logo_img";
    newNote.appendChild(newNoteImg);
    document.getElementsByTagName("body")[0].insertBefore(newNote, document.getElementById("header")); 
    document.getElementById("logo_img").style.height = document.getElementById("logo").offsetWidth + "px";
    document.getElementById("logo_img").style.width = document.getElementById("logo").offsetWidth + "px"; 
    document.getElementById("logo_img").src = "pics/logo.png"; 
  }   
  if (onlyKontakt()) {  
    googleMaps();
  }
}

var EVENT_BANNER_CROQUE_HIDE = true;

function scrollBannerCroque(e) { 
  var contactOffset = (document.getElementById("contact").offsetHeight);   
  var actualHeight = getCurrentScrollHeight(); 
  var viewportHeight = window.innerHeight; 
  if (EVENT_BANNER_CROQUE_HIDE && (actualHeight > (viewportHeight + (contactOffset /2)))) {   
    document.getElementById("contact").setAttribute("style", "display: initial; margin-Top: 0px;");
    document.getElementById("header").setAttribute("style", "display: block; position: static;");
    document.getElementById("banner-croque").classList = "showup_banner-croque"; 
    var croqueBannerHeight = document.getElementById("banner-croque").getElementsByTagName("div")[1].getElementsByTagName("picture")[0].getElementsByTagName("img")[0];
    croqueBannerHeight = croqueBannerHeight.currentStyle || window.getComputedStyle(croqueBannerHeight); 
    document.getElementById("banner-croque").style.height = Math.floor(parseFloat(croqueBannerHeight.height)) + "px";
    EVENT_BANNER_CROQUE_HIDE = false;
  }
}

function onresizeEvent() {
  if (onlyKontakt() || onlyImpressum()) { 
    document.getElementById("logo_img").style.height = document.getElementById("logo").offsetWidth + "px";
    document.getElementById("logo_img").style.width = document.getElementById("logo").offsetWidth + "px";
  }  
  if (onlyIndex()) { 
    /*Index - images*/        
    var CF_font_Height = getStyle(document.getElementById("CF_font")).height;  /*headline*/
    /*Index - images - overlap_pics*/
    document.getElementById("overlap_pics").style.width = (getViewportWidth()/4) + "px";  
    document.getElementById("overlap_pics").style.height = (getViewportHeight()/2) + "px"; 
    document.getElementById("overlap_pics").style.top = Math.floor(parseFloat(CF_font_Height)) + (getViewportHeight()/7) + "px";
    /*Index - images - font_arrow*/
    document.getElementById("back-show").style.top = document.getElementById("CF_font").offsetHeight + "px"; 
    document.getElementById("back-show").getElementsByTagName("div")[4].style.width = getViewportWidth() + "px"; 
    document.getElementById("back-show").getElementsByTagName("div")[4].style.height = (getViewportHeight() - document.getElementById("CF_font").offsetHeight) + "px";
    /*Croque IMG*/  
    document.getElementById("banner-croque_before").style.width = (getViewportWidth() / 4.5) + "px";
    document.getElementById("banner-drinks_before").style.width = (getViewportWidth() / 4.5) + "px"; 
    if (document.getElementById("corner-phone")) {
      document.getElementById("corner-phone").style.width = (getViewportWidth() / 12) + "px"; 
      document.getElementById("corner-phone").style.height = (getViewportWidth() / 12) + "px";
    }  
    /*Extras Infotable*/  
    document.getElementById("extras").removeAttribute("style"); 
    document.getElementById("infotabelle").removeAttribute("style"); 
    if (document.getElementById("extras").offsetHeight > document.getElementById("infotabelle").offsetHeight) {
      document.getElementById("infotabelle").style.height = document.getElementById("extras").offsetHeight + "px";
      document.getElementById("infotabelle").style.paddingBottom = "0px";
    } else { 
      document.getElementById("extras").style.height = document.getElementById("infotabelle").offsetHeight + "px";
      document.getElementById("extras").style.paddingBottom = "0px";
    } 
  }
}
function onscrollEvent() { 
  if (onlyIndex()) { /*only for index.html*/ 
    /*if (EVENT_BANNER_CROQUE_HIDE) {
      scrollBannerCroque(e);
    } */ 
    /*CORNER PHONE*/ 
    if ((! CORNER_ON) && (getCurrentScrollHeight() >= (1.5 * getViewportHeight()))) { 
      if (!document.getElementById("corner-phone")) { 
        var newNote = document.createElement("div");
        newNote.id = "corner-phone";
        newNote.style.width = (getViewportWidth() / 12) + "px"; 
        newNote.style.height = (getViewportWidth() / 12) + "px";
        var newNoteImg = document.createElement("img");
        newNoteImg.src = "pics/ecke_250x250.png";
        newNote.appendChild(newNoteImg);
        document.getElementsByTagName("body")[0].insertBefore(newNote, document.getElementById("header")); 
      }
      document.getElementById("corner-phone").classList = "corner-phone_active";
      CORNER_ON = true;  
    } else if ((CORNER_ON) && (getCurrentScrollHeight() < (1.5 * getViewportHeight()))) {
      document.getElementById("corner-phone").classList = "corner-phone_inactive";
      CORNER_ON = false;
    }
  }
}    