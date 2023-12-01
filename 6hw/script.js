const askHourValue = prompt("Напишіть кількість годин які бажаєте перевести в секунди");

const changeHourVal = +askHourValue;

const convertHourToSec = changeHourVal * 60 * 60;

alert(`${changeHourVal} годин = ${convertHourToSec} секунд`)