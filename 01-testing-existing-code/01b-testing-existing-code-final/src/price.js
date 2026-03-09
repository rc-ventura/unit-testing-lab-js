export function calculateTotal(price, quantity) {

  if (price <= 0) {
    throw new Error("Invalid price")
  }

  if (quantity <= 0) {
    throw new Error("Invalid quantity")
  }

  return price * quantity
}