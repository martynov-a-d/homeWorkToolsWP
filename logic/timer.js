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
        test,
        1000
    );
    function test() {
        if (secTimer.value <= 0) {
            minTimer.value--;
            secTimer.value = 59;
        } else {
            secTimer.value--;
        }
    }
}