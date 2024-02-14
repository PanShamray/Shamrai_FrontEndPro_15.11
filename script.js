const divBrowserInfo = document.getElementById('browserInfo');
const browserInfo = {
    name: navigator.userAgent,
    version: navigator.appVersion,
    
    platform: navigator.platform
};
divBrowserInfo.innerHTML = `
<p>Назва браузеру: ${browserInfo.name}</p>
<p>Версія браузеру: ${browserInfo.version}</p>
<p>Платформа користувача: ${browserInfo.platform}</p>
`;


/* function selectCheckboxFromURL() {
    // Отримання параметра "devices" з URL
    const urlParams = new URLSearchParams(window.location.search);
    const devicesParam = urlParams.get('devices');
    
    if (devicesParam) {
        // Розділення значень параметра "devices"
        const devices = devicesParam.split(',');

        // Отримання всіх чекбоксів
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        // Перевірка кожного чекбокса
        checkboxes.forEach(checkbox => {
            // Якщо значення чекбокса збігається зі значенням у параметрі "devices", встановити відповідний чекбокс
            if (devices.includes(checkbox.value.toLowerCase())) {
                checkbox.checked = true;
            }
        });
    }
}

// Виклик функції при завантаженні сторінки
selectCheckboxFromURL();

// Обробник подій для відстеження змін у чекбоксах
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Отримання значення чекбокса
        const value = this.value.toLowerCase();
        // Отримання параметра "devices" з URL
        const urlParams = new URLSearchParams(window.location.search);
        let devicesParam = urlParams.get('devices');
        // Перевірка чи параметр "devices" існує в URL
        if (!devicesParam) {
            // Якщо параметр не існує, додаємо його
            devicesParam = value;
        } else {
            // Перевірка, чи значення вже присутнє в параметрі "devices"
            const devices = devicesParam.split(',');
            const index = devices.indexOf(value);
            if (index === -1) {
                // Додавання значення, якщо його немає вже
                devices.push(value);
            } else {
                // Видалення значення, якщо воно вже існує
                devices.splice(index, 1);
            }
            // Оновлення параметра "devices"
            devicesParam = devices.join(',');
        }
        // Оновлення URL з новим параметром "devices"
        const newUrl = window.location.origin + window.location.pathname + '?devices=' + devicesParam;
        // Заміна URL без перезавантаження сторінки
        window.history.replaceState({ path: newUrl }, '', newUrl);
    });
}); */