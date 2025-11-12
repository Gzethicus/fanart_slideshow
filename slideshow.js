var imgList = [
    "gallery\\Badlands_Irri.png",
    "gallery\\CoralCaves_Fishnoid.png",
    "gallery\\Salination_Irri.png",
    "gallery\\StormyCoast_NOTOCORDA.png",
    "gallery\\TorridDesert_headintheklouds.png",

];
var index = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    index = Math.floor(Math.random() * imgList.length);

    document.getElementById("fade").addEventListener("animationiteration", fadeOut);
    fadeOut();
});

function fadeOut() {
    document.getElementById("fade").src = imgList[index++];
    while (index >= imgList.length) index -= imgList.length;
    document.getElementById("static").src = imgList[index];
}
