const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const form = document.getElementById("bmi-form");

const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const heightVal = parseFloat(height.value);
    const weightVal = parseFloat(weight.value);

    if (!heightVal || !weightVal) {
        result.textContent = "Height and Weight cannot be blank.";
        return;
    }

    //Convert  inputs to meters and kilograms
    let heightInMeters;
    if (heightUnit.value === "cm") {
        heightInMeters = heightVal / 100;
    } else {
        heightInMeters = heightVal * 0.0254;
    }

    let weightInKg;
    if (weightUnit.value === "kg") {
        weightInKg = weightVal;
    } else {
        weightInKg = weightVal * 0.453592;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let category = "";
    if (bmi < 18) {
        category = "Underweight";
    } else if (bmi >= 18 && bmi <= 25) {
        category = "Normal";
    } else if (bmi > 25 && bmi <= 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.textContent = "Your BMI is " + bmi.toFixed(2) + " (" + category + ").";
});
