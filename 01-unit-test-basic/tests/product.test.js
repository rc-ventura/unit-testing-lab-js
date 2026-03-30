import { describe, test, expect } from 'vitest'
import { validateProduct } from '../src/product.js'

describe('validateProduct()', () => {

  test('deve retornar true para um produto válido', () => {
    // Arrange
    const product = { name: 'Teclado', price: 150, stock: 10 }

    // Act
    const result = validateProduct(product)

    // Assert
    expect(result).toBe(true)
  })

  test('o resultado deve ser do tipo boolean', () => {
    // Arrange
    const product = { name: 'Mouse', price: 80, stock: 5 }

    // Act
    const result = validateProduct(product)

    // Assert
    expect(typeof result).toBe('boolean')
  })

  test('o resultado não deve ser undefined', () => {
    // Arrange
    const product = { name: 'Monitor', price: 900, stock: 2 }

    // Act
    const result = validateProduct(product)

    // Assert
    expect(result).not.toBeUndefined()
  })

  test('deve aceitar produto com estoque zero (produto esgotado é válido)', () => {
    // Arrange
    const product = { name: 'Headset', price: 200, stock: 0 }

    // Act
    const result = validateProduct(product)

    // Assert
    expect(result).toBe(true)
  })

  test('deve lançar erro quando o nome está ausente', () => {
    // Arrange
    const product = { price: 100, stock: 5 }

    // Act
    const act = () => validateProduct(product)

    // Assert
    expect(act).toThrow('Nome obrigatório')
  })

  test('deve lançar erro quando o nome é uma string vazia', () => {
    // Arrange
    const product = { name: '', price: 100, stock: 5 }

    // Act
    const act = () => validateProduct(product)

    // Assert
    expect(act).toThrow('Nome obrigatório')
  })

  test('deve lançar erro quando o preço é zero', () => {
    // Arrange
    const product = { name: 'Produto', price: 0, stock: 5 }

    // Act
    const act = () => validateProduct(product)

    // Assert
    expect(act).toThrow('Preço inválido')
  })

  test('deve lançar erro quando o preço é negativo', () => {
    // Arrange
    const product = { name: 'Produto', price: -10, stock: 5 }

    // Act
    const act = () => validateProduct(product)

    // Assert
    expect(act).toThrow('Preço inválido')
  })

  test('deve lançar erro quando o estoque é negativo', () => {
    // Arrange
    const product = { name: 'Produto', price: 50, stock: -3 }

    // Act
    const act = () => validateProduct(product)

    // Assert
    expect(act).toThrow('Estoque inválido')
  })

})
