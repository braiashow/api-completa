# Conventional Commits

## Objetivo
Padronizar mensagens de commit para facilitar manutenção, rastreabilidade, geração de changelog e versionamento.

---

## Formato

```text
<tipo>(escopo opcional): descrição curta
```

Exemplos:

```text
feat(embarcacoes): adiciona cadastro de embarcação
fix(controller): corrige atualização total
refactor(model): melhora consulta por numPat
```

---

## Tipos de Commit

### feat
Nova funcionalidade.

```text
feat: adiciona CRUD de embarcações
```

### fix
Correção de bug.

```text
fix: corrige método atualizarTotal
```

### refactor
Refatoração sem alterar comportamento.

```text
refactor: reorganiza controller de embarcações
```

### docs
Documentação.

```text
docs: adiciona gitflow e padrões do projeto
```

### test
Testes.

```text
test: adiciona testes para cadastro de embarcações
```

### chore
Tarefas de manutenção.

```text
chore: atualiza dependências
```

### style
Alterações de formatação.

```text
style: ajusta indentação do controller
```

### perf
Melhoria de desempenho.

```text
perf: otimiza consulta de embarcações
```

### ci
Integração contínua.

```text
ci: adiciona pipeline de testes
```

---

## Escopos Recomendados

```text
controller
model
route
database
auth
middleware
validation
test
config
embarcacoes
usuarios
```

Exemplos:

```text
feat(embarcacoes): adiciona listagem completa
fix(model): corrige update por numPat
refactor(controller): simplifica validações
```

---

## Regras

- Escreva a descrição no imperativo.
- Use letras minúsculas.
- Não termine com ponto final.
- Seja objetivo.
- Um commit deve representar uma única mudança.

---

## Exemplos para o CRUD de Embarcações

```text
feat(embarcacoes): adiciona endpoint de cadastro
feat(route): adiciona rotas de embarcações
fix(model): corrige query de atualização total
fix(controller): corrige chamada do metodo atualizarTotal
refactor(database): centraliza conexão postgres
docs(api): adiciona documentação das rotas
test(embarcacoes): adiciona testes de exclusão
```

---

## Versionamento Semântico

```text
feat  -> MINOR  (1.0.0 -> 1.1.0)
fix   -> PATCH  (1.0.0 -> 1.0.1)
BREAKING CHANGE -> MAJOR (1.0.0 -> 2.0.0)
```

Exemplo:

```text
feat!: altera estrutura da API de embarcações

BREAKING CHANGE: endpoints antigos removidos
```
