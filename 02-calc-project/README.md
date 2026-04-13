# 🧪 PROJETO 2 — Calculadora TechStore

---

## 🎯 Objetivo da Aula

Implementar duas camadas de lógica — um motor matemático e regras de negócio — guiados pelos testes escritos pela equipe sênior.

---

## 🏢 O Cenário: Motor Matemático da TechStore

Vocês foram contratados para implementar o núcleo de cálculos de uma loja online. A equipe sênior já escreveu todos os testes. Sua missão é fazer todos eles passarem.

A lógica está dividida em dois módulos:

1. **`coreMath.js`** — as quatro operações matemáticas básicas.
2. **`businessLogic.js`** — regras de negócio que **obrigatoriamente** usam as funções de `coreMath.js`.

---

## 📦 Setup do Projeto

```bash
cd 02-calc-project
npm install
npx vitest
```

Ao rodar os testes pela primeira vez, vocês vão ver isso:

```
❯ tests/coreMath.test.js
  ✗ add() > deve retornar a soma de dois números
  ✗ subtract() > deve retornar a subtração de dois números
  ...

Tests  0 passed | X failed
```

**Isso é esperado.** Os testes já existem — seu trabalho é implementar o código que os faz passar.

---

## 📁 Estrutura do Projeto

```
02-calc-project/
├── src/
│   ├── coreMath.js       ← você vai implementar este
│   └── businessLogic.js  ← e este
├── tests/
│   ├── coreMath.test.js      ← não altere
│   └── businessLogic.test.js ← não altere
└── package.json
```

> ⚠️ **Os arquivos de teste não devem ser modificados.** Eles representam o contrato do sistema — os requisitos escritos como código. Sua implementação precisa satisfazê-los.

---

## 🔨 FASE 1 — Motor Matemático (`coreMath.js`)

### Comportamentos esperados (descritos nos testes)

**`add(a, b)`**

- Retorna a soma de dois números

**`subtract(a, b)`**

- Retorna a subtração de dois números

**`multiply(a, b)`**

- Retorna o produto de dois números

**`divide(a, b)`**

- Retorna a divisão de dois números
- 🚨 Lança `Error` quando o divisor for zero

### Como avançar

1. Rode os testes — veja quais falham
2. Implemente `add()` — rode novamente — veja verde
3. Passe para `subtract()`, `multiply()` e `divide()` — repita

---

## 🔨 FASE 2 — Regras de Negócio (`businessLogic.js`)

> 🚨 **Regra crítica:** este módulo **não deve usar os operadores nativos** (`+`, `-`, `*`, `/`) diretamente. Toda operação matemática deve passar pelas funções de `coreMath.js`.

### Comportamentos esperados (descritos nos testes)

**`calculateAverage(purchases)`**

- Recebe um array de valores e retorna a média
- 🚨 Lança erro quando o array estiver vazio
- 🚨 Lança erro quando o array contiver valores inválidos

**`calculateDiscountedPrice(price, discountPercent)`**

- Aplica um desconto percentual sobre um preço
- 🚨 Lança erro quando o desconto for negativo ou maior que 100
- 🚨 Lança erro quando o preço for negativo ou zero

### Como avançar

1. Importe as funções de `coreMath.js` em `businessLogic.js`
2. Implemente `calculateAverage()` — rode os testes
3. Implemente `calculateDiscountedPrice()` — rode os testes
4. Continue até todos os testes passarem

---

## ✅ Critério de Aceite

A atividade está completa quando o terminal mostrar todos os testes passando:

```
 ✓ tests/coreMath.test.js
 ✓ tests/businessLogic.test.js

 Test Files  2 passed (2)
      Tests  X passed (X)
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

O repositório deve conter apenas os arquivos de `src/` implementados. Os arquivos de `tests/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar todos os testes verdes.

### 3. Reflexão escrita (mínimo 8 linhas)

Responda em texto livre:

- Em algum momento o teste te forçou a **repensar** como ia implementar a função? Descreva.
- Qual foi o primeiro teste que você fez passar?
- Por que `businessLogic.js` não deve usar operadores diretos? Qual é o benefício disso?
- O que acontece se você não validar as entradas? Quais testes revelaram isso?

---

## 💡 Dicas para a Aula

| Situação | O que fazer |
| --- | --- |
| Não sei por onde começar | Rode os testes, leia a mensagem de erro do primeiro que falhou. Ela diz exatamente o que implementar. |
| `divide()` não lança erro | Use `throw new Error("mensagem")` quando `b === 0`. |
| `businessLogic` falha com "is not a function" | Verifique se importou corretamente de `./coreMath.js`. |
| Quero usar `+` direto em `businessLogic.js` | Não. Chame `add()` de `coreMath.js` — esse é o ponto do exercício. |
