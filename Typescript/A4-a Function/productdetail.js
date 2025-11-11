window.onload = function () {
    var productData = localStorage.getItem("Product");
    if (!productData)
        return;
    var product = JSON.parse(productData);
    document.getElementById("pName").textContent = product.productName;
    document.getElementById("pPrice").textContent = product.productPrice.toString();
    document.getElementById("pAvailable").textContent = product.productAvailable ? "In Stock" : "Out of Stock";
    document.getElementById("pDiscount").textContent = product.productDiscount;
    document.getElementById("phoneimage").src = "./images/".concat(product.imageUrl);
};
