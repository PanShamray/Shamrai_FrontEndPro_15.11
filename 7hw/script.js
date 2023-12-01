const askYearOfBirth = prompt("Якого ви року народження?");

const askNameOfCity = prompt("В якому місті ви живете?");

const askFavoriteSport = prompt("Ваш улюблений вид спорту?");

let conStrToNum = +askYearOfBirth;
let date = 2023 - conStrToNum;

// функція розрахунок віку
function userDateOfBirth(askYearOfBirth){
        switch (askYearOfBirth) {
                case null :
                        return "Шкода, що Ви не захотіли ввести свій вік";
                        break;
                default :
                        return "Ваш вік: " + date;
                        break;
        }
}

// функція яка зберігає в собі столиці та країни
function getCountryByCity(askNameOfCity) {
        switch (askNameOfCity) {
                case "Київ":
                        return "Ти живеш у столиці України";
                        break;
                case "Вашингтон":
                        return "Ти живеш у столиці США";
                        break;
                case "Лондон":
                        return "Ти живеш у столиці Великої Британії";
                        break;
                case null :
                        return "Шкода, що Ви не захотіли ввести своє місто" 
                        break; 
                default :
                        return "Ти живеш у місті " + askNameOfCity;
                        break;          
        }
}

// функція яка зберігає у собі назви спорту та чемпіонів
function getChampionFromSport(askFavoriteSport) {
        switch (askFavoriteSport) {
                case "Футбол" :
                        return "Круто! Хочеш стати як Ліонель Мессі ?";
                        break;
                case "Бокс" :
                        return "Круто! Хочеш стати як Олександр Усік ?";
                        break;
                case "Хокей" :
                        return "Круто! Хочеш стати як Вейн Грецкі ?";
                        break;
                case null :
                        return "Шкода, що Ви не захотіли ввести свій спорт"
                        break;
        }

}
alert(`${userDateOfBirth(askYearOfBirth)}
        ${getCountryByCity(askNameOfCity)}
        ${getChampionFromSport(askFavoriteSport)}`
);
