/**
 * Блок import
 */
import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
/**
 * Модуль калькулятора дат
 */
export class DateCalc {
    constructor() {
        this.block = `<form id="datecalc">
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
        </form>`
    };
    write() {
        document.getElementById("mountArea").innerHTML = "";
        document.getElementById("mountArea").insertAdjacentHTML("afterbegin", this.block);
        document.getElementById("datecalc").addEventListener("submit", this.handleCalcDates);
    };
    handleCalcDates(event) {
        const dateCalcResult = document.getElementById("datecalc__result");
        dateCalcResult.innerHTML = "";
        event.preventDefault();

        let { firstDate, secondDate } = event.target.elements;
        firstDate = firstDate.value, secondDate = secondDate.value;

        if (firstDate && secondDate) {
            const diff = diffDates(firstDate, secondDate);
            dateCalcResult.innerHTML = diffToHtml(diff);
        }
        else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
    };
}
const newDateCalc = new DateCalc();
document.getElementById('first').addEventListener('click', () => { newDateCalc.write() });
