let grandTotal = 0;

window.onload = function () {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let cartBody = document.getElementById("cartBody");

    cartBody.innerHTML = "";

    cartItems.forEach((item, index) => {

        // default qty = 1
        if (!item.qty) item.qty = 1;

        let total = item.price * item.qty;

        let row = `
        <tr>

            <td>
                <img src="${item.image}" width="80">
            </td>

            <td>${item.title}</td>

            <td>₹${item.price}</td>

            <td>
                ${item.qty}
            </td>

            <td>
                ₹<span id="total${index}">
                    ${total}
                </span>
            </td>

            <td>
                <button class="btn btn-danger btn-sm"
                    onclick="removeItem(${index})">
                    X
                </button>
            </td>

        </tr>
        `;

        cartBody.innerHTML += row;
    });

    updateCartTotal();
};


// UPDATE GRAND TOTAL
function updateCartTotal() {

    let totals = document.querySelectorAll("[id^='total']");

    grandTotal = 0;

    totals.forEach(el => {
        grandTotal += parseInt(el.innerText) || 0;
    });

    document.getElementById("cartSubtotal").innerText = grandTotal;
    document.getElementById("grandTotal").innerText = grandTotal;

    localStorage.setItem("grandTotal", grandTotal);
}


// REMOVE ITEM
function removeItem(index) {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    location.reload();
}


// SAVE CART
function saveCartData() {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems.length === 0) {
        alert("Cart is empty");
        return;
    }

    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));

    window.location.href = "checkout.html";
}