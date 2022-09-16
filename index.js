// const queryBtn = document.querySelector(".button_style");
// queryBtn.addEventListener("click", addNewDiv);

// const demo = document.getElementById("btn1");
// console.log(demo);
// // document.getElementById("btn1").addEventListener("onclick", console.log("Hello World"));

function addNewDiv() {
  var count = 1;
  const divContainer = document.getElementById("container_section");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `Hello ${count}`;
  newDiv.classList.add("div_style");
  divContainer.appendChild(newDiv);
  count+=1;
}

// function removeNewDiv() {
//   const divContainer = document.getElementById("container_section");
//   const child = document.getElementsByClassName("div_style");
//   // const newDiv = document.createElement("div");
//   // newDiv.innerHTML = "Hello"
//   // newDiv.classList.add("div_style");
//   divContainer.removeChild(child);
// }
