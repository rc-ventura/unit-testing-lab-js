import { describe, test, expect } from "vitest"
import { applyDiscount } from "../src/discount"

describe("applyDiscount()", () => {

  test("must apply discount correctly", () => {
    //Arrange
    const price = 100
    const percentage = 10

    //Act
    const result = applyDiscount(price, percentage)

    //Assert
    expect(result).toBe(90)

  })

  test("must return the same value if the discount is 0%", () => {
    //Arrange
    const price = 100
    const percentage = 0

    //Act
    const result = applyDiscount(price, percentage)

    //Assert
    expect(result).toBe(100)

  })

  test("must throw an error if the discount is greater than 100", () => {
    //Arrange

    //Act + Assert
    expect(() => applyDiscount(100, 150)).toThrow()

  })

  test("must throw an error if the discount is negative", () => {
    //Arrange

    //Act + Assert
    expect(() => applyDiscount(100, -10)).toThrow()

  })

})