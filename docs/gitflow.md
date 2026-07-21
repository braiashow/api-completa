# GitFlow - Projeto CRUD de Embarcações

## Estrutura de Branches

```text
main
│
├── develop
│
├── feature/crud-embarcacoes
├── feature/listar-embarcacoes
├── feature/cadastrar-embarcacoes
├── feature/atualizar-embarcacoes
├── feature/excluir-embarcacoes
│
├── release/v1.0.0
│
└── hotfix/corrigir-update-embarcacoes
```

---

## 1. Criar a branch develop

```bash
git checkout main
git pull origin main

git checkout -b develop
git push origin develop
```

## 2. Criar uma feature

```bash
git checkout develop
git checkout -b feature/crud-embarcacoes
```

Após concluir:

```bash
git add .
git commit -m "feat: CRUD embarcações concluído"
git push origin feature/crud-embarcacoes
```

Pull Request:

```text
feature/crud-embarcacoes → develop
```

## 3. Criar Release

```bash
git checkout develop
git pull origin develop

git checkout -b release/v1.0.0
```

Merge para produção:

```bash
git checkout main
git merge release/v1.0.0

git tag -a v1.0.0 -m "Primeira versão do CRUD de Embarcações"
git push origin main --tags
```

Sincronizar develop:

```bash
git checkout develop
git merge release/v1.0.0
```

## 4. Hotfix

```bash
git checkout main
git checkout -b hotfix/corrigir-update-embarcacoes
```

Após correção:

```bash
git commit -m "fix: corrigido método atualizarTotal"

git checkout main
git merge hotfix/corrigir-update-embarcacoes

git checkout develop
git merge hotfix/corrigir-update-embarcacoes
```

## Padrão de Commits

```text
feat: adiciona cadastro de embarcações
fix: corrige atualização total
refactor: melhora controller de embarcações
docs: atualiza documentação da API
chore: ajusta configuração do banco
test: adiciona testes do CRUD
```

## Fluxo Recomendado

```text
main
 └── develop
      ├── feature/model-embarcacoes
      ├── feature/controller-embarcacoes
      ├── feature/routes-embarcacoes
      ├── feature/validacoes-embarcacoes
      └── feature/testes-embarcacoes

release/v1.0.0

hotfix/corrigir-atualizacao-total
hotfix/corrigir-import-conexao
```
