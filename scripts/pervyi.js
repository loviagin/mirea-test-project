document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы модального окна и кнопок
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Получаем все кнопки открытия модального окна
    const openModalBtns = document.querySelectorAll('.openModalBtn');

    // Добавляем обработчик событий на каждую кнопку
    openModalBtns.forEach(function (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    // Закрываем модальное окно при нажатии на "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Валидация формы и отправка
    form.onsubmit = function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку

        // Проверка на заполненность полей
        if (!form.name.value || !form.email.value || !form.phone.value || !form.country.value || !form.date.value || !form.agreement.checked) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        // Если все в порядке, показываем сообщение об успешной отправке
        successMessage.style.display = "block";
        form.reset(); // Сбрасываем форму
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function () {
        let input = phoneInput.value.replace(/\D/g, ''); // Удалить все нечисловые символы

        // Ограничение длины номера телефона до 11 цифр
        if (input.length > 11) {
            input = input.substring(0, 11);
        }

        // Форматирование номера телефона в формате +7 (999) 999-99-99
        let formattedPhone = '+7 ';
        if (input.length > 1) {
            formattedPhone += '(' + input.substring(1, 4);
        }
        if (input.length >= 5) {
            formattedPhone += ') ' + input.substring(4, 7);
        }
        if (input.length >= 8) {
            formattedPhone += '-' + input.substring(7, 9);
        }
        if (input.length >= 10) {
            formattedPhone += '-' + input.substring(9, 11);
        }

        phoneInput.value = formattedPhone;
    });

    phoneInput.addEventListener('keydown', function (event) {
        // Запрещаем вводить любые символы, кроме цифр, backspace и delete
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
        if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
            event.preventDefault();
        }
    });
});

const scrollToTopBtn = document.querySelector('.scroll-to-top');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Анимация заголовка
document.getElementById("animated-header").addEventListener("mouseover", function () {
    this.style.transition = "transform 0.3s ease-in-out";
});



// Показ таблицы с лекциями
document.getElementById("show-lectures-btn").addEventListener("click", function () {
    const table = document.getElementById("lectures-table");
    table.style.display = "table";
    setTimeout(() => table.classList.add("show"), 0); // Плавное появление таблицы
});