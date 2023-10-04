const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
// console.log(secondHand);
console.log(minuteHand);
function setDate(){
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60)* 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// console.log(seconds);

const minutes = now.getMinutes();
console.log(minutes);
const minuteDegrees = ((minutes / 60)* 360) + 90;
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

}

setInterval(setDate, 1000);