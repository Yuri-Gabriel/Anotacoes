# Prolog

Prolog (do francês _Programmation en Logique_) é uma **linguagem de programação de paradigma lógico**. Ela é simultaneamente **descritiva e prescritiva**. Ao programar em Prolog, descreve-se o que deve ser feito enquanto se prescreve como isso deve ser feito.

Prolog lida essencialmente com **objetos e as relações entre eles**. É considerada uma linguagem mais adequada para problemas que requerem a **descrição de conhecimento**, sendo historicamente utilizada em áreas de Inteligência Artificial (IA) como **computação simbólica**, **compreensão de linguagem natural** e **sistemas especialistas**.

O Prolog foi criado em 1972 por Colmerauer e Roussel. A linguagem é incluída na ementa de cursos de Inteligência Artificial na categoria de **Programação em Lógica**.

# Estrutura de um Programa Prolog

Um programa Prolog é composto por uma **coleção de cláusulas**, que podem ser **fatos** ou **regras**, e **perguntas** (consultas) sobre essa coleção. Essa coleção é frequentemente chamada de **banco de dados**.

1.  **Fatos:** São declarações sempre verdadeiras sobre objetos e suas relações.
    -   Exemplo: `gosta(pedro, maria).` (Pedro gosta de Maria).
    -   O nome da relação (predicado) vem primeiro, seguido pela lista de objetos (argumentos) entre parênteses e separados por vírgulas.
    -   Tanto os nomes das relações quanto os objetos devem começar com letra minúscula.
    -   Todo fato deve ser finalizado com um ponto final obrigatório.
2.  **Regras:** São afirmações gerais que precisam ser avaliadas. Uma regra estabelece que a **cabeça** (conclusão) é verdadeira **se** o **corpo** (condição) for satisfeito.
    -   A cabeça e o corpo são conectados pelo símbolo `:-`, que se pronuncia "se".
    -   O corpo é uma **conjunção de metas** separadas por vírgulas (o símbolo `,` é pronunciado "e").
    -   Exemplo: `gosta(pedro, X) :- gosta(X, vinho).` (Pedro gosta de X se X gosta de vinho).
3.  **Perguntas (Consultas):** Usadas para perguntar ao Prolog se uma meta é verdadeira com base nos fatos e regras fornecidos.
    -   Uma pergunta começa com `?-`.
    -   Exemplo: `?- possui(maria, livro).` (Maria possui o livro?).

# Elementos Básicos (Termos)

Em Prolog, existe apenas um tipo de dado principal, chamado **termo**, que abrange todas as construções sintáticas da linguagem, incluindo dados e o próprio programa. Um termo pode ser uma constante, uma variável ou uma estrutura.

## **Constantes (Átomos)**

Nomes de objetos ou relações. Devem iniciar com letra minúscula.

`maria`, `ouro`, `valioso`.

## **Constantes (Números)**

Podem ser inteiros ou números em ponto flutuante (floats).

`0`, `-17`, `2.35`, `10e10`.

## **Variáveis**

Nomes que começam com letra maiúscula ou o sinal de sublinhado (`_`).

`X`, `Y1`, `_Nome`.

## **Variáveis Anônimas**

Usadas quando se deseja que a variável unifique com qualquer termo, mas seu valor não precisa ser impresso. Cada ocorrência de `_` representa uma variável diferente.

`_`.

## **Estruturas**

Termos mais complexos formados por um funtor seguido de componentes entre parênteses, separadas por vírgula. Podem ser aninhadas.

`livro(incidente_em_antares, verissimo)`.

## **Listas**

As listas são uma das estruturas de dados mais importantes e comuns em **Prolog**, essenciais para a programação não numérica. Elas funcionam de forma muito diferente das listas em linguagens de programação imperativas (como C ou Python), sendo construídas com base na **recursão** e na **unificação**.

Em sua essência, a lista em Prolog é definida de forma **recursiva**, o que é fundamental para a programação lógica:

