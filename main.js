const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const toggler1 = document.querySelector("#toggler1");
const party = document.querySelectorAll(".party");
const body = document.querySelector("body");
const textParty = document.querySelectorAll(".textParty");
const masterContainer = document.querySelectorAll(".masterContainer");


let randomColor = ()=> {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

let interv;
toggler1.addEventListener("click", (e) => {
  party.forEach(e => e.style.display = 'flex');
  //ON
  if (toggler1.className == "off") {
    toggler1.classList.remove("off");
    toggler1.classList.add("on");
    toggler1.innerHTML = "OFF";
    interv = setInterval(() => {
      container.style.backgroundColor = randomColor();
      container2.style.backgroundColor = randomColor();
      container3.style.backgroundColor = randomColor();
      textParty.forEach(e => e.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16));
    }, 500);
    //OFF
  } else {
    party.forEach(e => e.style.display = 'none');
    toggler1.classList.remove("on");
    toggler1.classList.add("off");
    toggler1.innerHTML = "ON";
    container.style.backgroundColor = '';
    container2.style.backgroundColor = '';
    container3.style.backgroundColor = '';
    textParty.forEach(e=> e.style.backgroundColor = '');
    clearInterval(interv);
  }
});