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
        document.getElementById('mountArea').insertAdjacentHTML("beforeend", this.block);
        newTimer.listen();
    }
    handleTime(event) {
        event.preventDefault();
        setInterval(
            newTimer.startTimer,
            1000
        );
    };
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
    };
}
const newTimer = new Timer();
document.getElementById('second').addEventListener('click', () => { newTimer.write() });
