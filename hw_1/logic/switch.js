export function switchHiden(elem) {
    let mountElem = elem.target.getAttribute("data-name");
    let datecalc = document.getElementById("datecalc");
    let timer = document.getElementById("timer");

    if (mountElem == "datecalc") {
        datecalc.classList.toggle('hiden');
    } else {
        timer.classList.toggle('hiden');
    }
};