1.  A **lista vazia** é uma lista. É representada por `[]`.
    
2.  Uma **lista não-vazia** é formada por duas partes:
    
    -   A **Cabeça** (**Head** - **H**): O **primeiro elemento** da lista. A Cabeça pode ser **qualquer objeto Prolog** (um átomo, um número, uma variável ou até mesmo outra lista).
        
    -   A **Cauda** (**Tail** - **T**): O **restante** da lista. A Cauda deve ser **sempre uma lista**.
        

Na verdade, internamente, uma lista é uma estrutura de dados construída usando um functor especial (geralmente o ponto `.`), formando uma espécie de **árvore binária** encadeada até chegar à lista vazia. Por exemplo, a lista `[a, b, c]` é representada internamente como `.(a, .(b, .(c, [])))`.

### Sintaxe e Notação Principal: `[Cabeça | Cauda]`

Para simplificar a manipulação, Prolog oferece uma notação sintática especial, que é a chave para trabalhar com listas:

#### Notação Enumerada

A forma mais simples de declarar uma lista é enumerando seus elementos entre colchetes, separados por vírgulas.

Prolog

```
[ana, tenis, pedro]  % Lista de átomos
[1, 2, 3, 4]         % Lista de números
[a, f(X), 5, [b, c]] % Lista heterogênea (contém termos e outra lista)

```

#### Notação de Desmembramento (Cabeça e Cauda)

Esta é a notação mais poderosa e usada para processar listas de forma recursiva. O caractere **pipe** (`|`) é usado para separar a **Cabeça** (o primeiro elemento) da **Cauda** (o restante da lista, que é sempre outra lista).

A sintaxe é: **`[Cabeça | Cauda]`**

Quando você usa essa notação em uma consulta, o Prolog tenta unificar (casar) o padrão com a lista, vinculando as variáveis.

| Lista | Consulta de Unificação | Resultados da Unificação |
|:---:|:---:|:---:|
| `[a, b, c]` | `[H` | `T]` |
| `[a]` | `[H` | `T]` |
| `[]` | `[H` | `T]` |
| `[a, b, c]` | `[X, Y` | `Z]` |

A habilidade de desmembrar uma lista em `[Cabeça | Cauda]` permite que você defina regras que trabalham com o primeiro elemento e depois chamam a si mesmas recursivamente para processar o restante da lista.


###  Processamento de Listas através da Recursão

Como as listas são definidas recursivamente, a maneira padrão de processá-las é usando predicados **recursivos**. Todo predicado recursivo para listas precisa de **duas partes** (cláusulas):

#### Condição de Parada (Caso Base)

Define o que acontece com a **lista vazia** (`[]`). É a condição que impede a recursão infinita.

#### Caso Recursivo

Define o que acontece com uma **lista não-vazia** (`[H | T]`). O predicado processa a **Cabeça (H)** e então se chama novamente para processar a **Cauda (T)**.

#### Exemplo: Predicado `pertence/2` (membro)

O predicado `pertence(Elemento, Lista)` verifica se um `Elemento` faz parte de uma `Lista`.

Prolog

```
% 1. Condição de Parada:
% Se o Elemento é a Cabeça da lista, o predicado é verdadeiro.
pertence(E, [E|_]). 

% 2. Caso Recursivo:
% Se o Elemento não é a Cabeça, ele deve pertencer à Cauda da lista.
pertence(E, [_|T]) :- 
    pertence(E, T).

```

**Análise do Exemplo:**

-   **`pertence(E, [E|_]).`**
    
    -   Lê-se: "O elemento **E** pertence à lista se **E** for a cabeça da lista. A cauda (`_`) não importa."
        
-   **`pertence(E, [_|T]) :- pertence(E, T).`**
    
    -   Lê-se: "O elemento **E** pertence à lista se **E** pertencer à cauda (`T`) da lista. A cabeça (`_`) não importa."
        

