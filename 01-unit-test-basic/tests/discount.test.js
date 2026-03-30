import { describe, test, expect } from 'vitest'
import { applyDiscount } from '../src/discount.js'

describe('applyDiscount()', () => {

  test('deve retornar o preço com desconto aplicado corretamente', () => {
    // Arrange
    const price = 100
    const percentage = 10

    // Act
    const result = applyDiscount(price, percentage)

    // Assert
    expect(result).toBe(90)
  })

  test('deve retornar o preço original quando o desconto é 0%', () => {
    // Arrange
    const price = 200
    const percentage = 0

    // Act
    const result = applyDiscount(price, percentage)

    // Assert
    expect(result).toBe(price)
  })

  test('deve retornar zero quando o desconto é 100%', () => {
    // Arrange
    const price = 150
    const percentage = 100

    // Act
    const result = applyDiscount(price, percentage)

    // Assert
    expect(result).toBe(0)
  })

  test('o resultado deve ser do tipo number', () => {
    // Arrange
    const price = 80
    const percentage = 25

    // Act
    const result = applyDiscount(price, percentage)

    // Assert
    expect(typeof result).toBe('number')
  })

  test('o resultado não deve ser NaN', () => {
    // Arrange
    const price = 50
    const percentage = 20

    // Act
    const result = applyDiscount(price, percentage)

    // Assert
    expect(result).not.toBeNaN()
  })

  test('deve lançar erro quando o desconto é negativo', () => {
    // Arrange
    const price = 100
    const percentage = -5

    // Act
    const act = () => applyDiscount(price, percentage)

    // Assert
    expect(act).toThrow('Desconto inválido')
  })

  test('deve lançar erro quando o desconto é maior que 100%', () => {
    // Arrange
    const price = 100
    const percentage = 110

    // Act
    const act = () => applyDiscount(price, percentage)

    // Assert
    expect(act).toThrow('Desconto inválido')
  })

})
