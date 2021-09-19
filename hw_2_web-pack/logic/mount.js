/**
 * Блок import
 */
import { handleCalcDates } from "./date.js";
import { handleTime } from "./timer.js";
export { mount, mountBlock };

let mountBlock = `<form id="datecalc" class="hiden">
<h3>Калькулятор дат</h3>
<label>
    <strong>Первая дата:</strong>
    <input type="date" name="firstDate" />
</label>
<label>
    <strong>Вторая дата:</strong>
    <input type="date" name="secondDate" />
</label>
<button type="submit">Расчитать промежуток</button>
<p id="datecalc__result"></p>
</form>
<form id="timer" class="hiden">
<h3>Таймер</h3>
<label>
    <strong>Задайте время</strong>
    <input id="min" type="text" placeholder="Минуты">
    <input id="sec" type="text" placeholder="Секунды">
</label>
<button id="btnStart" type="submit">Запустить</button>
</form>`;

/**
 * Модуль монтирования болока страницы
 * @param {*} elem 
 */
function mount(elem) {
    let mountArea = document.getElementById("mountArea");
    mountArea.innerHTML = "";
    mountArea.insertAdjacentHTML("afterbegin", elem);
    initListener();
};
function initListener() {
    document.getElementById("datecalc").addEventListener("submit", (event) => { handleCalcDates(event) });
    document.getElementById("timer").addEventListener("submit", (event) => { handleTime(event) });
};