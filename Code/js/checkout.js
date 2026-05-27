function payNow() {

    let name = document.getElementById("customerName").value;
    let address = document.getElementById("customerAddress").value;
    let city = document.getElementById("customerCity").value;
    let zip = document.getElementById("customerZip").value;
    let email = document.getElementById("customerEmail").value;
    let phone = document.getElementById("customerPhone").value;

    if (!name || !email || !phone) {
        alert("Please fill required fields");
        return;
    }

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let grandTotal = 0;
    let productList = "";

    cartItems.forEach(item => {

        let total = item.price * item.qty;
        grandTotal += total;

        productList += `${item.title} x ${item.qty} = ₹${total}\n`;
    });

    var options = {
        key: "rzp_test_SuIQ9ezp7IyYni",
        amount: grandTotal * 100,
        currency: "INR",
        name: "New Life Battery",
        description: "Order Payment",

        handler: function (response) {

            let message =
                "🛒 NEW ORDER\n\n" +
                "👤 Name: " + name + "\n" +
                "📧 Email: " + email + "\n" +
                "📱 Phone: " + phone + "\n" +
                "📍 Address: " + address + "\n" +
                "🏙️ City: " + city + "\n" +
                "📮 PIN: " + zip + "\n\n" +
                "📦 PRODUCTS:\n" +
                productList + "\n" +
                "💰 TOTAL: ₹" + grandTotal + "\n\n" +
                "Payment ID: " + response.razorpay_payment_id;

            window.open(
                "https://wa.me/917507607014?text=" + encodeURIComponent(message),
                "_blank"
            );

            localStorage.removeItem("cartItems");

            window.location.href = "index.html";
        },

        prefill: {
            name: name,
            email: email,
            contact: phone
        },

        theme: {
            color: "#28a745"
        }
    };

    let rzp = new Razorpay(options);
    rzp.open();
}

// LOAD CART ITEMS ON CHECKOUT PAGE
window.onload = function () {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let checkoutItems = document.getElementById("checkoutItems");

    let grandTotal = 0;

    cartItems.forEach(item => {

        let qty = item.qty || 1;
        let total = item.price * qty;

        grandTotal += total;

        checkoutItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                <span>${item.title} × ${qty}</span>
                <span>₹${total}</span>
            </li>
        `;
    });

    checkoutItems.innerHTML += `
        <li class="list-group-item d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>₹${grandTotal}</span>
        </li>
    `;

    localStorage.setItem("grandTotal", grandTotal);
};