const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';

function parseJSON(jsonString) {
    try {
        const parsedJSON = JSON.parse(jsonString);
        if (parsedJSON.age && typeof parsedJSON.age !== 'number') {
            throw new Error('Unexpected string in JSON');
        }
        return parsedJSON;
    } catch (error) {
        return { error: `Invalid JSON: ${error.message}` };
    }
}

console.log(parseJSON(jsonString1));
console.log(parseJSON(jsonString2));