Quando você faz a consulta: `?- pertence(b, [a, b, c]).`

1.  Tenta a primeira cláusula: `b` é unificado com `a`? Não.
    
2.  Tenta a segunda cláusula: Chama `pertence(b, [b, c])`.
    
3.  Com a nova lista `[b, c]`, tenta a primeira cláusula: `b` é unificado com `b`? **Sim**. Retorna **true**.
    

Essa estrutura (Caso Base + Caso Recursivo) é a espinha dorsal de quase todo processamento de listas em Prolog.

### Predicados Comuns de Listas

Muitas funcionalidades comuns de listas já vêm embutidas ou são facilmente implementadas em Prolog:

| Predicado | Descrição | Exemplo de Uso (Consulta) |
|:---:|:---:|:---:|
| **`member(E, L)`** | Verifica se o elemento `E` está na lista `L` (ou gera elementos se `E` for variável). | `?- member(2, [1, 2, 3]).` **true.** |
| **`append(L1, L2, L3)`** | Unifica `L3` como a lista `L1` concatenada com `L2`. É muito versátil. | `?- append([a, b], [c, d], X).` **X = [a, b, c, d]** |
| **`length(L, N)`** | Unifica `N` com o número de elementos em `L`. | `?- length([a, b, c], N).` **N = 3** |
| **`reverse(L1, L2)`** | Unifica `L2` como a lista `L1` invertida. | `?- reverse([1, 2, 3], X).` **X = [3, 2, 1]** |

Dominar a notação `[Cabeça | Cauda]` e o conceito de recursão é o passo mais importante para usar listas de forma eficiente em Prolog.

## Mecanismos de Processamento Central

Para responder a consultas, Prolog utiliza um processo que envolve **unificação**, **resolução**, **recursão** e **backtracking**.

#### 1. Unificação

A unificação é a forma de **igualdade** em Prolog. Quando uma pergunta é feita, Prolog tenta unificar o fato da pergunta com os fatos e cabeças de regras no banco de dados.

-   Dois fatos unificam se tiverem o mesmo predicado e os mesmos argumentos na mesma ordem.
-   A unificação de variáveis não instanciadas com termos resulta na **instanciação** da variável a esse termo.

#### 2. Backtracking (Retrocesso)

O Prolog tenta satisfazer as metas de uma consulta uma a uma. O processo de backtracking é o mecanismo automático pelo qual **todas as alternativas de solução são tentadas exaustivamente**.

-   Quando uma meta é satisfeita, o Prolog marca a posição no banco de dados onde a unificação ocorreu.
-   Se uma meta falhar, o Prolog fará o **backtracking** (retrocesso) e tentará **ressatisfazer a meta anterior** a partir da marca onde parou, desfazendo as instanciações de variáveis que ocorreram.

#### 3. Recursão

A recursão é um conceito importante que permite resolver problemas complexos de forma simples. É fundamental para processar estruturas de dados complexas, como listas, onde as cláusulas recursivas garantem que a lista continue sendo dividida (em cabeça e cauda) até que a condição de parada (geralmente a lista vazia ou a satisfação da meta) seja atingida.

#### 4. O Corte (`!`)

O "corte" é um predicado especial, denotado por `!`, que permite controlar o processo de backtracking.

-   Visto como uma meta, ele é **sempre satisfeito na primeira vez** que é encontrado, mas **sempre falha** em qualquer tentativa de ressatisfação.
-   O efeito colateral do corte é **impedir o backtracking** da meta que o originou.
-   É usado para: otimizar (poupar memória e tempo de processamento), garantir que a regra correta seja escolhida, ou implementar a negação (`\+` ou a combinação `!, fail`).

### Aritmética

Diferentemente de outras linguagens, em Prolog, uma expressão aritmética como `2 + 3` é tratada apenas como uma estrutura (um termo).

