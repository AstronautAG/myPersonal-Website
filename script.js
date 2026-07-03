document.getElementById('darkMode').addEventListener('change', darkMode());

function darkMode() {
    let checkbox = document.getElementById('darkModeBtn');

    if (checkbox.checked) {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundImage = "none";
    } else {
        document.body.style.color = "";
        document.body.style.backgroundColor = '';
        document.body.style.backgroundImage = "";
    }

    document.body.classList.toggle("dark", checkbox.checked);
}

timeOfDay();

function timeOfDay() {
    const timeOfDay = new Date().getHours();
    let hello;
    if (timeOfDay < 12) {
        hello = "Good Morning";
    } else if (timeOfDay < 20) {
        hello = "Good Afternoon";
    } else {
        hello = "Good Evening";
    }
    document.getElementById("timeOfDay").innerHTML = hello;
}

function textSize(containerId, step) {
    const container = document.getElementById(containerId);

    if (container) {
        const currentSizeString = window.getComputedStyle(container).fontSize;
        const currentSize = parseFloat(currentSizeString);
        container.style.fontSize = (currentSize + step) + 'px';
    }
}