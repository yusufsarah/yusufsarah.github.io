/* ==========================================
   Sarah ❤️ Yusuf
========================================== */

// Loading Screen

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1800);

});

// Typing Letter

const message=`Dear Sarah ❤️

If you're reading this...

it means you found the little surprise I made just for you.

Thank you for every smile.

Thank you for every laugh.

Thank you for making ordinary days feel special.

You are my favorite person,
my peace,
and my happiest place.

I hope every time you visit this page,
you remember how deeply you are loved.

Forever Yours,

Yusuf ❤️`;

const typing=document.getElementById("typingText");

let index=0;

function typeLetter(){

if(!typing) return;

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,45);

}

}

const openButton=document.getElementById("openLetter");

if(openButton){

openButton.addEventListener("click",()=>{

typing.innerHTML="";

index=0;

typeLetter();

});

}
/* ==========================================
   COUNTDOWN
========================================== */

const targetDate = new Date("January 17, 2026 00:00:00").getTime();

function updateCounter(){

const now = new Date().getTime();

const distance = now - targetDate;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

const seconds = Math.floor((distance % (1000*60)) / 1000);

const dayEl=document.getElementById("days");
const hourEl=document.getElementById("hours");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");

if(dayEl){

dayEl.textContent=Math.max(days,0);

hourEl.textContent=Math.max(hours,0);

minuteEl.textContent=Math.max(minutes,0);

secondEl.textContent=Math.max(seconds,0);

}

}

setInterval(updateCounter,1000);

updateCounter();

/* ==========================================
   FLOATING HEARTS
========================================== */

const hearts=document.getElementById("hearts");

function createHeart(){

if(!hearts) return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(14+Math.random()*24)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,350);

/* ==========================================
   STARS
========================================== */

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<90;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=(Math.random()*5)+"s";

stars.appendChild(star);

}

}
/* ==========================================
   LIGHTBOX
========================================== */

const photos=document.querySelectorAll(".photoFrame img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=photo.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});

}

/* ==========================================
   MUSIC PLAYER
========================================== */

const music=document.getElementById("bgMusic");

const musicButton=document.getElementById("musicButton");

let playing=false;

if(musicButton){

musicButton.addEventListener("click",()=>{

if(!music) return;

if(!playing){

music.play();

musicButton.innerHTML="⏸ Pause Our Song";

playing=true;

}else{

music.pause();

musicButton.innerHTML="🎵 Play Our Song";

playing=false;

}

});

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const fadeElements=document.querySelectorAll(
".glass,.photoCard,.counterBox,.dreamBox,.promiseCard"
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.classList.add("fadeShow");

}else{

entry.classList.remove("fadeShow");

}

});

},{
threshold:.15
});

fadeElements.forEach(item=>{

item.classList.add("fadeHidden");

observer.observe(item);

});

/* ==========================================
   NAVBAR SHADOW
========================================== */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(!nav) return;

if(window.scrollY>50){

nav.style.background="rgba(255,255,255,.82)";
nav.style.boxShadow="0 18px 45px rgba(0,0,0,.12)";

}else{

nav.style.background="rgba(255,255,255,.55)";
nav.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

}

});
/* ==========================================
   SMOOTH SCROLL ACTIVE LINK
========================================== */

const sections=document.querySelectorAll("section,header");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;
const height=section.offsetHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================
   PARALLAX EFFECT
========================================== */

window.addEventListener("scroll",()=>{

const value=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=`translateY(${value*0.15}px)`;

}

});

/* ==========================================
   RANDOM SPARKLES
========================================== */

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=(10+Math.random()*18)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity=".8";

sparkle.style.zIndex="2";

sparkle.style.transition="2s linear";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.transform="translateY(-60px) scale(1.6)";
sparkle.style.opacity="0";

},100);

setTimeout(()=>{

sparkle.remove();

},2200);

}

setInterval(createSparkle,900);

/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll(".mainButton,#musicButton").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.45)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .7s linear";

ripple.style.pointerEvents="none";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});
