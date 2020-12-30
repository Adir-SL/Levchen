document.addEventListener("click", myFunction);
// document.addEventListener("touchstart", startFunc);

function myFunction(e) {
  if(e.target.tagName == "img" || e.target.tagName == "IMG" && e.target.id !== "chenIcon"){
      document.getElementById("bigInner").style.backgroundImage = "url("+e.target.src+")";
      document.getElementById("bigImage").style.opacity = "1";
      document.getElementById("bigImage").style.pointerEvents = "all";
  }
  if(e.target.id == "bigImage" || e.target.id == "bigInner"){
    document.getElementById("bigImage").style.opacity = "0";
    document.getElementById("bigImage").style.pointerEvents = "none";
  }
}

// function startFunc(e){
//   console.log(e.touchs[0].clientX);
// }
document.getElementById("bigImage").addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
}, false);

document.getElementById("bigImage").addEventListener('touchend', function(e) {
  // Cache the client X/Y coordinates
  deltaX = e.changedTouches[0].clientX - clientX;
  temp = document.getElementById("bigInner").style.backgroundImage;
  tempBef = temp.slice(0,temp.lastIndexOf("_")+1);
  tempAft = temp.slice(temp.lastIndexOf("."), temp.length);
  temp = temp.slice(temp.lastIndexOf("_")+1, temp.lastIndexOf("."));
  temp = Number(temp);
  if(deltaX < 0){
    if(Number(temp) > document.getElementsByTagName("img").length - 4){
      document.getElementById("bigImage").style.opacity = "0";
      document.getElementById("bigImage").style.pointerEvents = "none";
    }else{
      document.getElementById("bigInner").style.backgroundImage = tempBef+(Number(temp)+1)+tempAft;
    }
  }else{
    if(Number(temp) == 1){
      document.getElementById("bigImage").style.opacity = "0";
      document.getElementById("bigImage").style.pointerEvents = "none";
    }else{
      document.getElementById("bigInner").style.backgroundImage = tempBef+(Number(temp)-1)+tempAft;
    }
  }
}, false);