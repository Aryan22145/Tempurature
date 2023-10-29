document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const celsiusInput = document.getElementById("celsius");
    const resultContainer = document.getElementById("result");

    convertBtn.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultContainer.innerText = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
        } else {
            resultContainer.innerText = "Please enter a valid temperature in Celsius.";
        }
    });
});
