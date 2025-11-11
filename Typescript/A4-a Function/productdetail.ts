interface Product {
  pId: number;
  productName: string;
  productPrice: number;
  productAvailable: boolean;
  productDiscount: string;
  imageUrl: string;
  productDescription: string;
}

window.onload = () => {
  const productData = localStorage.getItem("Product");
  if (!productData) return;

  const product: Product = JSON.parse(productData);

  (document.getElementById("pName") as HTMLElement).textContent = product.productName;
  (document.getElementById("pPrice") as HTMLElement).textContent = product.productPrice.toString();
  (document.getElementById("pAvailable") as HTMLElement).textContent = product.productAvailable ? "In Stock" : "Out of Stock";
  (document.getElementById("pDiscount") as HTMLElement).textContent = product.productDiscount;
  (document.getElementById("phoneimage") as HTMLImageElement).src = `./images/${product.imageUrl}`;
};