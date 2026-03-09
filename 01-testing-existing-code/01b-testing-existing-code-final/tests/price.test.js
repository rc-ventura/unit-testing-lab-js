import { calculateTotal } from "../src/price"
import { describe, test, expect } from "vitest"

describe("calculateTotal()", () => {

  test("must calculate the total correctly", () => {

    // Arrange
    const price = 10
    const quantity = 2

    // Act
    const result = calculateTotal(price, quantity)

    // Assert
    expect(result).toBe(20)

  })

  test("must throw an error if the price is less than or equal to zero", () => {

    // Arrange
    const price = 0
    const quantity = 2

    // Act + Assert
    expect(() => calculateTotal(price, quantity)).toThrow()

  })

  test("must throw an error if the quantity is less than or equal to zero", () => {

    // Arrange
    const price = 10
    const quantity = 0

    // Act + Assert
    expect(() => calculateTotal(price, quantity)).toThrow()

  })

})