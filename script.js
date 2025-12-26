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

// Form Validation and Submission
// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name && email && message) {
//       alert("Message Sent! We will get back to you soon.");
//       // Here you would typically handle form submission via AJAX
//       this.reset(); // Reset the form fields after submission
//     } else {
//       alert("Please fill in all fields.");
//     }
//   });

document.getElementById("sign-up-form").addEventListener("click", function (e) {
    e.preventDefault();
    const Name = document.getElementById("userName").value;
    const Email = document.getElementById("userEmail").value;
    const Password = document.getElementById("userPassword").value;

    if (Name && Email && Password) {
      alert(`Sign Up Successfully! Thankyou ${Name} for Sign Up.`);
      this.reset(); 
    } else {
      alert(`${Name} Please fill in all fields.`);
    }
  });
