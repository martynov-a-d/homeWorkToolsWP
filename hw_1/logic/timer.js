/**
 * 
 * Модуль таймера
 * @param {*} event 
 */
export function handleTime(event) {
    event.preventDefault();
    let startInt = setInterval(
        startTimer,
        1000
    );
    console.log(event.submitter.textContent);
    event.submitter.textContent = "Стоп";
    function startTimer() {
        let minTimer = document.getElementById("min");
        let secTimer = document.getElementById("sec");
        if (minTimer.value <= 0 && secTimer.value <= 0) {
            clearInterval(startInt);
        } else if (secTimer.value <= 0) {
            minTimer.value--;
            secTimer.value = 59;
        } else {
            secTimer.value--;
        }
    };
};


