// 1. Fetching Json

// 2. Reload data 10 sec

// 3. Show in "inQuene" max 25


"use srict"

document.addEventListener("DOMContentLoaded", loadScript);

async function loadScript() {
    let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await jsonObject.json();

    function show() {
        document.querySelector(".barnumber").textContent = `${myJson.inQueue}`;
        document.querySelector(".bar").style.width = `${myJson.inQueue}0px`;
        document.querySelector(".info-container").style.width = `${myJson.inQueue}0px`;

        document.querySelector(".infotext").textContent = `${myJson.inQueue} number of people in line`;

    }

    show();

}

setInterval(function () {
    loadScript();
}, 10000);
