// 1. Fetching Json

// 2. Reload data 10 sec

// 3. Show in "inQuene" max 25


"use srict"

document.addEventListener("DOMContentLoaded", loadScript );

async function loadScript() {
    let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await jsonObject.json();

    function show(){
        document.querySelector(".bar").textContent = `${myJson.inQueue}`;
    }

    show();

}

setInterval(function(){
    loadScript();
}, 10000);


