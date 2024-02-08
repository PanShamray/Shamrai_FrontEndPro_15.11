const categoriesData = ['Електроніка', 'Одяг', 'Книги'];
const productsData = {
    'Електроніка': ["Смартфон", "Ноутбук", "Навушники"],
    'Одяг': ['Сорочка', 'Штани', 'Шарпетки'],
    'Книги': ['Крістіна', 'Гаррі Поттер', 'Мільйонер']
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
        productElement.textContent = product;
        productElement.addEventListener("click", () => showProductInfo( product));
        productsContainer.appendChild(productElement);
    });
}

function showProductInfo(product) {
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

function buyProduct(product) {

    alert(`Вітаємо 🤩!!! Ви успішно придбали ${product} 🥰`);

    document.getElementById("products").innerHTML = "";
    document.getElementById("productInfo").style.display = "none";
}

createCategories();
