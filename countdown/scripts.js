/** code by webdevtrick ( https://webdevtrick.com ) **/
const year = new Date().getFullYear();
const chosenDate = new Date(2019, 8, 30).getTime();

let countdown = setInterval(function() {

  const today = new Date().getTime();
  
  const diff = chosenDate - today;

  
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("day").textContent = days;
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;


},1000);

