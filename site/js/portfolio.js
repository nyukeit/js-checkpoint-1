// Get Image element
const avatar = document.getElementById("avatar");

// Modify Image source on Click
avatar.addEventListener("click", function(){
  avatar.src = "http://127.0.0.1:5500/wcs/js/site/image/avatar-bis.png"
})

// Get Button and Name elements
const button = document.querySelector("#modifier-btn");
const userName = document.getElementById("name");
// const background = document.querySelector(".description");
const pink = document.querySelectorAll('[class*="pink"]');
console.log(pink);
const links = document.getElementsByTagName("a");
console.log(links);
// Add Event Listener to the Button to change the name
button.addEventListener("click", function(){
  let visiterName = prompt("What is your name?");
  userName.innerText = visiterName;
  userName.style.color = "white";

  // background.style.backgroundColor = "#750ff7";
  for (let i=0;i<pink.length;i++){
    if (pink[i].className === "pink-text" ) {
      pink[i].style.color = "#750ff7";
    } else {
      pink[i].style.backgroundColor = "#750ff7";
    }
  }

  // Change all links to Blue color
  for (let i=0;i<links.length;i++){
    if (links[i].href) {
      links[i].style.color = "#750ff7";
    }
  }
})

// Modify Front End Tools with a button Click
const feModify = document.querySelector("#frontlistmodifier");
const targetLi = document.querySelector("#front-dev-tools").children;
const tools = ["VS Code", "GitHub", "Terminal"]
// Add Event Listener to the Modify Button
feModify.addEventListener("click", function(){
  for (let i=0;i<targetLi.length;i++) {
    targetLi[i].innerHTML = tools[i];
  }
});

// Add Tools to Backend Tools using a form
const inputAdd = document.querySelector("#add-dev-tools");
const buttonAdd = document.querySelector("#devaddbtn");
const backList = document.querySelector("#back-dev-tools");

// Add User Inputted dev tool to the list
buttonAdd.addEventListener("click", function(){
  const value = inputAdd.value;
  const newLi = document.createElement("li");
  newLi.innerText = value;
  backList.appendChild(newLi);
  inputAdd.value = "";
});




