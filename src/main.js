import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc_result');

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } if (firstDate && secondDate) {
        console.log(firstDate, secondDate);
    } else {console.log("Для расчета промежутка необходимо заполнить оба поля")};
}