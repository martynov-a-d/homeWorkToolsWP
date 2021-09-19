/**
 * Модуль таймера
 */
export class Timer {
    constructor() {
        this.block = `<form id="time">
        <h3>Таймер</h3>
        <label>
            <strong>Задайте время</strong>
            <input id="min" type="text" placeholder="Минуты">
            <input id="sec" type="text" placeholder="Секунды">
        </label>
        <button id="btnStart" type="submit">Запустить</button>
    </form>`;
    }
    write() {
        document.getElementById("mountArea").innerHTML = "";
        document.getElementById('mountArea').insertAdjacentHTML("beforeend", this.block);
        newTimer.listen();
    }
    handleTime(event) {
        event.preventDefault();
        if (event.submitter.textContent == "Стоп") {
            clearInterval(newTimer.handleTime);
        } else {
            event.submitter.textContent = "Стоп";
            setInterval(
                newTimer.startTimer,
                1000
            );
        }
    };
    /**
     * Добавляет слушатель события на кнопку
     */
    listen() {
        let btnStart = document.getElementById('time');
        btnStart.addEventListener('submit', (event) => { newTimer.handleTime(event) });
    };
    startTimer() {
        let minTimer = document.getElementById("min");
        let secTimer = document.getElementById("sec");
        if (minTimer.value <= 0 && secTimer.value <= 0) {
            clearInterval(newTimer.handleTime);
        } else if (secTimer.value <= 0) {
            minTimer.value--;
            secTimer.value = 59;
        } else {
            secTimer.value--;
        }
        console.log("WTF!!!");
    };
}
const newTimer = new Timer();
document.getElementById('second').addEventListener('click', () => { newTimer.write() });
