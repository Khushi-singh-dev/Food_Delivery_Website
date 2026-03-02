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

// addToCart
function addToCart(item, price) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.name === name);

  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item + " added to cart 🛒");
  window.location.href = "cart.html";
}

// updateCartCount
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalItems = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
  });

  document.getElementById("cart-count").innerText = totalItems;
}

// updateQty
function updateQty(index, qty) {

  let cart = JSON.parse(localStorage.getItem("cart"));

  cart[index].quantity = parseInt(qty);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCartItems();
  updateCartCount();
}

// removeItem
function removeItem(index) {

  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCartItems();
  updateCartCount();
}

// buyNow
function buyNow(name, price) {

  let cart = [];

  cart.push({
    name: name,
    price: price,
    quantity: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
  alert(name + " added to cart 🛒");
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

function displayCartItems() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {

    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <span class="cart-price">₹${item.price}</span>
        <input type="number" value="${item.quantity}" min="1"
        class="cart-qty"
        onchange="updateQty(${index}, this.value)">
        <button class="remove-btn" onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  document.getElementById("total-price").innerText = "Total: ₹" + total;
}

window.onload = function() {
  updateCartCount();
}
