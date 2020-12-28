document.addEventListener("click", myFunction);

function myFunction(e) {
  if(e.target.tagName == "img" || e.target.tagName == "IMG"){
      console.log(e.target.src)
      document.getElementById("bigInner").style.backgroundImage = "url("+e.target.src+")";
      document.getElementById("bigImage").style.opacity = "1";
      document.getElementById("bigImage").style.pointerEvents = "all";
  }
  if(e.target.id == "bigImage" || e.target.id == "bigInner"){
    document.getElementById("bigImage").style.opacity = "0";
    document.getElementById("bigImage").style.pointerEvents = "none";
  }
}