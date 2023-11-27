//The variable kelvin is set to 293, representing the forecast temperature in Kelvin.
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius =kelvin - 273;

// Convert  celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Use Math floor to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is "+ fahrenheit +" degrees Fahrenheit.");

// Convert  celsius to newton
let Newton = celsius * (33/100);
// Use Math floor to round down the newton temperature
Newton = Math.floor(Newton);
console.log("The temperature is "+ Newton +" degrees Fahrenheit.");


