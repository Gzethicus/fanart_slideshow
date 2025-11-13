var imgList = [
	"gallery\\WRFA_CoralCaves_Fishnoid.png",
    "gallery\\WARB_Salination_Irri.png",
    "gallery\\WSKC_StormyCoast_NOTOCORDA.png",
    "gallery\\WTDA_TorridDesert_headintheklouds.png",
	"gallery\\WBLA_Badlands_Irri.png",

];
var index = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    index = Math.floor(Math.random() * imgList.length);

    document.getElementById("fade").addEventListener("animationiteration", fadeOut);
    fadeOut();
});

function fadeOut() {
    index++;
    while (index >= imgList.length) index -= imgList.length;
    document.getElementById("static").src = imgList[index];
    setTimeout(() => {
        document.getElementById("fade").src = imgList[index];
    }, 2000);
}
