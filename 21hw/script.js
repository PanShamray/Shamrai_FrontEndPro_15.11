class Person{
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartments{
    constructor() {
        this.residents = [];
    }

    addResidentsToAps(person) {
        this.residents.push(person)
    }
}

class House{
    constructor(maxLengthOfAps) {
        this.apartments = [];
        this.maxLengthOfAps = maxLengthOfAps;
    }
    
    addApsToHouse(exampleOfApartments){
        if (this.apartments.length < this.maxLengthOfAps){
            this.apartments.push(exampleOfApartments);
        } else {
            console.log('Кількість квартир перевищує розміри будинку');
        }
    }
}

const pers1 = new Person("Поліна", "жіноча");
const pers2 = new Person("Вова", "чоловіча");
const pers3 = new Person("Владік", "чоловіча");

const aps1 = new Apartments();
const aps2 = new Apartments();
const aps3 = new Apartments();

aps1.addResidentsToAps(pers1);
aps2.addResidentsToAps(pers2);
aps3.addResidentsToAps(pers3);

const house = new House(2);

house.addApsToHouse(aps1);
house.addApsToHouse(aps2);
house.addApsToHouse(aps3);