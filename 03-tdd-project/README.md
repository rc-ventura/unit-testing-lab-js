# 🧪 PROJETO 3 — TDD — Boletim Escolar

---

## 🎯 Objetivo da Aula

Vivenciar na prática o ciclo do **Test-Driven Development (TDD)**: escrever o teste antes do código, ver ele falhar, implementar o mínimo necessário para ele passar e repetir.

Ao final da aula, vocês terão desenvolvido um **sistema de boletim escolar com duas camadas de regras**, mas, mais importante do que o código pronto, terão internalizado **por que escrever o teste primeiro muda a forma de pensar sobre o problema.**

---

## 🧠 O que é TDD?

TDD é uma metodologia de desenvolvimento onde **o teste define o comportamento esperado antes de qualquer implementação existir.**

O ciclo tem três etapas, sempre nessa ordem:

```
 RED    →   escreva um teste que descreve o comportamento esperado
            rode os testes — ele deve FALHAR (o código ainda não existe)

 GREEN  →   implemente o mínimo de código necessário para o teste passar
            rode os testes — ele deve PASSAR

 REFACTOR →  melhore o código sem quebrar os testes
            rode os testes — tudo ainda deve PASSAR
```

> **Regra de ouro:** nunca escreva uma linha de implementação sem antes ter um teste falhando que a justifique.

---

## 🏫 O Cenário: Sistema de Boletim Escolar

Vocês acabaram de ser contratados como Desenvolvedores Júnior em uma escola que precisa organizar o boletim dos alunos. O time antigo deixava a lógica espalhada e difícil de validar, então agora a missão é criar o comportamento do sistema **guiado por testes**.

A liderança técnica definiu dois módulos:

1. **`gradeUtils.js`** — utilitários de notas e status, como média, aprovação e conceitos.
2. **`reportCard.js`** — regras de negócio do boletim, que **obrigatoriamente** usa as funções de `gradeUtils.js`.

Os **testes já foram escritos pela equipe sênior.** O trabalho de vocês é fazer todos eles passarem, implementando apenas o código necessário.

---

## 📦 Setup do Projeto

```bash
cd 03-tdd-project
npm install
npx vitest
```

Ao rodar os testes pela primeira vez, vocês vão ver isso:

```
❯ tests/gradeUtils.test.js
  ✗ calcAverage() > deve calcular a média de três notas iguais
  ✗ isApproved() > deve retornar true para média igual a 7
  ✗ getStatus() > deve retornar "Aprovado" para média igual a 7
  ...

Tests  0 passed | 48 failed
```

**Isso é esperado. Isso é o RED. É aqui que o TDD começa.**

---

## 📁 Estrutura do Projeto

```
03-tdd-project/
├── src/
│   ├── gradeUtils.js       ← você vai implementar este
│   └── reportCard.js       ← e este
├── tests/
│   ├── gradeUtils.test.js  ← não altere
│   └── reportCard.test.js  ← não altere
└── package.json
```

> ⚠️ **Os arquivos de teste não devem ser modificados.** Eles representam o contrato do sistema — os requisitos escritos como código. Sua implementação precisa satisfazê-los.

---

## 🔨 FASE 1 — Utilitários de Notas (`gradeUtils.js`)

### Comportamentos esperados (descritos nos testes)

**`calcAverage(grades)`**

- Calcula a média de um array de notas válidas
- Lança erro quando o array está vazio
- Lança erro quando houver nota fora do intervalo permitido

**`isApproved(average)`**

- Retorna `true` para média maior ou igual a 7
- Retorna `false` para média menor que 7
- Lança erro quando a entrada não for numérica

**`getStatus(average)`**

- Retorna `Aprovado`, `Recuperação` ou `Reprovado`
- Usa os mesmos limites definidos nos testes
- Lança erro quando a entrada não for numérica

**`getLetterGrade(average)`**

- Converte a média em conceito de `A` até `F`
- Respeita as faixas definidas nos testes
- Lança erro quando a entrada não for numérica

### Como avançar

Siga o ciclo RED → GREEN para **cada função individualmente:**

1. Rode os testes — veja as falhas de `calcAverage()` em vermelho
2. Implemente `calcAverage()` — rode novamente — veja verde
3. Passe para `isApproved()`, `getStatus()` e `getLetterGrade()` — repita
4. Continue até todos os testes da fase passarem

---

## 🔨 FASE 2 — Boletim Escolar (`reportCard.js`)

> 🚨 **Regra crítica:** este módulo **não deve duplicar a lógica de cálculo**. Toda média e classificação devem passar por `gradeUtils.js`.

### Comportamentos esperados (descritos nos testes)

**`createStudent(name, grades)`**

- Cria um objeto com `name`, `grades`, `average` e `status`
- Usa `calcAverage()` e `getStatus()` por composição
- Lança erro se o nome estiver vazio ou as notas forem inválidas

**`getTopStudent(students)`**

- Retorna o aluno com a maior média
- Em caso de empate, retorna o primeiro da lista
- Lança erro quando o array estiver vazio

**`filterByStatus(students, status)`**

- Retorna apenas os alunos com o status informado
- Aceita apenas `Aprovado`, `Recuperação` e `Reprovado`
- Lança erro quando o status for inválido

**`getClassSummary(students)`**

- Retorna um resumo com `total`, `approved`, `recovery` e `failed`
- Usa os status já calculados em cada aluno
- Lança erro quando o array estiver vazio

### Como avançar

