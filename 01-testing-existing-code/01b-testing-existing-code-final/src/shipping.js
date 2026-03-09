export function calculateShipping(weight) {

  if (weight <= 0) {
    throw new Error("Invalid weight")
  }

  if (weight <= 1) {
    return 10
  }

  if (weight <= 5) {
    return 20
  }

  return 40
}