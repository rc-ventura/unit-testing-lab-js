export function applyDiscount(price, percentage) {

  if (percentage < 0 || percentage > 100) {
    throw new Error("Invalid discount")
  }

  const discount = price * (percentage / 100)

  return price - discount
}