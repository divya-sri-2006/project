// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
let cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// Add to Cart
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", function () {

        const productCard = this.closest(".product-card");
        const priceText = productCard.querySelector(".price").innerText;

        const price = parseInt(priceText.replace("₹", "").replace(",", ""));
const name = productCard.querySelector("h3").innerText.trim();
const existing = cart.find(item => item.name === name);

if (existing) {
    existing.quantity++;
} else {
    cart.push({
        name: name,
        price: price,
        quantity: 1
    });
}

cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

localStorage.setItem("cart", JSON.stringify(cart));
updateCart();

        this.innerText = "✓ Added to Cart";

        setTimeout(() => {
            this.innerText = "🛒 Add to Cart";
        }, 1200);
    });
});

// Update Cart
function updateCart() {
    const cartNumber = document.querySelector(".cart-count");
    const cartAmount = document.querySelector(".cart-amount");

    if (cartNumber) {
        cartNumber.innerText = cartCount;
    }

    if (cartAmount) {
        cartAmount.innerText = "₹" + cartTotal;
    }
}

// Search Products
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            const productName =
                product.querySelector("h3").innerText.toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Shop Now Button
const shopButton = document.querySelector(".shop-btn");

if (shopButton) {
    shopButton.addEventListener("click", function () {
        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Newsletter
const newsletterButton = document.querySelector(".newsletter button");

if (newsletterButton) {
    newsletterButton.addEventListener("
