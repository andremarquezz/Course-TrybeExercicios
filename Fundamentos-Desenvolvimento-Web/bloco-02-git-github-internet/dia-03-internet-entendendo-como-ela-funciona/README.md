## Conceitos aprendidos:

* Explicar de forma simples como a internet funciona;

* Entender o modelo Cliente & Servidor e identificar suas partes;

* Compreender como funcionam os protocolos HTTP e HTTPS;

* Identificar quais os tipos de requisição podem ser feitos através desses protocolos.

#### HTTP Headers

O protocolo HTTP é composto por Header e Body. O Header contém _metadata_ (dados sobre dados) que incluem o tipo de requisição (GET, POST, PUT, DELETE), o caminho URL, o endereço IP dentre outros. Para a página que estamos usando como exemplo, na sessão _Response Headers_ os mais importantes são:

* Content-Type: text/plain Especifica como os dados são representados. Nesse exemplo, temos o texto sendo enviado como resposta no formato HTML.

* Server: GitHub.com Servidor Web para onde as requisições estão sendo feitas.

* Status: 200 OK Forma padrão para o servidor comunicar ao cliente sobre o resultado da requisição. O código 200 significa que o servidor encontrou o recurso e está enviando o resultado da requisição.

* Host: api.github.com Host da aplicação

* cookie: _octo=GH1.1.358825508.1593780201; _ga=GA1.2.60245099.1593780202; logged_in=yes; dotcom_user=isabellavjs; tz=America%2FSao_Paulo

#### HTTP Body

O servidor armazena então os dados (metadados) mais importantes para estabelecer uma comunicação com o cliente. O _Body_ refere-se ao corpo da mensagem que está sendo transmitida.

#### Métodos HTTP

Os métodos HTTP são os verbos que dizem ao servidor o que fazer com os dados no URL. Como vimos, o endereço URL identifica recursos específicos. Quando o cliente utiliza o endereço URL combinado a um verbo HTTP, o servidor saberá qual será a ação necessária para cada recurso. Os exemplos mais comuns são:

* GET

* POST

* PUT/PATCH

* DELETE

#### REST - Representational State Transfer 

#### CURL - Client URL


### Exercícios feitos:

* [Quiz - Parte I](https://github.com/andremarquezz/trybe-exercicios/blob/main/Fundamentos-Desenvolvimento-Web/bloco-02-git-github-internet/dia-03-internet-entendendo-como-ela-funciona/Trybe-Quiz-Internet-I.pdf)
* [Quiz - Parte II](https://github.com/andremarquezz/trybe-exercicios/blob/main/Fundamentos-Desenvolvimento-Web/bloco-02-git-github-internet/dia-03-internet-entendendo-como-ela-funciona/Trybe-Quiz-Internet-II.pdf)
* [Quiz - Parte III](https://github.com/andremarquezz/trybe-exercicios/blob/main/Fundamentos-Desenvolvimento-Web/bloco-02-git-github-internet/dia-03-internet-entendendo-como-ela-funciona/Trybe-Quiz-Internet-III.pdf)


