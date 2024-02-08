const categoriesData = ['Електроніка', 'Одяг', 'Книги'];
const productsData = {
    'Електроніка': ["Смартфон", "Ноутбук", "Навушники"],
    'Одяг': ['Сорочка', 'Штани', 'Шарпетки'],
    'Книги': ['Крістіна', 'Гаррі Поттер', 'Мільйонер']
};

function createCategories() {            //створення категорій
    const categoriesContainer = document.getElementById("categories");

    categoriesData.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.textContent = category;
        categoryElement.addEventListener("click", () => showProducts(category));
        categoriesContainer.appendChild(categoryElement);
    });
}

function showProducts(category) {            //вивід товарів конкретної категорії
    const productsContainer = document.getElementById("products");
    const productInfoContainer = document.getElementById("productInfo");

    productsContainer.innerHTML = "";
    productInfoContainer.innerHTML = "";

    productsData[category].forEach(product => {
        const productElement = document.createElement("div");
        productElement.textContent = product;
        productElement.addEventListener("click", () => showProductInfo(product));
        productsContainer.appendChild(productElement);
    });
}

function showProductInfo(product) {            //інформація про товар
    const productInfoContainer = document.getElementById("productInfo");

    productInfoContainer.innerHTML = "";

    const productNameElement = document.createElement("h3");
    productNameElement.textContent = product;

    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.addEventListener("click", () => buyProduct(product));

    productInfoContainer.appendChild(productNameElement);
    productInfoContainer.appendChild(buyButton);

    document.getElementById("productInfo").style.display = "block";
}

let userOrders = []; // списсок замовлень

function buyProduct(product) {            //додавання товару в localStorage при покупці
    const price = Math.floor(Math.random() * 1000) + 1;
    const date = new Date().toLocaleString('uk-UA', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    const order = { product, price, date };
    userOrders.push(order);

    localStorage.setItem('orders', JSON.stringify(userOrders));

    alert(`Вітаємо 🤩!!! Ви успішно додали до списку замовлень ${product} за ${price} грн 🥰`);

    document.getElementById("products").innerHTML = "";
    document.getElementById("productInfo").style.display = "none";
}

function showOrders() {            //збереження та вивід всіх товарів які додали до списку замовлень
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    userOrders.forEach((order, index) => {
        const orderElement = document.createElement("div");
        const orderDetails = document.createElement("div");
        const deleteButton = document.createElement("button");
        const detailsButton = document.createElement("button");

        deleteButton.textContent = "Видалити";
        deleteButton.addEventListener("click", () => deleteOrder(index));

        detailsButton.textContent = "Деталі";
        detailsButton.addEventListener("click", () => showOrderDetails(order, index));

        orderElement.textContent = `${order.product} `;

        orderElement.appendChild(deleteButton);
        orderElement.appendChild(detailsButton);

        orderDetails.style.display = "none";
        orderDetails.id = `orderDetails_${index}`;

        orderElement.appendChild(orderDetails);
        productsContainer.appendChild(orderElement);
    });
}

function deleteOrder(index) {            //видалення товарів із списку(опціонально)
    userOrders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(userOrders));
    showOrders();
}

function showOrderDetails(order, index) {            //деталі до конкретного товару у списку
    const detailsContainer = document.getElementById(`orderDetails_${index}`);

    if (detailsContainer.style.display === "block") {
        detailsContainer.style.display = "none";
    } else {
        detailsContainer.innerHTML = `
            <p>ID: id_${Math.floor(Math.random() * 1000) + 1}</p>
            <p>Ціна: ${order.price} грн</p>
            <p>Час замовлення: ${order.date}</p>
        `;
        detailsContainer.style.display = "block";
    }
}

let ordersVisible = false; //  видимість списку замовлень

document.getElementById("myOrdersBtn").addEventListener("click", () => {        // показати/приховати замовлення
    if (ordersVisible) {
        document.getElementById("products").innerHTML = "";
        ordersVisible = false;
    } else {
        loadOrders();
        showOrders();
        ordersVisible = true;
    }
});

function loadOrders() {            // завантаження та збереження списку товарів у localStorage
    const savedOrders = localStorage.getItem('orders');
    userOrders = savedOrders ? JSON.parse(savedOrders) : [];
}

createCategories();            // runner