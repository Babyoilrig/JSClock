const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
// console.log(secondHand);
console.log(minuteHand);
function setDate(){
const now = new Date();
//Code for seconds hand
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60)* 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
console.log(`The seconds are ${seconds}`);
//Code for minute hand
const minutes = now.getMinutes();
console.log(`The minutes are ${minutes}`);
const minuteDegrees = ((minutes / 60)* 360) + 90;
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

}

setInterval(setDate, 1000);