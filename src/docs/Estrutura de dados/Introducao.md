# Estrutura de dados

Ao estudar lógica de programação, vimos que em nosso programa podemos armazenar dados em variáveis de diversos tipos como _int_, _float_, _char_,  entre outros e em todo programa é essencial que mantenhamos esses dados de uma forma organizada para uma melhor compreensão e organização do sistema, mas como fazemos isso? através das estruturas de dados.

## O que é?

Estrutura de dados é o nome utilizado para se referir a maneiras usadas para organizar os dados do nosso programa na memória do computador, para que seja mais fácil de manuseá-los posteriormente.

## Tipos

### Lineares

Na família das estruturas lineares temos as **listas**, **filas**, **pilhas** e **arrays**, onde os dados são organizados de maneira adjacente na memória, ou seja, um ao lado do outro.

``` mermaid
	graph LR;
		A["Maria"];
		A --> B["João"];
		B --> C["Vitor"];
		C --> D["Julia"];
```

### Não lineares

Já nas estruturas não lineares é ao contrario, os dados não são organizados de maneira linear, mas de forma mais complexa, com múltiplos caminhos e conexões entre eles e nessa grupo temos as **arvores**, **grafos** e **tabelas hash**

``` mermaid
	graph TD;
		A["Dono da empresa"];
		A --> B["Gerente"];
		A --> C["Gerente"];
		B --> D["Funcionario"];
		B --> E["Funcionario"];
		C --> F["Funcionario"];
		C --> G["Funcionario"];
```
 
