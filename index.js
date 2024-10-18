// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph that has the id="error".

let purchaseButton = document.getElementsByTagName("button")[0];
let errorMessage = document.getElementById("error");

errorMessage.innerHTML = "";

function displayErrorMessage() {
    errorMessage.innerHTML = "Something went wrong, please try again";
}

purchaseButton.addEventListener("click", displayErrorMessage);