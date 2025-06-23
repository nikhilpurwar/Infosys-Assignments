var mobileName: string = "Samsung Galaxy Gold";
const mobilePrice: number = 14999;
const mobileStatus: string = "In Stock";

// Update HTML elements using their IDs
document.getElementById("pName")!.innerHTML = mobileName;
document.getElementById("pPrice")!.innerHTML = mobilePrice.toString();
document.getElementById("pAvailable")!.innerHTML = mobileStatus;
