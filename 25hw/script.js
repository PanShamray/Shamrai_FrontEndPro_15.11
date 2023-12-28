class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInConsoleInfoFromPerson(){
        console.log(`name: ${this.name}, age: ${this.age}`);
    } 
}

class Car{
    constructor(brand, model, year, vehicleNumber){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vehicleNumber = vehicleNumber;
        this.owner = null;
    }

    addOwnerToCar(owner) {
        if (owner instanceof Person && owner.age >= 18) {
          this.owner = owner;
        } else {
            console.log("---------------------");
            console.log("Неможливо зберегти екземпляр класу Person, оскільки власнику не виповнилося 18 років");
        }
      }

    showInConsoleInfoFromCar(){
        console.log("---------------------");
        console.log(`Автомобіль: ${this.brand} ${this.model}, Рік: ${this.year}, Номерний знак: ${this.vehicleNumber}`);
        if (this.owner) {
            console.log("  Власник:");
            this.owner.showInConsoleInfoFromPerson();
        }
    }
}

const person1 = new Person("Іван", 32);
const person2 = new Person("Поліна", 18);
const person3 = new Person("Vlad", 17);

const car1 = new Car("Toyota", "Camry", 2022, "AB 1234 BC");
const car2 = new Car("Porsche", "911 turboS", 2022, "AE 1488 AE");
const car3 = new Car("Dodge", "Charger Daytona", 1969, "bastard");

car1.addOwnerToCar(person1);
car2.addOwnerToCar(person2);
car3.addOwnerToCar(person3);


car1.showInConsoleInfoFromCar();
car2.showInConsoleInfoFromCar();
car3.showInConsoleInfoFromCar();