Para que os cálculos sejam realizados e o resultado seja obtido, é necessário usar o predicado especial pré-definido **`is`**:

-   O predicado `is` é infixo.
-   Seu lado direito deve ser uma expressão aritmética composta apenas por números ou variáveis instanciadas com números.
-   O lado esquerdo, se for uma variável não instanciada, será instanciado ao resultado da expressão. Se for um número ou variável instanciada a um número, `is` testará a igualdade numérica.

Prolog também possui predicados de comparação infixos para números, como `=:=` (igual numérico), `=\=` (diferente numérico), `<` (menor), `>` (maior), `=<` (menor ou igual) e `>=` (maior ou igual).

Prolog
Prolog (do francês Programmation en Logique) é uma linguagem de programação de paradigma lógico. Ela é simultaneamente descritiva e prescritiva. Ao programar em Prolog, descreve-se o que deve ser feito enquanto se prescreve como isso deve ser feito.

Prolog lida essencialmente com objetos e as relações entre eles. É considerada uma linguagem mais adequada para problemas que requerem a descrição de conhecimento, sendo historicamente utilizada em áreas de Inteligência Artificial (IA) como computação simbólica, compreensão de linguagem natural e sistemas especialistas.

O Prolog foi criado em 1972 por Colmerauer e Roussel. A linguagem é incluída na ementa de cursos de Inteligência Artificial na categoria de Programação em Lógica.

Estrutura de um Programa Prolog
Um programa Prolog é composto por uma coleção de cláusulas, que podem ser fatos ou regras, e perguntas (consultas) sobre essa coleção. Essa coleção é frequentemente chamada de banco de dados.

Fatos: São declarações sempre verdadeiras sobre objetos e suas relações.
Exemplo: gosta(pedro, maria). (Pedro gosta de Maria).
O nome da relação (predicado) vem primeiro, seguido pela lista de objetos (argumentos) entre parênteses e separados por vírgulas.
Tanto os nomes das relações quanto os objetos devem começar com letra minúscula.
Todo fato deve ser finalizado com um ponto final obrigatório.
Regras: São afirmações gerais que precisam ser avaliadas. Uma regra estabelece que a cabeça (conclusão) é verdadeira se o corpo (condição) for satisfeito.
A cabeça e o corpo são conectados pelo símbolo :-, que se pronuncia “se”.
O corpo é uma conjunção de metas separadas por vírgulas (o símbolo , é pronunciado “e”).
Exemplo: gosta(pedro, X) :- gosta(X, vinho). (Pedro gosta de X se X gosta de vinho).
Perguntas (Consultas): Usadas para perguntar ao Prolog se uma meta é verdadeira com base nos fatos e regras fornecidos.
Uma pergunta começa com ?-.
Exemplo: ?- possui(maria, livro). (Maria possui o livro?).
Elementos Básicos (Termos)
Em Prolog, existe apenas um tipo de dado principal, chamado termo, que abrange todas as construções sintáticas da linguagem, incluindo dados e o próprio programa. Um termo pode ser uma constante, uma variável ou uma estrutura.

Constantes (Átomos)
Nomes de objetos ou relações. Devem iniciar com letra minúscula.

maria, ouro, valioso.

Constantes (Números)
Podem ser inteiros ou números em ponto flutuante (floats).

0, -17, 2.35, 10e10.

Variáveis
Nomes que começam com letra maiúscula ou o sinal de sublinhado (_).

X, Y1, _Nome.

Variáveis Anônimas
Usadas quando se deseja que a variável unifique com qualquer termo, mas seu valor não precisa ser impresso. Cada ocorrência de _ representa uma variável diferente.

_.

Estruturas
Termos mais complexos formados por um funtor seguido de componentes entre parênteses, separadas por vírgula. Podem ser aninhadas.

livro(incidente_em_antares, verissimo).

