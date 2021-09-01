/**
 * 
 * Модуль калькулятора дат
 * @param {*} event 
 */
import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { dateCalcResult } from "./main.js";

export function handleCalcDates(event) {
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