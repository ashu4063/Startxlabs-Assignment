//1st Assignment
const Assign1 = document.getElementById('1st-button');
Assign1.addEventListener('click', calculateHours)

function calculateHours() {
    var value = document.getElementById("number").value;
    if (value === "") {
        alert('Add value in input')
    }
    else {
        var min = Math.floor(value / 60);
        document.getElementById("mins").innerHTML = min;
        var hours = Math.floor(value / 60 / 60);
        document.getElementById("hours").innerHTML = hours;
        var seconds = value - min * 60;
        document.getElementById("seconds").innerHTML = seconds;
    }
}


