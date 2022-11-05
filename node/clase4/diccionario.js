let palabraCastellano = process.argv[2].toLowerCase();


const diccionario = new Map([
    ["gato", "cat"],
    ["perro", "dog"],
    ["puerta", "door"],
    ["ventana", "window"],
    ["mesa", "table"]
]);

console.log(`La traducción de ${palabraCastellano} es ${diccionario.get(palabraCastellano)}`);