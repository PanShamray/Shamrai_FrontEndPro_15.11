// Розміри бургерів

const smallHam = { price: 50, calories: 20 };
const largeHam = { price: 100, calories: 40 };

// Додавання ігрнадієнтів

const addIngredient_Cheese = { price: 10, calories: 20 };
const addIngredient_Salad = { price: 10, calories: 20 };
const addIngredient_Potato = { price: 15, calories: 10 };

// Додавання добавок

const addTopping_Spice = { price: 15, calories: 0 };
const addTopping_Mayo = { price: 20, calories: 5 };

class Hamburger {
    constructor(size, ingredient) {
        this.size = size;
        this.ingredient = ingredient;
        this.topping;
    }

    addTopping(topping) {
        this.topping = topping;
    }

    calculateCalories() {
        const totalCalories = this.size.calories + this.ingredient.calories + this.topping.calories;
        return totalCalories;    
    }

    calculatePrice() {
        const totalPrice = this.size.price + this.ingredient.price + this.topping.price;
        return totalPrice;    
    }
}

const hamburger = new Hamburger(largeHam, addIngredient_Potato);

hamburger.addTopping(addTopping_Mayo);

console.log('Ціна бургеру = ', hamburger.calculatePrice());
console.log('Кількість калорій в бургері = ', hamburger.calculateCalories());

hamburger.addTopping(addTopping_Spice);

console.log('Ціна бургеру з приправою = ', hamburger.calculatePrice());
console.log('Кількість калорій в бургері з приправою = ', hamburger.calculateCalories());