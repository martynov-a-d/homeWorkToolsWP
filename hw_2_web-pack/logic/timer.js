/**
 * 
 * Модуль таймера
 * @param {*} event 
 */
import { minTimer, secTimer } from "./main.js";

export function handleTime(event) {
    event.preventDefault();
    // event.target.setAttribute("style", "display: none");
    setInterval(
        startTimer,
        1000
    );
};

function startTimer() {
    if (minTimer.value <= 0 && secTimer.value <= 0) {
        clearInterval(handleTime);
    } else if (secTimer.value <= 0) {
        minTimer.value--;
        secTimer.value = 59;
    } else {
        secTimer.value--;
    }
};

// class Timer {
//     constructor(minTimer, secTimer) {
//         this.minTimer = minTimer;
//         this.secTimer = secTimer;
//     }

//     handleTime(event) {
//         event.preventDefault();
//         // event.target.setAttribute("style", "display: none");
//         setInterval(
//             startTimer,
//             1000
//         );
//     };

//     startTimer() {
//         if (minTimer.value <= 0 && secTimer.value <= 0) {
//             clearInterval(handleTime);
//         } else if (secTimer.value <= 0) {
//             minTimer.value--;
//             secTimer.value = 59;
//         } else {
//             secTimer.value--;
//         }
//     };
// }