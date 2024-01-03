/* var codes = {

    "6": "Польща",
   
    "38": "Україна",
   
    "1": "США"
   
}; */

let codes = new Map ([
    ["6", "Польща"],
    ["38", "Україна"],
    ["1", "США"]
]);

codes.forEach((name, code) => {
    console.log(`${code}: ${name}`);
});