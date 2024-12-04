// 1. Функция showMessage
function showMessage(message) {
    console.log(message);
}

// 2. Функция changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// 3. Функция toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    }
}

// 4. Функция для обработки utm_term
function handleUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const headerH1 = document.querySelector("h1");

    if (headerH1) {
        headerH1.textContent = utmTerm ? utmTerm : headerH1.textContent;
    }
}

// 5. Функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(`Текущее время: ${time}`);
}

// 6. Функция resetBackgroundColor
function resetBackgroundColor() {
    document.body.style.background = "linear-gradient(135deg, rgba(230, 246, 249, 0.8), rgba(226, 191, 244, 0.8))";
}

// Вызов showMessage и logCurrentTime
showMessage("Скрипт загружен!");
logCurrentTime();

    document.addEventListener("DOMContentLoaded", () => {
        resetBackgroundColor();
        changeBackgroundColor("green");
        toggleVisibility(".content");
        handleUTM();
    });