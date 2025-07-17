document.addEventListener('DOMContentLoaded', () => {
    const product = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 59.99 },
        { id: 3, name: "Product 3", price: 69.99 },
    ];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotalMessage = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const btn = document.getElementById('checkout-btn');

    //  Fix 1: Correct </button> tag
    product.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>`;
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            console.log('clicked button');
            const productId = parseInt(e.target.getAttribute('data-id'));
            const foundProduct = product.find(p => p.id === productId);

            //  Fix 2: Prevent null product from being added
            if (foundProduct) {
                addToCart(foundProduct);
            } else {
                console.warn('Product not found for ID:', productId);
            }
        }
    });

    function addToCart(product) {
        cart.push(product);
        saveCart();
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            cart.forEach((item, index) => {
                //  Fix 3: Skip bad entries just in case
                if (!item || !item.price) return;

                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}   
                    <button class="remove-btn" data-index="${index}">Remove</button>`;
                cartItems.appendChild(cartItem);
            });
            totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove('hidden');
            cartTotalMessage.classList.add('hidden');
            totalPriceDisplay.textContent = `$0.00`;
        }
    }

    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            cart.splice(index, 1);
            saveCart();
            renderCart();
        }
    });

    btn.addEventListener('click', () => {
        cart.length = 0;
        saveCart(); //  fix: update localStorage on checkout
        alert("Checkout successful");
        renderCart();
    });

    renderCart();
});
