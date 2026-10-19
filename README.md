# Tripleten web_project_around_pt

# Around The U.S.

Página interativa em que o usuário pode editar seu perfil e gerenciar uma galeria de cartões com fotos de lugares. Projeto desenvolvido no Sprint 8 do bootcamp de Desenvolvimento Web Full Stack da TripleTen.

## Funcionalidades

- Edição de nome e descrição do perfil por meio de um pop-up com formulário
- Renderização dinâmica dos cartões iniciais a partir de um array de dados
- Criação de novos cartões com título e link de imagem
- Botão de curtir com alternância de estado
- Exclusão de cartões
- Visualização da imagem ampliada em pop-up, com legenda
- Valores padrão ("Lugar sem nome" e imagem placeholder) para dados incompletos

## Tecnologias e conceitos

- HTML5 semântico e elemento `<template>`
- CSS3 com metodologia BEM e layout responsivo
- JavaScript (ES6+):
  - Manipulação do DOM (`querySelector`, `cloneNode`, `prepend`, `remove`)
  - Eventos `click` e `submit` com `addEventListener`
  - Funções reutilizáveis para abrir e fechar modais
  - Parâmetros padrão e desestruturação de objetos
  - Closures para associar cada listener ao seu cartão
