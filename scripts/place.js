const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


const temperature = 8;
const windSpeed = 6;

function calculateWindChill(temp, speed){
    return(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

function displayWindChill(){
    const windChillElement = document.querySelector("#weather p:nth-of-type(4) span");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature,windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    }else {
        windChillElement.textContent = 'N/A';
    }
} 

document.addEventListener("DOMContentLoaded", displayWindChill);