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

let cart=JSON.parse(sessionStorage.getItem('cart')) || [];

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    let productList=document.getElementById('product-list');
	  productList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
	 
	products.forEach((product)=>{
		
		if(product.id==productId){
			cart.push(product);
			sessionStorage.setItem("cart",JSON.stringify(cart));
			renderCart();
		}
	})
	
	
}

// Render cart list
function renderCart() {
	let cartList = document.getElementById('cart-list');
  cartList.innerHTML = ``;  // Clear the cart list
	cart.forEach((cartItem)=>{
		const li=document.createElement("li");
			li.innerHTML+=`${cartItem.name} - $${cartItem.price}<button class="removefromcart" data-id="${cartItem.id}" onclick="removeFromCart(${cartItem.id})">Remove from Cart</button>`;
			cartList.appendChild(li);
		
	});
}


	

// Remove item from cart
function removeFromCart(cartItemId) {
	


cart = cart.filter(cartItem => cartItem.id != cartItemId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
	cart=[];
	sessionStorage.setItem("cart", JSON.stringify("cart"));
}

// Initial render
let productList = document.getElementById("product-list");
renderProducts();
renderCart();


