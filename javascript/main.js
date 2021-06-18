/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle =document.getElementById('nav-toggle'),
navClose =document.getElementById('nav-close')



if(navToggle){
navToggle.addEventListener('click',()=>{
navMenu.classList.add('show-menu')
})
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function workexptyp(workdesc) {
    var i;
    var x = document.getElementsByClassName("workd");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(workdesc).style.display = "block";  
  }

  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("proj-show") == -1) {
      x.className += " proj-show";
      
      
    } else { 
      x.className = x.className.replace("proj-show", "");
    
    }
  }

  function myFunctionwork(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("proj-show") == -1) {
      x.className += " proj-show";
      
      
    } else { 
      x.className = x.className.replace("proj-show", "");
    
    }
  }

 

