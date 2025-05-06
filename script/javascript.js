const menubutton = document.querySelector("#menu");
const closenavButton = document.querySelector("header nav > button");
const navBar= document.querySelector("header nav");
function showmenu(){
navBar.classList.add("navIsOpen")
};
function closemenu(){
 navBar.classList.remove("navIsOpen")
}
menubutton.addEventListener("click",showmenu);
closenavButton.addEventListener("click",closemenu);

const modebutton= document.querySelector("#mode");
const body = document.querySelector("body");
const modeicon =document.querySelector("#mode img");

function changemode(){
body.classList.toggle("darkmode");
modeicon.src="./ICONS/sun-svgrepo-com.svg";
};
modebutton.addEventListener("click",changemode);


