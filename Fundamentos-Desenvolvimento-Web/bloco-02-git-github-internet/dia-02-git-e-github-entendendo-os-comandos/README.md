## Conceitos aprendidos:

* Copiar um repositório já existente no GitHub para o meu computador;

* Abrir _Pull Requests_;

* Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída;

* Git log: Após commit, usar o comando `git log` e ele nos trará o histórico de commits realizados, com informações como número identificador (hash), branch, autor, data e hora. (para sair da visualização, digitar letra q);

* Git remove: Após commit, usar o comando `git rm + nome do arquivo`. Após a exclusão, ainda sim precisa fazer o commit disso; 

* Caso queiramos recuperar um arquivo, iremos utilizar uma variação do Git Log: `git log --diff-filter=D --summary` (vamos ver o que há de diferente e filtrar esses logs que sejam iguais ao status D (deletados) e organizar como sumário. Após identificar o hash (não precisa copiar o número todo, apenas os 4 primeiros números já basta), usar o comando `git checkout + hash~1 + nome do arquivo`. Após isso, precissa fazer commit novamente;

* Git ignore: Serve para ignorar os arquivos que não queiramos adicionar ao Git. Estamdo no repositório, criamos o arquivo `.gitignore` (o ponto é porquê ele é um arquivo oculto). Para ignorar os arquivos desejados, usar o comando `cat > .gitignore`. Para adicionar mais arquivos que é desejado ser ignorado, usar o comando `cat >> .gitignore`. Para ignorar um diretório inteiro, usar o comando `cat >> .gitignore` ou `cat > .gitignore` e inserir nome-do-diretório/ (a barra é a identificação para ignorar o diretório inteiro). _Dica: site [Toptal](https://www.toptal.com/developers/gitignore) onde você escolhe a ferramenta de edição de texto e ele fornece um scrip de .gitignore já ignorando alguns arquivos certos. Então, após usar o comando `cat >> .gitignore`, apenas colar o scrip (se quiser, pode fazer alterações à vontade);_

* Git push: Inserir de fato o commit no repositório remoto (nosso caso, GitHub);

* Git fetch: Após usar o comando `git clone` para clonar um repositório, caso haja uma alteração no repositório principal, utilizando o comando `git fetch` é possível atualizar as informações e trazer para o repositório local .

* Git pull: Além de verificar se existe uma alteração (como o git fetch), mas também ele também faz o merge das branchs e atualiza no repositório local e no remoto. O comando é `git pull`.

