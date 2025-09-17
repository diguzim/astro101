export const products = [
  { id: 1, name: "Laptop", price: 999.99, stock: 10 },
  { id: 2, name: "Smartphone", price: 499.99, stock: 25 },
  { id: 3, name: "Tablet", price: 299.99, stock: 15 },
  { id: 4, name: "Headphones", price: 199.99, stock: 30 },
  { id: 5, name: "Smartwatch", price: 199.99, stock: 20 },
];

export const listProducts = () => {
  return products;
};

export const purchaseProduct = (id: number, quantity: number) => {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  if (product.stock < quantity) {
    throw new Error("Insufficient stock");
  }
  product.stock -= quantity;
  return products;
};