Listas
As listas são uma das estruturas de dados mais importantes e comuns em Prolog, essenciais para a programação não numérica. Elas funcionam de forma muito diferente das listas em linguagens de programação imperativas (como C ou Python), sendo construídas com base na recursão e na unificação.

Em sua essência, a lista em Prolog é definida de forma recursiva, o que é fundamental para a programação lógica:

A lista vazia é uma lista. É representada por [].

Uma lista não-vazia é formada por duas partes:

A Cabeça (Head - H): O primeiro elemento da lista. A Cabeça pode ser qualquer objeto Prolog (um átomo, um número, uma variável ou até mesmo outra lista).

A Cauda (Tail - T): O restante da lista. A Cauda deve ser sempre uma lista.

Na verdade, internamente, uma lista é uma estrutura de dados construída usando um functor especial (geralmente o ponto .), formando uma espécie de árvore binária encadeada até chegar à lista vazia. Por exemplo, a lista [a, b, c] é representada internamente como .(a, .(b, .(c, []))).

Sintaxe e Notação Principal: [Cabeça | Cauda]
Para simplificar a manipulação, Prolog oferece uma notação sintática especial, que é a chave para trabalhar com listas:

Notação Enumerada
A forma mais simples de declarar uma lista é enumerando seus elementos entre colchetes, separados por vírgulas.

Prolog

[ana, tenis, pedro]  % Lista de átomos
[1, 2, 3, 4]         % Lista de números
[a, f(X), 5, [b, c]] % Lista heterogênea (contém termos e outra lista)

Notação de Desmembramento (Cabeça e Cauda)
Esta é a notação mais poderosa e usada para processar listas de forma recursiva. O caractere pipe (|) é usado para separar a Cabeça (o primeiro elemento) da Cauda (o restante da lista, que é sempre outra lista).

A sintaxe é: [Cabeça | Cauda]

Quando você usa essa notação em uma consulta, o Prolog tenta unificar (casar) o padrão com a lista, vinculando as variáveis.

Lista	Consulta de Unificação	Resultados da Unificação
[a, b, c]	[H	T]
[a]	[H	T]
[]	[H	T]
[a, b, c]	[X, Y	Z]
A habilidade de desmembrar uma lista em [Cabeça | Cauda] permite que você defina regras que trabalham com o primeiro elemento e depois chamam a si mesmas recursivamente para processar o restante da lista.

Processamento de Listas através da Recursão
Como as listas são definidas recursivamente, a maneira padrão de processá-las é usando predicados recursivos. Todo predicado recursivo para listas precisa de duas partes (cláusulas):

Condição de Parada (Caso Base)
Define o que acontece com a lista vazia ([]). É a condição que impede a recursão infinita.

Caso Recursivo
Define o que acontece com uma lista não-vazia ([H | T]). O predicado processa a Cabeça (H) e então se chama novamente para processar a Cauda (T).

Exemplo: Predicado pertence/2 (membro)
O predicado pertence(Elemento, Lista) verifica se um Elemento faz parte de uma Lista.

Prolog

% 1. Condição de Parada:
% Se o Elemento é a Cabeça da lista, o predicado é verdadeiro.
pertence(E, [E|_]). 

% 2. Caso Recursivo:
% Se o Elemento não é a Cabeça, ele deve pertencer à Cauda da lista.
pertence(E, [_|T]) :- 
    pertence(E, T).

Análise do Exemplo:

pertence(E, [E|_]).

Lê-se: “O elemento E pertence à lista se E for a cabeça da lista. A cauda (_) não importa.”
pertence(E, [_|T]) :- pertence(E, T).

Lê-se: “O elemento E pertence à lista se E pertencer à cauda (T) da lista. A cabeça (_) não importa.”
Quando você faz a consulta: ?- pertence(b, [a, b, c]).

Tenta a primeira cláusula: b é unificado com a? Não.

Tenta a segunda cláusula: Chama pertence(b, [b, c]).

