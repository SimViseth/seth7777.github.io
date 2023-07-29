
function showPaymentForm() {
    const purchaseFormContainer = document.getElementById("purchaseFormContainer");
    purchaseFormContainer.style.display = "flex";
}

function cancelPurchase() {
    var formContainer = document.getElementById("purchaseFormContainer");
    formContainer.style.display = "none";
}