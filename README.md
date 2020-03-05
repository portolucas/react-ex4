Exercício 4

Para explorar os conceitos vistos na Aula 04, iremos utilizar a stack React + Redux para uma aplicação que possua uma listagem de filmes favoritos. A ideia é que, utilizando o projeto da aula 04, possamos escolher quais os nossos filmes favoritos a partir da listagem e mostrá-los em uma tela, tudo utilizando a store do Redux. Para isso, siga os seguintes passos: Passo 1 Utilizando o exercício da aula 03 para listagem de filmes, instale no projeto os seguintes pacotes:

● npm i -S redux;

● npm i -S react-redux.

Passo 2 Utilizando o exemplo do Code sandbox visto na Aula 04, crie a estrutura para utilização do Redux. Ao invés de utilizar o conceito de “contador”, iremos utilizar o conceito de “favorites”.

● Crie uma action que receba o objeto do filme a ser “favoritado”;

● Crie um reducer para modificar o estado global;

Passo 3 Crie uma rota “/favorites” utilizando o react router conforme visto na aula 02. Em seguida, exiba os filmes marcados como favoritos na listagem.