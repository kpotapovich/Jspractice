const CLOSED_IMG = "https://img.icons8.com/material-outlined/24/000000/send-letter.png";
const OPENED_IMG = "https://img.icons8.com/ios-glyphs/30/000000/down2.png";

let menuStatus = {
    photoMenu: false,
    homeMenu: false
}

let photoMenu = document.getElementById("photoMenu");
let homeMenu = document.getElementById("homeMenu");
photoMenu.onclick = photoMenuOnClick;
homeMenu.onclick = homeMenuOnClick;

function photoMenuOnClick() {
    menuStatus.photoMenu = !menuStatus.photoMenu;
    photoMenu.src = menuStatus.photoMenu ? OPENED_IMG : CLOSED_IMG;
    let photoList = document.getElementById("photo_list");
    photoList.classList.toggle("submenu-none")
}

function homeMenuOnClick() {
    menuStatus.homeMenu = !menuStatus.homeMenu;
    homeMenu.src = menuStatus.homeMenu ? OPENED_IMG : CLOSED_IMG;
    let homeList = document.getElementById("home_list");
    homeList.classList.toggle("submenu-none");
}