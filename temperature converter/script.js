// script.js
function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsiusInput} &deg;C is ${fahrenheit.toFixed(2)} &deg;F`;
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius").value;
    const celsius = (celsiusInput - 32) * 5/9;
    document.getElementById("result").innerHTML = `${celsiusInput} &deg;F is ${celsius.toFixed(2)} &deg;C`;
}