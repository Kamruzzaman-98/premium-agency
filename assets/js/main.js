/* =========================
   ABC PREMIUM HERO JS
========================= */



// =========================
// PAGE LOAD REVEAL
// =========================


const heroElements = document.querySelectorAll(
".badge, .hero h1, .hero p, .hero-buttons, .trust, .mockup"
);



window.addEventListener("load",()=>{


heroElements.forEach((element,index)=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";



setTimeout(()=>{


element.style.transition="1s ease";


element.style.opacity="1";


element.style.transform="translateY(0)";



},300 + index * 200);



});


});







// =========================
// 3D MOUSE MOVEMENT
// =========================


const mockup =
document.querySelector(".mockup");


const hero =
document.querySelector(".hero");



hero.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth - .5);


let y =
(e.clientY / window.innerHeight - .5);




mockup.style.transform =

`

rotateX(${y*10}deg)

rotateY(${x*15}deg)

rotateZ(-8deg)

`;



});





hero.addEventListener(
"mouseleave",
()=>{


mockup.style.transform =

"rotate(-8deg)";


});








// =========================
// BACKGROUND PARALLAX
// =========================


const blobs =
document.querySelectorAll(".blob");



document.addEventListener(
"mousemove",
(e)=>{


let x =
e.clientX / window.innerWidth;


let y =
e.clientY / window.innerHeight;



blobs.forEach((blob,index)=>{


blob.style.transform =

`

translate(

${x*(index+1)*30}px,

${y*(index+1)*30}px

)

`;



});



});








// =========================
// MAGNETIC BUTTON
// =========================


const buttons =
document.querySelectorAll(
".primary-btn,.nav-btn"
);



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const box =
button.getBoundingClientRect();



const x =
e.clientX - box.left - box.width/2;



const y =
e.clientY - box.top - box.height/2;



button.style.transform =

`

translate(

${x*.15}px,

${y*.15}px

)

`;



});






button.addEventListener(
"mouseleave",
()=>{


button.style.transform="translate(0,0)";


});


});







// =========================
// SMOOTH SCROLL
// =========================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});



// =========================
// TRUST CARD REVEAL
// =========================


const trustCards =
document.querySelectorAll(".trust-card");



window.addEventListener("scroll",()=>{


trustCards.forEach((card,index)=>{


const position =
card.getBoundingClientRect().top;



if(position < window.innerHeight-100){


setTimeout(()=>{


card.style.opacity="1";

card.style.transform="translateY(0)";


},index*150);



}


});


});


// =========================
// SERVICE REVEAL
// =========================


const serviceItems =
document.querySelectorAll(".service-item");



window.addEventListener("scroll",()=>{


serviceItems.forEach((item,index)=>{


let top =
item.getBoundingClientRect().top;



if(top < window.innerHeight-100){


setTimeout(()=>{


item.classList.add("show");


},index*150);


}


});


});



// =========================
// PORTFOLIO ANIMATION
// =========================


const projects =
document.querySelectorAll(".project-card");



window.addEventListener("scroll",()=>{


projects.forEach((project,index)=>{


let position =
project.getBoundingClientRect().top;



if(position < window.innerHeight-100){


setTimeout(()=>{


project.classList.add("project-show");


},index*150);


}



});


});



// =========================
// PROCESS REVEAL
// =========================


const processItems =
document.querySelectorAll(".process-item");



window.addEventListener("scroll",()=>{


processItems.forEach((item,index)=>{


let position =
item.getBoundingClientRect().top;



if(position < window.innerHeight-100){


setTimeout(()=>{


item.classList.add("process-show");


},index*150);


}


});


});



// =========================
// TESTIMONIAL REVEAL
// =========================


const reviews =
document.querySelectorAll(".testimonial-card");



window.addEventListener("scroll",()=>{


reviews.forEach((card,index)=>{


let top =
card.getBoundingClientRect().top;



if(top < window.innerHeight-100){


setTimeout(()=>{


card.classList.add("review-show");


},index*150);


}


});


});



// =========================
// SCROLL PROGRESS
// =========================


const progress =
document.querySelector(".scroll-progress");



window.addEventListener("scroll",()=>{


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progressWidth =
(window.scrollY / height) * 100;



progress.style.width =
progressWidth+"%";


});







// =========================
// CUSTOM CURSOR
// =========================


const cursor =
document.querySelector(".cursor");


const dot =
document.querySelector(".cursor-dot");



document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";



dot.style.left =
e.clientX+"px";


dot.style.top =
e.clientY+"px";


});







// =========================
// CURSOR HOVER EFFECT
// =========================


const hoverElements =
document.querySelectorAll(
"a,button,.service-item,.project-card"
);



hoverElements.forEach(item=>{


item.addEventListener(
"mouseenter",
()=>{


cursor.style.transform =
"translate(-50%,-50%) scale(1.8)";


});




item.addEventListener(
"mouseleave",
()=>{


cursor.style.transform =
"translate(-50%,-50%) scale(1)";


});


});