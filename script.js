function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML = "⚠️ Please enter all values";
        return;
    }

    height = height / 100; // cm to meter
    let bmi = (weight / (height * height)).toFixed(2);

    let message = "";
    let emoji = "";

    if (bmi < 18.5) {
        message = "WEAK BODY";
        emoji = "😔";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "NORMAL BODY";
        emoji = "😊";
    } else {
        message = "HEALTHY BODY";
        emoji = "💪😃";
    }

    document.getElementById("result").innerHTML =
        `BMI: <strong>${bmi}</strong><br>${message} ${emoji}`;
}
