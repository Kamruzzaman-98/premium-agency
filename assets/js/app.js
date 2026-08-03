// ===============================
// MOBILE NAVBAR
// ===============================


const menuToggle = document.querySelector(
".menu-toggle"
);


const menu = document.querySelector(
".menu"
);



if(menuToggle){


menuToggle.addEventListener(
"click",
()=>{


menu.classList.toggle(
"active"
);


});


}







// ===============================
// NAVBAR SCROLL EFFECT
// ===============================



window.addEventListener(
"scroll",
()=>{


const header =
document.querySelector(
".header"
);



if(window.scrollY > 50){


header.classList.add(
"scrolled"
);



}

else{


header.classList.remove(
"scrolled"
);


}



});