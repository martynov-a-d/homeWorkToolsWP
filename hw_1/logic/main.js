'use strict'

/** Блок import/export */
import { switchHiden } from "./switch.js"
import { mount, mountBlock } from "./mount.js";

/** Назначение переменных и связь с index.html */
const switchArea = document.getElementById("switch");

/**
 * Монтирует блок с скелетом
 */
mount(mountBlock);

/** Блок назначения "слушатель события" */
switchArea.addEventListener("click", (event) => {
    switchHiden(event);
});
