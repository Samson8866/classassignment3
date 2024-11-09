// Temperature
// If the temperature is in °C convert to °F

function convertTemperature(degree){
    var x;
    if(degree =="C"){
        x = document.getElementById('c').value * 9/5 + 32;
        document.getElementById("f").value = Math.round(x);
    }else
        x = document.getElementById("f").value - 32 * 5/9;
        document.getElementById("c").value = Math.round(x);
}


// To Fahrenheit: °F = (°C * 9/5) + 32











