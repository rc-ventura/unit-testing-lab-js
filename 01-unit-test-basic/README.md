# 🧪 PROJETO 1 — Testando Código Existente

---

## 🎯 Objetivo da Aula

Aprender a **escrever testes unitários para funções já implementadas**, dominando os fundamentos do testing em JavaScript.

Ao final desta aula, vocês terão criado uma suíte completa de testes para validar funções de um sistema de e-commerce — e mais importante, terão internalizado **como pensar em cenários de teste e cobrir edge cases.**

---

## 🧠 O que são Testes Unitários?

Testes unitários validam **unidades isoladas de código** (geralmente funções) para garantir que elas se comportam conforme esperado.

Cada teste segue o padrão **AAA**:

```
📝 ARRANGE  →  prepare os dados de entrada
⚡ ACT      →  execute a função sendo testada
✅ ASSERT   →  verifique se o resultado está correto
```

**Conceitos fundamentais:**

- **`describe()`** — agrupa testes relacionados (test suite)
- **`test()` ou `it()`** — define um caso de teste individual
- **`expect()`** — faz asserções sobre o resultado
- **Matchers** — `.toBe()`, `.toThrow()`, `.toEqual()`, etc.

> **Regra de ouro:** cada teste deve validar **um único comportamento** e ser **independente** dos demais.

---

## 🏢 O Cenário: Sistema de E-commerce

Vocês foram contratados para garantir a qualidade do código de um sistema de e-commerce. O time de desenvolvimento já implementou as funções principais, mas **nenhum teste foi escrito ainda.**

Sua missão é criar uma suíte completa de testes unitários para validar:

1. **`price.js`** — cálculo de preço total (preço × quantidade)
2. **`discount.js`** — aplicação de descontos percentuais
3. **`shipping.js`** — cálculo de frete baseado no peso
4. **`product.js`** — validação de dados de produtos

O código está funcionando, mas **sem testes, não há garantia de que continuará funcionando após mudanças.**

---

## 📦 Setup do Projeto

```bash
cd 01-unit-test-basic
npm install
npx vitest
```

Iniciando os testes pela primeira vez, você verá:

```
No test files found
```

**Isso é esperado.** Você vai criar os arquivos de teste do zero.

---

## 📁 Estrutura do Projeto

```
01-unit-test-basic/
├── src/
│   ├── price.js         ← já implementado
│   ├── discount.js      ← já implementado
│   ├── shipping.js      ← já implementado
│   └── product.js       ← já implementado
├── tests/
│   ├── price.test.js    ← você vai criar
│   ├── discount.test.js ← você vai criar
│   ├── shipping.test.js ← você vai criar
│   └── product.test.js  ← você vai criar
└── package.json
```

> ⚠️ **Os arquivos de `src/` não devem ser modificados.** Seu trabalho é criar testes que validem o comportamento atual do código.

---

## 🧪 Funções a Serem Testadas

### 📦 `price.js` — `calculateTotal(price, quantity)`

```javascript
export function calculateTotal(price, quantity) {
  if (price <= 0) {
    throw new Error("Preço inválido")
  }
  if (quantity <= 0) {
    throw new Error("Quantidade inválida")
  }
  return price * quantity
}
```

**Comportamentos esperados:**

- Retorna o total correto para valores válidos
- Retorna o total correto para valores decimais
- 🚨 Lança erro quando o preço é zero ou negativo
- 🚨 Lança erro quando a quantidade é zero ou negativa

---

### 📦 `discount.js` — `applyDiscount(price, percentage)`

```javascript
export function applyDiscount(price, percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Desconto inválido")
  }
  const discount = price * (percentage / 100)
  return price - discount
}
```

**Comportamentos esperados:**

- Retorna o preço com desconto aplicado corretamente
- Retorna o preço original quando o desconto é 0%
- Retorna zero quando o desconto é 100%
- 🚨 Lança erro quando o desconto é negativo
- 🚨 Lança erro quando o desconto é maior que 100%

---

### 📦 `shipping.js` — `calculateShipping(weight)`

```javascript
export function calculateShipping(weight) {
  if (weight <= 0) {
    throw new Error("Peso inválido")
  }
  if (weight <= 1) {
    return 10
  }
  if (weight <= 5) {
    return 20
  }
  return 40
}
```

**Comportamentos esperados:**

- Retorna 10 para peso até 1kg
- Retorna 20 para peso entre 1kg e 5kg
- Retorna 40 para peso acima de 5kg
- Testa os limites (boundary values: 1kg, 5kg)
- 🚨 Lança erro quando o peso é zero ou negativo

---

### 📦 `product.js` — `validateProduct(product)`

```javascript
export function validateProduct(product) {
  if (!product.name) {
    throw new Error("Nome obrigatório")
  }
  if (product.price <= 0) {
    throw new Error("Preço inválido")
  }
  if (product.stock < 0) {
    throw new Error("Estoque inválido")
  }
  return true
}
```

**Comportamentos esperados:**

- Retorna `true` para produto válido
- 🚨 Lança erro quando o nome está ausente ou vazio
- 🚨 Lança erro quando o preço é zero ou negativo
- 🚨 Lança erro quando o estoque é negativo
- Aceita estoque zero (produto esgotado é válido)

