function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("mobile-menu");
}
const openSignup = document.getElementById("openSignup");
const signupPopup = document.getElementById("signupPopup");
const closeSignup = document.getElementById("closeSignup");

// Open
openSignup.addEventListener("click", () => {
  signupPopup.style.display = "flex";
});

// Close
closeSignup.addEventListener("click", () => {
  signupPopup.style.display = "none";
});

// Close on clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === signupPopup) {
    signupPopup.style.display = "none";
  }
});
