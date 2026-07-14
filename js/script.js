/* =========================
   สร้างตัวเลข Animation
========================= */


const background = document.querySelector(".background-number");


const numbers = " 123456789 - + * 67 ";


function createNumber(){


    const span = document.createElement("span");


    span.className = "number";


    span.innerHTML =

    numbers[Math.floor(Math.random()*numbers.length)];



    span.style.left =

    Math.random()*100 + "%";



    span.style.animationDuration =

    (5 + Math.random()*10) + "s";



    span.style.fontSize =

    (20 + Math.random()*40) + "px";



    background.appendChild(span);



    setTimeout(()=>{


        span.remove();


    },15000);



}





setInterval(createNumber,200);





/* =========================
   Scroll Animation
========================= */


const cards = document.querySelectorAll(".card");



window.addEventListener("scroll",()=>{


    cards.forEach(card=>{


        let position =

        card.getBoundingClientRect().top;



        let screen =

        window.innerHeight;



        if(position < screen - 100){


            card.style.opacity="1";


            card.style.transform=

            "translateY(0)";


        }


    });



});





/* =========================
   Animation ตอนเปิดเว็บ
========================= */


window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});
