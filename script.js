<<<<<<< HEAD

document.getElementById("loginBtn").onclick = () =>{
document.getElementById("loginPopup").style.display="flex";
}

document.getElementById("signupBtn").onclick = () =>{
document.getElementById("signupPopup").style.display="flex";
}

function closePopup(id){
document.getElementById(id).style.display="none";
}

function scrollToFood(){
window.scrollTo({
top:600,
behavior:"smooth"
});
}


function addToCart(item, price){
  alert(item + " added to cart 🛒");
}

//modal

function openLogin(){
  document.getElementById("loginModal").style.display="flex";
}

function closeLogin(){
  document.getElementById("loginModal").style.display="none";
}

function openSignup(){
  document.getElementById("signupModal").style.display="flex";
}

function closeSignup(){
  document.getElementById("signupModal").style.display="none";
}

function switchToSignup(){
  closeLogin();
  openSignup();
}

function switchToLogin(){
  closeSignup();
  openLogin();
}

function signupUser(){
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup Successful!");
  closeSignup();
}

function loginUser(){
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if(email === storedEmail && password === storedPassword){
    alert("Login Successful!");
    closeLogin();
  } else {
    alert("Invalid Credentials!");
  }
}

function sendMessage() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let successMsg = document.getElementById("successMsg");

  if(name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if(!email.includes("@")) {
    alert("Enter valid email!");
    return;
  }

  successMsg.innerText = "✅ Message Sent Successfully!";
  successMsg.style.color = "green";
  successMsg.style.marginTop = "10px";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
=======
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

//Form Validation and Submission
document
  .getElementById("form")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mob = document.getElementById("mob").value;

    if (name && email && mob) {
      alert(`Feedback Sent! Thankyou so much ${name} for your feedback.`);
      this.reset(); // Reset the form fields after submission
    } else {
      alert("Please fill the all required fields.");
    }
  });

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
>>>>>>> 4849e78c305f412d7616a4c06533aa002797c368
