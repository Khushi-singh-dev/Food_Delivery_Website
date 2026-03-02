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

function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}