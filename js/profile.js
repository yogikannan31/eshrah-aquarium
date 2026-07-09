const user =
JSON.parse(
localStorage.getItem("eshrahUser")
);

if(user){

    document.getElementById(
        "userName"
    ).innerText = user.name || "User";

    document.getElementById(
        "userEmail"
    ).innerText = user.email || "-";

    document.getElementById(
        "userPhone"
    ).innerText = user.phone || "-";

    document.getElementById(
        "userAddress"
    ).innerText =
    user.address || "Tamil Nadu, India";
}

const wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

document.getElementById(
    "wishlistCount"
).innerText =
wishlist.length;

const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

document.getElementById(
    "orderCount"
).innerText =
orders.length;

function logout(){

    localStorage.removeItem(
        "loggedInUser"
    );

    alert(
        "Logged out successfully"
    );

    window.location.href =
    "index.html";
}