## Parte III - Processos & Jobs

1. Liste todos os processos;

2. Agora use o comando `sleep 30 &`;

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução (mate o processo);

4. Execute novamente o comando `sleep 30`, mas agora sem o `&`. Depois, faça com que ele continue executando em _background_;

5. Crie um processo em _background_ que rode o comando `sleep` por 300 segundos;

6. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente;
_Você deve criá-los em _foreground_ _(sem usar o `&`)_ e suspendê-los _(apertando ctrl+z)_ após cada um começar a executar_

7. Verifique que apenas o processo `sleep 300` está em execução com o comando `jobs`. Suspenda a execução desse processo;
_Você vai precisar trazer o processo para _foreground_ (`fg`) e suspendê-lo _(ctrl+z)_, ou enviar um sinal_

8. Retome a execução do processo `sleep 100` em _background_ com o comando `bg`;

9. Termine a execução de todos os processos `sleep` _(mate os processos)_.
