/** Модуль монтирования болока страницы */
export function preMount(elem) {
    let mountElem = elem.target.getAttribute("data-name");

    let datecalc = `<form id="datecalc">
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
    </form>`;

    let timer = `    <form id="time">
    <h3>Таймер</h3>
    <label>
        <strong>Задайте время</strong>
        <input id="min" type="text" placeholder="Минуты">
        <input id="sec" type="text" placeholder="Секунды">
    </label>
    <button id="btnStart" type="submit">Запустить</button>
</form>`;


    switch (mountElem) {
        case "datecalc":
            document.getElementById("test").insertAdjacentHTML("afterbegin", datecalc);
            break;

        case "time":
            document.getElementById("test").insertAdjacentHTML("afterbegin", timer);
            break;

        default:
            break;
    }
};