---

## 📊 Contagem de Testes

| Arquivo de Teste | Função | Testes Mínimos | Tipo |
| --- | --- | --- | --- |
| `price.test.js` | `calculateTotal()` | 4 | Unitário |
| `discount.test.js` | `applyDiscount()` | 5 | Unitário |
| `shipping.test.js` | `calculateShipping()` | 5 | Unitário |
| `product.test.js` | `validateProduct()` | 5 | Unitário |
| **Total** | **4 funções** | **19+** |  |

---

## ✅ Critério de Aceite

A atividade está completa quando o terminal mostrar:

```
 ✓ tests/price.test.js (4+)
 ✓ tests/discount.test.js (5+)
 ✓ tests/shipping.test.js (5+)
 ✓ tests/product.test.js (5+)

 Test Files  4 passed (4)
      Tests  19+ passed
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

O repositório deve conter os 4 arquivos de teste criados em `tests/`. Os arquivos de `src/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar todos os testes verdes conforme o modelo acima.

### 3. Reflexão escrita (mínimo 8 linhas)

Responda em texto livre:

- Qual foi o teste mais difícil de escrever? Por quê?
- Você descobriu algum comportamento inesperado ao testar as funções?
- Como você decidiu quais cenários testar?
- Qual a importância de testar casos de erro (`toThrow`)?

> A reflexão demonstra sua compreensão sobre o processo de testing e pensamento crítico.

---

## 💡 Dicas para a Aula

| Situação | O que fazer |
| --- | --- |
| Não sei como começar um teste | Use o padrão AAA: Arrange (prepare dados) → Act (execute função) → Assert (verifique resultado). |
| Como testar erros? | Use `expect(() => funcao()).toThrow("mensagem esperada")` |
| Quantos testes criar? | No mínimo um para cada comportamento descrito. Pense em: casos válidos, inválidos, limites e erros. |
| Os testes estão passando mas sinto que falta algo | Teste os boundary values (valores limite) e edge cases (casos extremos). |

---

## 📊 Matriz de Rastreabilidade de Testes

> Esta matriz mapeia cada teste ao comportamento que ele valida. Use-a como guia para garantir cobertura completa.

| ID | Módulo | Função | Cenário Testado | Dados de Entrada | Resultado Esperado | Tipo |
| --- | --- | --- | --- | --- | --- | --- |
| PR-01 | `price` | `calculateTotal()` | Cálculo válido básico | `(10, 2)` | `20` | Unitário |
| PR-02 | `price` | `calculateTotal()` | Preço negativo | `(-1, 2)` | `Error` | Unitário |
| PR-03 | `price` | `calculateTotal()` | Quantidade zero | `(10, 0)` | `Error` | Unitário |
| DC-01 | `discount` | `applyDiscount()` | Desconto válido | `(100, 20)` | `80` | Unitário |
| DC-02 | `discount` | `applyDiscount()` | Desconto 0% | `(100, 0)` | `100` | Unitário |
| DC-03 | `discount` | `applyDiscount()` | Desconto 100% | `(100, 100)` | `0` | Unitário |
| SH-01 | `shipping` | `calculateShipping()` | Peso até 1kg | `(0.5)` | `10` | Unitário |
| SH-02 | `shipping` | `calculateShipping()` | Peso até 5kg | `(3)` | `20` | Unitário |
| SH-03 | `shipping` | `calculateShipping()` | Peso acima de 5kg | `(10)` | `40` | Unitário |
| PD-01 | `product` | `validateProduct()` | Produto válido | `{name:'X', price:10, stock:5}` | `true` | Unitário |
| PD-02 | `product` | `validateProduct()` | Nome ausente | `{price:10, stock:5}` | `Error` | Unitário |

---

## 📝 Plano de Testes

**Projeto:** Sistema de E-commerce — Testes Unitários
**Autor:** *(seu nome)*
**Data:** *(data de entrega)*

---

### 1. Objetivo do Plano

*(Descreva em 2 a 3 frases o que este plano de testes pretende validar e por quê.)*

---

### 2. Escopo

**Dentro do escopo:**

- Funções de cálculo de preço e frete em `price.js` e `shipping.js`
- Regras de desconto em `discount.js`
- Validação de produtos em `product.js`

**Fora do escopo:**

- Interface gráfica
- Persistência em banco de dados
- Qualquer regra fora dos cenários descritos pelas funções

---

### 3. Ferramentas Utilizadas

| Ferramenta | Versão | Finalidade |
| --- | --- | --- |
| Vitest | `^1.3.1` | Execução dos testes automatizados |

---

### 4. Estratégia de Testes

*(Explique como você organizou os testes: quais são unitários, quais testam casos de erro, e como decidiu os valores de entrada para cada cenário.)*

---

### 5. Critérios de Aceite

| Critério | Condição |
| --- | --- |
| Todos os 4 arquivos de teste criados | Existência de `price.test.js`, `discount.test.js`, `shipping.test.js`, `product.test.js` |
| 19+ testes passando | `npx vitest` retorna sucesso |
| Arquivos de `src/` não modificados | Comparar com a versão original |
