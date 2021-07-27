const addBtn = document.getElementById("add-btn");
const input = document.querySelector("#love-letter");
const renderer = document.getElementById("love-letter-renderer");
const letter = document.getElementById("letter");
const allBtns = document.querySelectorAll(".btn");
console.log("allBtns:", allBtns);

for (let i = 0; i < allBtns.length; i++) {
  console.log("the button text", allBtns[i].innerText);
}

for (let individualBtn of allBtns) {
  console.log(individualBtn.innerText);
}

allBtns.forEach((eachBtn) => {
  console.log("eachBtn:", eachBtn.innerText);
});

console.log(Array.from(allBtns).map((btn) => btn.innerText.toUpperCase()));

addBtn.addEventListener("mouseenter", () => {
  addBtn.innerText = `Ah ah that burns`;
});

// addBtn.addEventListener("mouseleave", () => {
//   addBtn.innerText = "Oooof, that's better";
// });

addBtn.onmouseleave = () => {
  addBtn.innerText = "Oooof, that's better";
};

input.addEventListener("keydown", (event) => {
  console.log("event:", event.target.value);
  console.log("HEEY");
  const inputText = event.target.value;
  renderer.innerText = inputText;
});

letter.addEventListener("keydown", (event) => {
  const inputText = event.target.value;
  // renderer.innerText = inputText;
  renderer.innerHTML = inputText;
});

document.body.addEventListener("copy", (event) => {
  event.preventDefault();
  alert("Stop it!");
});
