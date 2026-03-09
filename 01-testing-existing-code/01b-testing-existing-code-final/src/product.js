export function validateProduct(product) {

  if (!product.name) {
    throw new Error("Name is required")
  }

  if (product.price <= 0) {
    throw new Error("Price is invalid")
  }

  if (product.stock < 0) {
    throw new Error("Stock is invalid")
  }

  return true
}