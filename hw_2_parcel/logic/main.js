'use strict'

/** Блок import/export */
import { preMount } from "./mount.js";
import { handleTime } from "./timer.js";
import { handleCalcDates } from "./date.js";
// import { bundlerPic } from "../bundler.png";
export { dateCalcResult, minTimer, secTimer };

/** Назначение переменных и связь с index.html */
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timeForm = document.getElementById("time");
const switchArea = document.getElementById("switch");
// const pic = document.createElement('img');
let minTimer = document.getElementById("min");
let secTimer = document.getElementById("sec");

// pic.src= bundlerPic;
// pic.onload = () => {
//     document.body.appendChild(pic)
// }

/** Блок назначения "слушатель события" */
dateCalcForm.addEventListener("submit", handleCalcDates);
timeForm.addEventListener("submit", handleTime);
switchArea.addEventListener("click", (event) => {
    preMount(event);
});

var sound = new Howl({
    src: ['sound.mp3']
});

sound.play();