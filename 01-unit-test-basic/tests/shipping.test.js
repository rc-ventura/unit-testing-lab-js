import { describe, test, expect } from 'vitest'
import { calculateShipping } from '../src/shipping.js'

describe('calculateShipping()', () => {

  test('deve retornar 10 para peso até 1kg', () => {
    // Arrange
    const weight = 0.5

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(result).toBe(10)
  })

  test('deve retornar 10 para peso exatamente igual a 1kg (limite)', () => {
    // Arrange
    const weight = 1

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(result).toBe(10)
  })

  test('deve retornar 20 para peso entre 1kg e 5kg', () => {
    // Arrange
    const weight = 3

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(result).toBe(20)
  })

  test('deve retornar 40 para peso acima de 5kg', () => {
    // Arrange
    const weight = 10

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(result).toBe(40)
  })

  test('o resultado deve ser do tipo number', () => {
    // Arrange
    const weight = 2

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(typeof result).toBe('number')
  })

  test('o resultado não deve ser undefined', () => {
    // Arrange
    const weight = 4

    // Act
    const result = calculateShipping(weight)

    // Assert
    expect(result).not.toBeUndefined()
  })

  test('deve lançar erro quando o peso é zero', () => {
    // Arrange
    const weight = 0

    // Act
    const act = () => calculateShipping(weight)

    // Assert
    expect(act).toThrow('Peso inválido')
  })

  test('deve lançar erro quando o peso é negativo', () => {
    // Arrange
    const weight = -2

    // Act
    const act = () => calculateShipping(weight)

    // Assert
    expect(act).toThrow('Peso inválido')
  })

})
