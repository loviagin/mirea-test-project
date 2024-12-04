// 1. Обработчик click на заголовок H1
document.querySelector("h1").addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});

// 2. Замена тем практик на 2-й семестр
document.getElementById("change-table").addEventListener("click", () => {
    const tableBody = document.querySelector("#practices-table tbody");
    tableBody.innerHTML = `
        <tr><td>1</td><td>Базовое бэкенд-приложение</td></tr>
        <tr><td>2</td><td>HTTP-запросы</td></tr>
        <tr><td>3</td><td>JSON и работа с ним</td></tr>
        <tr><td>4</td><td>HTTP-ответы</td></tr>
        <tr><td>5</td><td>Проектирование API</td></tr>
        <tr><td>6</td><td>Роутинг и его настройка</td></tr>
        <tr><td>7</td><td>NoSQL базы данных</td></tr>
        <tr><td>8</td><td>Обеспечение авторизации и доступа пользователей</td></tr>
        <tr><td>9</td><td>Работа сторонних сервисов уведомления и авторизации</td></tr>
        <tr><td>10</td><td>Основы ReactJS</td></tr>
        <tr><td>11</td><td>Работа с компонентами динамической DOM</td></tr>
        <tr><td>12</td><td>Использование хуков в React</td></tr>
        <tr><td>13</td><td>Основы микросервисной архитектуры</td></tr>
        <tr><td>14</td><td>Разработка классических модулей веб-приложений</td></tr>
    `;
});

// 3. Увеличение размера фотографии и замена при клике
const studentPhoto = document.getElementById("student-photo");

studentPhoto.addEventListener("mouseover", () => {
    studentPhoto.style.transform = "scale(1.1)";
});

studentPhoto.addEventListener("mouseout", () => {
    studentPhoto.style.transform = "scale(1)";
});

studentPhoto.addEventListener("click", () => {
    studentPhoto.src = "./src/dog.jpg"; // Укажите путь к фотографии преподавателя
});

studentPhoto.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей.");
});