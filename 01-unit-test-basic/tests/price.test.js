import { describe, test, expect } from 'vitest'
import { calculateTotal } from '../src/price.js'

describe('calculateTotal()', () => {

  test('deve retornar o total correto para valores válidos', () => {
    // Arrange
    const price = 10
    const quantity = 3

    // Act
    const result = calculateTotal(price, quantity)

    // Assert
    expect(result).toBe(30)
  })

  test('o resultado deve ser do tipo number', () => {
    // Arrange
    const price = 5
    const quantity = 2

    // Act
    const result = calculateTotal(price, quantity)

    // Assert
    expect(typeof result).toBe('number')
  })

  test('o resultado não deve ser NaN', () => {
    // Arrange
    const price = 9.99
    const quantity = 3

    // Act
    const result = calculateTotal(price, quantity)

    // Assert
    expect(result).not.toBeNaN()
  })

  test('deve lançar erro quando o preço é zero', () => {
    // Arrange
    const price = 0
    const quantity = 5

    // Act
    const act = () => calculateTotal(price, quantity)

    // Assert
    expect(act).toThrow('Preço inválido')
  })

  test('deve lançar erro quando a quantidade é negativa', () => {
    // Arrange
    const price = 10
    const quantity = -1

    // Act
    const act = () => calculateTotal(price, quantity)

    // Assert
    expect(act).toThrow('Quantidade inválida')
  })

})
