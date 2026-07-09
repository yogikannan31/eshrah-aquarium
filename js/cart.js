function addToCart(name, price, image = "") {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + " added to cart successfully!");

    window.location.href = "cart.html";
}

function updateCartCount() {

    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const countElement =
        document.getElementById("cart-count");

    if (countElement) {
        countElement.innerText = cart.length;
    }
}

document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);