1. Implemente `createStudent()` primeiro — ele valida a integração com `gradeUtils.js`
2. Depois avance para `getTopStudent()`
3. Em seguida implemente `filterByStatus()`
4. Finalize com `getClassSummary()`
5. Continue até todos os 48 testes passarem

---

## 📊 Contagem de Testes

| Arquivo de Teste | Testes | Tipo |
| --- | --- | --- |
| `gradeUtils.test.js` | 30 | Unitário |
| `reportCard.test.js` | 18 | Integração |
| **Total** | **48** |  |

---

## ✅ Critério de Aceite

A atividade está completa quando o terminal mostrar:

```
 ✓ tests/gradeUtils.test.js (30)
 ✓ tests/reportCard.test.js (18)

 Test Files  2 passed (2)
      Tests  48 passed (48)
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

O repositório deve conter apenas os arquivos de `src/` implementados. Os arquivos de `tests/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar os 48 testes verdes conforme o modelo acima.

### 3. Reflexão escrita (mínimo 10 linhas)

Responda em texto livre:

- Em algum momento o teste te forçou a **repensar** como ia implementar a função? Descreva.
- Qual foi o primeiro teste que você fez passar? Como foi a sensação de ver o RED virar GREEN?
- Houve algum teste de erro (`toThrow`) que revelou algo que você não teria pensado sem ele?
- Se você fosse escrever os testes do zero, escreveria diferente? Por quê?

> A reflexão vale tanto quanto o código. TDD é uma mudança de mentalidade — queremos saber se essa mudança aconteceu.

---

## 💡 Dicas para a Aula

| Situação | O que fazer |
| --- | --- |
| Não sei por onde começar | Rode os testes, leia a mensagem de erro do primeiro que falhou. Ela te diz exatamente o que implementar. |
| Minha função passa em alguns testes mas falha em outros | Leia os casos que ainda falham — eles revelam um comportamento que você não cobriu. |
| Terminei a Fase 1 mas a Fase 2 ainda falha | Verifique se está importando corretamente as funções de `gradeUtils.js` em `reportCard.js`. |
| Quero calcular a média direto em `reportCard.js` | Não. Esse é o ponto — a lógica deve ser reaproveitada a partir de `gradeUtils.js`. |

---

## 📊 Matriz de Rastreabilidade de Testes

> Esta matriz mapeia cada teste ao requisito de negócio que ele valida. Em TDD, os testes **são** os requisitos — esta tabela torna isso explícito.

| ID | Módulo | Função | Cenário Testado | Dados de Entrada | Resultado Esperado | Tipo |
| --- | --- | --- | --- | --- | --- | --- |
| GU-01 | `gradeUtils` | `calcAverage()` | Média de notas válidas | `[8, 8, 8]` | `8` | Unitário |
| GU-02 | `gradeUtils` | `calcAverage()` | Array vazio deve falhar | `[]` | `Error` | Unitário |
| GU-03 | `gradeUtils` | `isApproved()` | Média aprovada | `7` | `true` | Unitário |
| GU-04 | `gradeUtils` | `getStatus()` | Classificação por média | `5`, `6.9`, `4.9` | `Recuperação` / `Reprovado` | Unitário |
| GU-05 | `gradeUtils` | `getLetterGrade()` | Conceito por faixa | `9`, `7`, `5`, `3`, `2.9` | `A`, `B`, `C`, `D`, `F` | Unitário |
| RC-01 | `reportCard` | `createStudent()` | Criação de aluno com média/status | `('Ana', [8, 9, 7])` | objeto completo | Integração |
| RC-02 | `reportCard` | `getTopStudent()` | Maior média da turma | lista de alunos | aluno com maior média | Integração |
| RC-03 | `reportCard` | `filterByStatus()` | Filtrar por status | lista + status | array filtrado | Integração |
| RC-04 | `reportCard` | `getClassSummary()` | Resumo da turma | lista de alunos | `{ total, approved, recovery, failed }` | Integração |

---

## 📝 Plano de Testes

**Projeto:** Sistema de Boletim Escolar — TDD
**Autor:** *(seu nome)*
**Data:** *(data de entrega)*

---

### 1. Objetivo do Plano

*(Descreva em 2 a 3 frases o que este plano de testes pretende validar e por que. Explique como a divisão entre `gradeUtils.js` e `reportCard.js` ajuda na organização do código.)*

---

### 2. Escopo

**Dentro do escopo:**

- Funções de cálculo e classificação em `gradeUtils.js`
- Regras de negócio e agregação de dados em `reportCard.js`

**Fora do escopo:**

- Interface gráfica
- Persistência em banco de dados
- Qualquer regra fora dos cenários descritos pelos testes

---

### 3. Ferramentas Utilizadas

| Ferramenta | Versão | Finalidade |
| --- | --- | --- |
| Vitest | `^1.3.1` | Execução dos testes automatizados |

---

### 4. Estratégia de Testes

*(Explique como você organizou os testes: quais são unitários, quais são de integração, e qual a ordem de execução. Descreva também como o ciclo RED → GREEN foi aplicado primeiro em `gradeUtils.js` e depois em `reportCard.js`.)*

---

### 5. Critérios de Aceite

| Critério | Condição |
| --- | --- |
| Todas as funções de `gradeUtils.js` implementadas | `npx vitest` retorna sucesso na Fase 1 |
| Todas as funções de `reportCard.js` implementadas | `npx vitest` retorna sucesso na Fase 2 |
| Nenhum teste foi alterado | Comparar os arquivos de `tests/` com a versão original |
| O fluxo TDD foi seguido | Existência de testes vermelhos antes da implementação |
