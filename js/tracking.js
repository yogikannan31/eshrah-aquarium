function trackOrder() {

    const order =
        document.getElementById(
            "order-id"
        ).value;

    const result =
        document.getElementById(
            "tracking-result"
        );

    if(order === "ESH001"){
        result.innerHTML =
        "Order shipped and arriving tomorrow.";
    }
    else{
        result.innerHTML =
        "Order not found.";
    }
}
function completePayment(){

    alert("Payment Successful!");

    window.location.href = "tracking.html";

}