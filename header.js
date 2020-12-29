origBody = document.body.innerHTML;
document.body.innerHTML = "<header><a href='index.html'><img src='img/favicon.png' id='chenIcon' /></a><a href='cutouts.html'>cutouts</a><a href='animations.html'>animations</a><a href='projects.html'>projects</a></header>" + origBody;
document.body.innerHTML += "<footer><a href='https://www.facebook.com/chen.lev.98/' target='_blank'><img src='img/facebook.svg' /></a><a href='https://www.instagram.com/chen_lev_on_paper/' target='_blank'><img src='img/instagram.svg' /></a></footer>"

var x = document.getElementsByTagName("header")[0].getElementsByTagName("a");
var i;
for (i = 0; i < x.length; i++) {
    if(x[i].innerHTML == window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1, window.location.pathname.lastIndexOf("."))){
        x[i].className += "selected";
    }
}