 window.addEventListener(
"scroll",
()=>{

let header=document.querySelector("header");


if(window.scrollY>50){

header.style.background="#090d20";

}
else{

header.style.background="transparent";

}


});


// HERO BACKGROUND ANIMATION


const animationBox = document.getElementById(
"hero-animation"
);



const circles = [

{
class:"circle-one",
x:0,
y:0,
speed:.4
},

{
class:"circle-two",
x:0,
y:0,
speed:.3
},

{
class:"circle-three",
x:0,
y:0,
speed:.5
}


];



circles.forEach(item=>{


let div=document.createElement("div");


div.className=
"animated-circle "+item.class;


animationBox.appendChild(div);



item.element=div;


});





document.addEventListener(
"mousemove",
(e)=>{


let mouseX =
e.clientX / window.innerWidth - .5;


let mouseY =
e.clientY / window.innerHeight - .5;



circles.forEach(circle=>{


circle.element.style.transform =

`
translate(
${mouseX * 40 * circle.speed}px,
${mouseY * 40 * circle.speed}px
)

`;



});



});



// PREMIUM HERO PARTICLES


const particleBox = document.getElementById(
"particles"
);



if(particleBox){


for(let i=0;i<35;i++){


let particle=document.createElement("span");


particle.className="particle";



particle.style.left =
Math.random()*100+"%";



particle.style.animationDuration =
(8 + Math.random()*12)+"s";



particle.style.animationDelay =
Math.random()*8+"s";



let size =
3 + Math.random()*6;


particle.style.width=size+"px";

particle.style.height=size+"px";



particleBox.appendChild(particle);


}


}





// MOUSE PARALLAX EFFECT


document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX / window.innerWidth - .5);



const y =
(e.clientY / window.innerHeight - .5);



const grid =
document.querySelector(".grid");


const light =
document.querySelector(".light");


const purple =
document.querySelector(".purple-light");




if(grid){

grid.style.transform =
`translate(${x*15}px,${y*15}px)`;

}



if(light){

light.style.transform =
`translate(${x*30}px,${y*30}px)`;

}



if(purple){

purple.style.transform =
`translate(${x*-20}px,${y*-20}px)`;

}


});