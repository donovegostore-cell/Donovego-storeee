document.querySelectorAll(".slider").forEach(slider=>{

const imgs=slider.querySelectorAll("img");

let actual=0;

setInterval(()=>{

imgs[actual].classList.remove("active");

actual++;

if(actual>=imgs.length)actual=0;

imgs[actual].classList.add("active");

},3000);

});