Com a nova lista [b, c], tenta a primeira cláusula: b é unificado com b? Sim. Retorna true.

Essa estrutura (Caso Base + Caso Recursivo) é a espinha dorsal de quase todo processamento de listas em Prolog.

Predicados Comuns de Listas
Muitas funcionalidades comuns de listas já vêm embutidas ou são facilmente implementadas em Prolog:

Predicado	Descrição	Exemplo de Uso (Consulta)
member(E, L)	Verifica se o elemento E está na lista L (ou gera elementos se E for variável).	?- member(2, [1, 2, 3]). true.
append(L1, L2, L3)	Unifica L3 como a lista L1 concatenada com L2. É muito versátil.	?- append([a, b], [c, d], X). X = [a, b, c, d]
length(L, N)	Unifica N com o número de elementos em L.	?- length([a, b, c], N). N = 3
reverse(L1, L2)	Unifica L2 como a lista L1 invertida.	?- reverse([1, 2, 3], X). X = [3, 2, 1]
Dominar a notação [Cabeça | Cauda] e o conceito de recursão é o passo mais importante para usar listas de forma eficiente em Prolog.

Mecanismos de Processamento Central
Para responder a consultas, Prolog utiliza um processo que envolve unificação, resolução, recursão e backtracking.

1. Unificação
A unificação é a forma de igualdade em Prolog. Quando uma pergunta é feita, Prolog tenta unificar o fato da pergunta com os fatos e cabeças de regras no banco de dados.

Dois fatos unificam se tiverem o mesmo predicado e os mesmos argumentos na mesma ordem.
A unificação de variáveis não instanciadas com termos resulta na instanciação da variável a esse termo.
2. Backtracking (Retrocesso)
O Prolog tenta satisfazer as metas de uma consulta uma a uma. O processo de backtracking é o mecanismo automático pelo qual todas as alternativas de solução são tentadas exaustivamente.

Quando uma meta é satisfeita, o Prolog marca a posição no banco de dados onde a unificação ocorreu.
Se uma meta falhar, o Prolog fará o backtracking (retrocesso) e tentará ressatisfazer a meta anterior a partir da marca onde parou, desfazendo as instanciações de variáveis que ocorreram.
3. Recursão
A recursão é um conceito importante que permite resolver problemas complexos de forma simples. É fundamental para processar estruturas de dados complexas, como listas, onde as cláusulas recursivas garantem que a lista continue sendo dividida (em cabeça e cauda) até que a condição de parada (geralmente a lista vazia ou a satisfação da meta) seja atingida.

4. O Corte (!)
O “corte” é um predicado especial, denotado por !, que permite controlar o processo de backtracking.

Visto como uma meta, ele é sempre satisfeito na primeira vez que é encontrado, mas sempre falha em qualquer tentativa de ressatisfação.
O efeito colateral do corte é impedir o backtracking da meta que o originou.
É usado para: otimizar (poupar memória e tempo de processamento), garantir que a regra correta seja escolhida, ou implementar a negação (\+ ou a combinação !, fail).
Aritmética
Diferentemente de outras linguagens, em Prolog, uma expressão aritmética como 2 + 3 é tratada apenas como uma estrutura (um termo).

Para que os cálculos sejam realizados e o resultado seja obtido, é necessário usar o predicado especial pré-definido is:

O predicado is é infixo.
Seu lado direito deve ser uma expressão aritmética composta apenas por números ou variáveis instanciadas com números.
O lado esquerdo, se for uma variável não instanciada, será instanciado ao resultado da expressão. Se for um número ou variável instanciada a um número, is testará a igualdade numérica.
Prolog também possui predicados de comparação infixos para números, como =:= (igual numérico), =\= (diferente numérico), < (menor), > (maior), =< (menor ou igual) e >= (maior ou igual).

Markdown selection 11110 bytes 1740 words 217 lines Ln 218, Col 0HTML 8376 characters 1638 words 139 paragraphs