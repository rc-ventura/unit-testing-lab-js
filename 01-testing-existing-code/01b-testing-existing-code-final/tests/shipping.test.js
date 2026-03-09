import { calculateShipping } from "../src/shipping"
import { describe, test, expect } from "vitest"

describe("calculateShipping()", () => {

  test("frete deve ser 10 para peso até 1kg", () => {
    //Arrange
    const weight = 1

    //Act
    const result = calculateShipping(weight)

    //Assert
    expect(result).toBe(10)

  })

  test("frete deve ser 20 para peso entre 1kg e 5kg", () => {
    //Arrange
    const weight = 3

    //Act
    const result = calculateShipping(weight)

    //Assert
    expect(result).toBe(20)

  })

  test("frete deve ser 40 para peso acima de 5kg", () => {
    //Arrange
    const weight = 10

    //Act
    const result = calculateShipping(weight)

    //Assert
    expect(result).toBe(40)

  })

  test("deve lançar erro se peso for inválido", () => {
    //Arrange

    //Act + Assert
    expect(() => calculateShipping(0)).toThrow()

  })

})