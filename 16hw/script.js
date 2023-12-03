const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomStr = characters.split("").sort(() => Math.random() - 0.5).join("");

console.log("Початкова строка:", characters);

function generateKey(str, length){
    length === str.length;
    return str.slice(0, length)
}
const acceptLength = 16;
const key = generateKey(randomStr, acceptLength);

console.log("Набір із "+ acceptLength + " випадкових символів:", key);