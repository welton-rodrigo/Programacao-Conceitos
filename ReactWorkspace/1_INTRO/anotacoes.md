npx create-react-app hello-world //script dentro do npm
npm start //inicia o projeto
outra opção de criação de projeto é o vite
npm create vite@latest
npm run dev //inicia o projeto

### introdução
react é uma biblioteca Javascript para desenvolvimento 
de applicações front-end;
Diferente de um framework, onde há uma estrutura e conceitos a serem seguidos, o react seria mais um conjunto de ferramentas, que podem ser utilizadas em partes do seu código.
SPA (Single Page Application): requisições assincronas, não quer dizer que o projecto tem apenas uma page, mais que ha apenas um reload.
A arquitetura do react é baseada em componentes: vantagens reutilização de codigo.
É mantido pelo Facebook: lado positivo empresa grande por trás da tecnologia.

### ESTRUTUTA BASE

Há algumas chaves para o desenvolvimento em React
* node_modules : onde as dependencias de nosso projeto ficam;
* public: Assets estáticos e HTML de inicialização;
* src: onde vamos programar nossas Apps;
* src/index.js: Arquivo de inicialização do React; Vite main.js
* src/App.js: Componente principal da aplicação; Vite App.jsx

## O que é Node.js?
* O Node.js é runtime de JavaScript, não é uma linguagem é uma biblioteca.
* Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa;
* Que está construida na V8 Engine (escrita em C++) da Google;
* Possibilitando criar softwares em JS no lado do servidor;
* Temos enão um código JS rodando em C++ para garantir alta performace;

## Importando componente
* A importação é a maneira que temos de reutilizar o componente;
* Utilizamos a sintaxe: import X from './componentes/X' onde X é o nome do componente;
* Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstComponent />

## JSX 
* JSX é o HTML do React;
* Onde vamos declarar as tags de HTML que serão exibidas no navegador;
* Ficam no return do componente;
* Temos algumas diferenças do HTML, por exemplo className;
* Isso se dá pelas Instruçoes semelhantes de JS e HTML,  pois o JSX é JavaScript, então algumas terão nomes diferentes;
* O JSX pode ter apenas um elemento pai;

## Comentarios JSX

/*
exemplode comentario 
*/

// exemplo de comentários 

{/* comentario dentro do bloco javascript */}

## TEMPLATE EXPRESSIONS
* template expression é o recurso que nos permite executar JS no JSX e também interporlar variaveis
* Isso sera muito util ao longo dos seus projetos em React;
* A sintaxe é: {algumCódigoEmJS}
* Tudo que está entre chaves é processado em JavaScript e nos retorna resultado;







