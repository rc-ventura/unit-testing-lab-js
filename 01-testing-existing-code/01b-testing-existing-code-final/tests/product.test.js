import { validateProduct } from "../src/product"
import { describe, test, expect } from "vitest"

describe("validateProduct()", () => {

  test("must validate product correctly", () => {
    //Arrange
    const product = {
      name: "Notebook",
      price: 3000,
      stock: 5
    }

    //Act
    const result = validateProduct(product)

    //Assert
    expect(result).toBe(true)

  })

  test("must throw an error if the name is empty", () => {
    //Arrange
    const product = {
      name: "",
      price: 100,
      stock: 5
    }

    //Act + Assert
    expect(() => validateProduct(product)).toThrow()

  })

  test("must throw an error if the price is invalid", () => {
    //Arrange
    const product = {
      name: "Mouse",
      price: 0,
      stock: 5
    }

    //Act + Assert
    expect(() => validateProduct(product)).toThrow()

  })


test("must throw an error if the stock is negative", () => {
    //Arrange
    const product = {
      name: "Teclado",
      price: 200,
      stock: -1
    }

    //Act 
    const result = validateProduct(product)

    
    //Assert
    expect(result).toThrow();

  })

  test("must throw an error if the stock is negative", () => {
    //Arrange
    const product = {
      name: "Computador",
      price: 100,
      stock: -1
    }

    //Act 
    const result = () => validateProduct(product)

    
    //Assert
    expect(result).toThrow();

  })

  test("must throw an error if the stock is negative", () => {
  // Arrange
  const product = {
    name: "Teclado",
    price: 200,
    stock: -1
  }
  
  let errorMessage = ""
  
  // Act
  try {
    validateProduct(product)
  } catch (error) {
    errorMessage = error.message
  }
  
  // Assert
  expect(errorMessage).toBe("Stock is invalid")
})

test("must throw an error if the stock is negative", () => {
  // Arrange
  const product = {
    name: "Teclado",
    price: 200,
    stock: -1
  }
    
  // Act
  
  expect(() => new Error("Stock cannot be negative"))
  
  // Assert
  
})

})

