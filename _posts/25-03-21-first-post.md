---
title: 'PRIMEIRO POST, TESTANDO O BLOG'
date: '28/03/2021'
excerpt: 'Descrevendo brevemente a batalha da construção do blog'
---

O Blog
======

![teste](https://media.giphy.com/media/M2hv7BgZCKCeQ/giphy.gif)

Seja muito bem-vindo ao meu primeirisso post desse blog, esse post vai ser sobre a experiênce a cerca da construção deste maravilhoso blog, feito por mim, 100% sozinho? Não, tive ajuda em algumas partes *(obrigadão Juan!)* e não tenho a mínima vergonha de dizer isso, como dizem aqui na Stone:

> #### Se quiser ir rápido, vá sozinho. Se quiser ir longe, trabalhe em equipe.

Mas falando sobre essa parte do blog que implementei, foi desafiador sim, ainda mais que o meu contexto de uma ótica de programação está sendo 100% focada em backend em *.NET*, então acabo não mexendo tanto com front-end ou Javascript. 

O Blog foi feito em *React* usando *NextJS* e foi bem legal conhecer essa lib, ela têm um sistema dinâmico de rotas na qual eu consegui fazer o seguinte, para cada titulo de post que eu escrevi em *markdown* a lib transformou automaticamente em uma rota, então ao clicar no link do post, ele te direciona automaticamente para a rota, para que ela seja accessível você precisa criar uma pasta com uma marcação especial que funciona como uma espécie de coringa e com a ajuda das funções: *getStaticPaths* e *getStaticProps* eu consigo determinar que post vai ser carregado, em outras palavras que markdown, então o post se adequa com o arquivo markdown pré-selecionado na pagina anterior antes de ir para a rota do post.

O [Repositório](https://github.com/gusbedasi/my-page) está público no meu github dá uma olhada lá.