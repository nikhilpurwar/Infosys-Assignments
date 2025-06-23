interface MobileVariant {
  name: string;
  price: number;
  available: string;
  discount: string;
}

const mobileVariants: Record<string, MobileVariant> = {
  gold: {
    name: "Gold Platinum",
    price: 799,
    available: "In Stock",
    discount: "10%",
  },
  pink: {
    name: "Pink Gold",
    price: 749,
    available: "Limited Stock",
    discount: "5%",
  },
  silver: {
    name: "Silver Titanium",
    price: 699,
    available: "Out of Stock",
    discount: "0%",
  },
};

function getMobileByColor(color: keyof typeof mobileVariants): void {
  const variant = mobileVariants[color];
  if (!variant) return;

  (document.getElementById("pName") as HTMLElement).textContent = variant.name;
  (document.getElementById("pPrice") as HTMLElement).textContent = variant.price.toString();
  (document.getElementById("pAvailable") as HTMLElement).textContent = variant.available;
  (document.getElementById("pDiscount") as HTMLElement).textContent = variant.discount;
}

window.onload = () => {
  (document.getElementById("gold") as HTMLElement).textContent = mobileVariants.gold.price.toString();
  (document.getElementById("pinkgold") as HTMLElement).textContent = mobileVariants.pink.price.toString();
  (document.getElementById("silver") as HTMLElement).textContent = mobileVariants.silver.price.toString();
};