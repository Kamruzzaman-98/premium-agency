
// Initialize AOS

AOS.init({

duration:1000,

once:true

});


console.log("ABC Web Solutions Loaded");

const navbar = document.querySelector(".navbar");
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

        if(topbar){
            topbar.classList.add("hide");
        }

    } else {

        navbar.classList.remove("scrolled");

        if(topbar){
            topbar.classList.remove("hide");
        }

    }

});


// Back To Top

const backTop = document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

backTop.classList.add("show");

}

else{

backTop.classList.remove("show");

}


});


// Counter Animation


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target=+counter.getAttribute("data-target");


const current=+counter.innerText;


const increment=target/100;



if(current < target){


counter.innerText=Math.ceil(current+increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText=target;


}


}


updateCounter();


});