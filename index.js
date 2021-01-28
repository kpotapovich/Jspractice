let photoMenuOpened = false

function photoMenuOnClick() {
    if (photoMenuOpened) {
        photoMenuOpened = false
        close()
    } else {
        photoMenuOpened = true
        open()
    }
}


function open() {
    let photoMenu = document.getElementById("photoMenu");
    photoMenu.src = "https://img.icons8.com/ios-glyphs/30/000000/down2.png";
    let photoList = document.getElementById("photo_list");
    photoList.classList.remove("submenu-none");
}

function close() {
    let photoMenu = document.getElementById("photoMenu");
    photoMenu.src = "https://img.icons8.com/material-outlined/24/000000/send-letter.png";

    let photoList = document.getElementById("photo_list");
    photoList.classList.add("submenu-none");
}

let photoMenu = document.getElementById("photoMenu");

photoMenu.onclick = photoMenuOnClick;