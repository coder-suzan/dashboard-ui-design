// Add active class to the menulink for showing the button active color
var header = document.getElementById("activeMenu");
var btns = header.getElementsByClassName("menuLink");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// mobile menu
function openNav() {
 var mobileMenu = document.getElementById("mobileMenuShow");
  mobileMenu.style.width = "240px";
  mobileMenu.style.display = "block";
  
}

function closeNav() {
  var mobileMenu = document.getElementById("mobileMenuShow");
    mobileMenu.style.width = "0";
    mobileMenu.style.display = "none";
}


var menuBar = document.getElementById("mobileMenuShow");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == menuBar) {
    menuBar.style.display = "none";
  }
}