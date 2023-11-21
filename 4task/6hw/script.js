const askHourValue = prompt("Напишіть кількість годин які бажаєте перевести в секунди");

const changeHourVal = +askHourValue;

const convertHourToSec = changeHourVal * 3600;

alert(`${changeHourVal} годин = ${convertHourToSec} секунд`)