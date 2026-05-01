let cartCount = 0;

const toast = document.getElementById("toast");
const cartDisplay = document.getElementById("cartCount");
const cartBox = document.getElementById("cartDisplay");

/* TOAST */
function showToast(msg){
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

/* ADD TO CART */
document.querySelector(".add-cart").addEventListener("click",()=>{
  cartCount++;
  cartDisplay.innerText = cartCount;
  if(cartBox) cartBox.innerText = cartCount;
  showToast("Added to Cart 🛒");
});

/* BUY NOW SCROLL */
document.querySelectorAll(".buy-now").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById("order").scrollIntoView({behavior:"smooth"});
  });
});

/* BOX SLIDER */
const container = document.getElementById("boxContainer");

document.querySelector(".scroll-btn.right").onclick = () =>{
  container.scrollBy({left:250,behavior:"smooth"});
}

document.querySelector(".scroll-btn.left").onclick = () =>{
  container.scrollBy({left:-250,behavior:"smooth"});
}

/* EMAILJS ORDER FORM */
document.getElementById("orderForm").addEventListener("submit",function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_fifnc0p",
    "template_e3t4ccr",
    this
  ).then(()=>{
    showToast("Order Placed Successfully ✅");
    this.reset();
  }).catch(err=>{
    showToast("Failed ❌");
    console.log(err);
  });
});