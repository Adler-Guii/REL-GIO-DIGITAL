const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

function newTime(){
    const date = new Date();


const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

hoursElement.textContent = flixTime(hours)
minutesElement.textContent = flixTime(minutes)
secondsElement.textContent = flixTime(seconds)
}

function flixTime(time){
    return time < 10 ? '0'+time : time
}

newTime()
setInterval(newTime, 1000)