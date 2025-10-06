//your JS code here. If required.
const openBtn = document.getElementById("openModal"); 
const modal = document.getElementById("modal"); 
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
	modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});