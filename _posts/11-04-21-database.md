---
title: 'DATABASE IS IMPORTANT!'
date: '11/04/2021'
excerpt: 'Hoje vou falar um pouco de banco de dados e mostrar como essa habilidade é importante para todo desenvolvedor'
---

![](https://github.com/GusBedasi/my-page/blob/main/public/images/yonoloconozcosenhor.jpg?raw=true)

Nunca nem vi
======

A princípio quando comecei a estudar sobre programação sabia que existia uma importância a cerca de banco de dados, mas confesso que me esquivava deste assunto mais que tudo (não me orgulho disso), mas infelizmente era o que eu fazia e posso estar errado, mas sinto que isso acontece com muita gente. 

O que é uma pena pois além de ser muito massa fazer umas queries no banco e pegar uns resultados mirabolantes, te dá muita liberdade, tanto na hora de fazer side projects, bolar a arquitetura do banco da sua aplicação, resolver uns problemas doidos que podem acontecer, com uma "simples" query, te faz entender melhor o relacionamento de entidades de aplicações já existentes, etc... Sério é bem poderoso esse conhecimento e uma delicinha brincar quando já se domína o básico.

Experiências
======

### (Situação hipotética)

Vamos colocar um cenário que sua aplicação tenha persistido informações erradas para seus usuarios, por exemplo: adicionou mais um item a assinatura do seu usario e na próxima cobrança você vai cobrar R$1000 a mais de cada um, BIG PROBLEM RIGHT? 

![](https://media.giphy.com/media/WrNfErHio7ZAc/giphy.gif)

Como você resolveria? Vou te dar algumas soluções:

### 1. Fazer um csv, rodar uma loop nesse CSV apontando para sua api e retirando os pedidos feitos
    Coisas que serão necessárias fazer:
    * Criar um CSV
    * Ter um endpoint que faça isso que eu falei
    * Ter certeza que isso não vai causar mais problemas
    * Averiguar cada user depois de rodar os posts.

### 2. Fazer uma query no banco, rodando um update para todos os usuarios que têm esse ID de item que foi adicionado por engano
    Coisas que serão necessárias fazer:
    * Selecionar todos os usuarios e averiguar os dados
    * Criar uma query de update
    * Selecionar de novo e ver se mudou o que você queria

Bem mais simples a opção do banco não é mesmo? Muito poderoso e lindo de ver.

#### Recomendação

Super recomendo o site Hacker Rank para fazer exercícios de queries SQL, dá para pegar o básico e ir aprofundando, tem um [repositório](https://github.com/GusBedasi/Hacker-Rank-Solutions/tree/master/SQL/Basic%20Select) só de soluções do hacker rank, dá uma olhada lá quando se sentir preso em um exercício, se for colar vale entender o que eu fiz, qualquer coisa só me [chamar para converar!](https://www.linkedin.com/in/gustavobedasi/)

### Conclusões

Não sou o melhor cara para elencar todos os motivos técnicos para te fazer aprender SQL e conceito de banco, mas posso te garantir por experiência própria como o mercado exige esse conhecimento e como ele vêm acalhar em vários momentos, me toquei disso nas últimas 2 semanas e to ralando pra saber mais, mas tá legal!