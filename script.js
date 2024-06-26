// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    let productList=document.getElementById('product-list');
	  productList.appendChild(li);
  });
}

// Render cart list
function renderCart(productId) {
	products.forEach((product)=>{
		sessionStorage.setItem("cart",product);
		if(product.id==productId){
			const li=document.createElement("li");
			li.innerHTML=`${product.name} - $${product.price}<button class="removefromcart" data-id="${product.id}">Remove from Cart</button>`;
			let cartList=document.getElementById('cart-list');
			cartList.appendChild(li);
		}
	})
}

// Add item to cart
function addToCart(productId) {
	renderCart(productId);
}
	

// Remove item from cart
function removeFromCart(productId) {
	
}

// Clear cart
function clearCart() {}

// Initial render
let productList = document.getElementById("product-list");
renderProducts();
renderCart();


