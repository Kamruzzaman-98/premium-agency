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



// ===============================
// DARK LIGHT MODE
// ===============================



const themeButton = document.querySelector(
".theme-toggle"
);



const body = document.body;



if(themeButton){



themeButton.addEventListener(
"click",
()=>{


body.classList.toggle(
"dark"
);



if(body.classList.contains("dark")){


themeButton.innerHTML="☀️";


localStorage.setItem(
"theme",
"dark"
);


}

else{


themeButton.innerHTML="🌙";


localStorage.setItem(
"theme",
"light"
);


}



});


}






// LOAD SAVED THEME



if(
localStorage.getItem("theme")
==="dark"
){


body.classList.add(
"dark"
);


if(themeButton){

themeButton.innerHTML="☀️";

}


}