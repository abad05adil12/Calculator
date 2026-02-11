const display = document.getElementById("display");

function press(value) {
    if (value !== undefined) {
        display.value += value;
    } else {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }
}

function clearDisplay() {
    display.value = "";
}
