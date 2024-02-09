const categoriesData = ['Електроніка', 'Одяг', 'Книги'];
const productsData = {
    'Електроніка': [
        { name: "Смартфон", price: '1000$', ID: '1' },
        { name: "Ноутбук", price: '1500$', ID: 2 },
        { name: "Навушники", price: '500$', ID: 3 }
    ],
    'Одяг': [
        { name: "Сорочка", price: '700$', ID: 4 },
        { name: "Штани", price: '800$', ID: 5 },
        { name: "Шкарпетки", price: '20$', ID: 6 }
    ],
    'Книги': [
        { name: "Крістіна", price: '40$', ID: 7 },
        { name: "Гаррі Поттер", price: '60$', ID: 8 },
        { name: "Мільйонер", price: '30$', ID: 9 }
    ]
};

function createCategories() {
    const categoriesContainer = document.getElementById("categories");

    categoriesData.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.textContent = category;
        categoryElement.addEventListener("click", () => showProducts(category));
        categoriesContainer.appendChild(categoryElement);
    });
}

function showProducts(category) {
    const productsContainer = document.getElementById("products");
    const productInfoContainer = document.getElementById("productInfo");

    productsContainer.innerHTML = "";
    productInfoContainer.innerHTML = "";

        productsData[category].forEach(product => {
            const productElement = document.createElement("div");
            productElement.textContent = `${product.name} - ${product.price}`;

            productElement.addEventListener("click", () => showProductInfo(product));
            productsContainer.appendChild(productElement);
        });
}

function showProductInfo(product) {
    const productInfoContainer = document.getElementById("productInfo");

    productInfoContainer.innerHTML = "";

    const productNameElement = document.createElement("h3");
    productNameElement.textContent = product.name;

    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.addEventListener("click", () => buyProduct(product));

    productInfoContainer.appendChild(productNameElement);
    productInfoContainer.appendChild(buyButton);

    document.getElementById("productInfo").style.display = "block";
}

let userOrders = [];

function buyProduct(product) {
    const order = { 
        product: product.name, 
        price: product.price,
        ID: product.ID, 
        date: new Date().toLocaleString('uk-UA', { hour: 'numeric', minute: 'numeric', second: 'numeric' }) 
    };
    userOrders.push(order);

    localStorage.setItem('orders', JSON.stringify(userOrders));

    alert(`Вітаємо 🤩!!! Ви успішно додали до списку замовлень ${product.name} за ${product.price} 🥰`);

    document.getElementById("products").innerHTML = "";
    document.getElementById("productInfo").style.display = "none";
}

function showOrders() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    if (userOrders.length > 0) {
        userOrders.forEach((order, index) => {
            const orderElement = document.createElement("div");
            const orderDetails = document.createElement("div");
            const deleteButton = document.createElement("button");
            const detailsButton = document.createElement("button");

            deleteButton.textContent = "Видалити";
            deleteButton.addEventListener("click", () => deleteOrder(index));

            detailsButton.textContent = "Деталі";
            detailsButton.addEventListener("click", () => showOrderDetails(order));

            orderElement.textContent = `${order.product} `;

            orderElement.appendChild(deleteButton);
            orderElement.appendChild(detailsButton);

            orderDetails.style.display = "none";
            orderDetails.id = `orderDetails_${order.ID}`;

            orderElement.appendChild(orderDetails);
            productsContainer.appendChild(orderElement);
        });
    } else {
        productsContainer.textContent = "Список замовлень порожній";
    }
}

function deleteOrder(index) {
    userOrders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(userOrders));
    showOrders();
}

function showOrderDetails(order) {
    const detailsContainer = document.getElementById(`orderDetails_${order.ID}`);

    if (detailsContainer.style.display === "block") {
        detailsContainer.style.display = "none";
    } else {
        detailsContainer.innerHTML = `
            <p>ID: id_${order.ID}</p>
            <p>Ціна: ${order.price}</p>
            <p>Час замовлення: ${order.date}</p>
        `;
        detailsContainer.style.display = "block";
    }
}

let ordersVisible = false;

document.getElementById("myOrdersBtn").addEventListener("click", () => {
    if (ordersVisible) {
        document.getElementById("products").innerHTML = "";
        ordersVisible = false;
    } else {
        loadOrders();
        showOrders();
        ordersVisible = true;
    }
});

function loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    userOrders = savedOrders ? JSON.parse(savedOrders) : [];
}

createCategories();