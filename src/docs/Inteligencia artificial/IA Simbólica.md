
# IA Simbólica

A Inteligência Artificial (IA) Simbólica é uma das três principais correntes intelectuais da IA, ao lado da IA Conexionista (Redes Neurais) e da IA Estatística. Esta abordagem, que dominou os primeiros anos da pesquisa em IA, concentra-se em sistemas que **manipulam símbolos explícitos e regras lógicas** para representar o conhecimento e realizar inferências.

----------

### 1. Definição e Princípios Fundamentais

A IA Simbólica é fundamentalmente **baseada em regras**. Seu foco principal reside na **representação explícita do conhecimento**.

-   **Símbolos e Conhecimento Explícito:** Os sistemas simbólicos utilizam símbolos e regras lógicas para codificar o conhecimento humano. A ideia central é que o pensamento inteligente pode ser modelado por meio da manipulação de estruturas de dados simbólicas, como listas ou estruturas lógicas.
-   **Inferência Lógica:** A inteligência é alcançada através da aplicação de **regras lógicas** que permitem ao sistema realizar **inferências** e tomar decisões.
-   **Rota da Resolução de Problemas:** A IA simbólica seguiu a rota baseada na **resolução de problemas abstratos**, como o xadrez, uma abordagem sugerida por Alan Turing.

### 2. O Paradigma Lógico e a Linguagem Prolog

O conceito de Programação em Lógica, exemplificado pela linguagem **Prolog**, é central para a IA simbólica.

-   **Prolog:** Criada em 1972, Prolog pertence ao **paradigma lógico**. É uma linguagem adequada para problemas onde é necessário **descrever conhecimento**, sendo utilizada em aplicações de computação simbólica e sistemas especialistas.
-   **Estrutura do Programa:** Um programa Prolog é composto por **fatos** sobre objetos, **regras de inferência** e **perguntas** sobre esses fatos e regras.
-   **Termos e Relações:** Prolog lida com **objetos e relações** entre eles. Todos os dados e programas em Prolog são englobados pelo tipo **termo**, que pode ser uma constante, uma variável ou uma estrutura.
-   **Regras Lógicas (Cláusulas):** Regras são afirmações gerais sobre objetos e seus relacionamentos. Elas consistem em uma **cabeça** e um **corpo**, conectados pelo símbolo `:-` (lido como "se"). A cabeça descreve o que está sendo definido, e o corpo é uma conjunção de metas a serem satisfeitas para que a cabeça seja considerada verdadeira.

### 3. Exemplos Históricos e Aplicações

O caminho simbólico moldou as conquistas iniciais da IA e levou ao desenvolvimento dos Sistemas Baseados em Conhecimento (Sistemas Especialistas).

-   **Pioneirismo:** Exemplos iniciais notáveis incluem o **Logic Theorist** (1955) de Newell & Simon, que provava teoremas matemáticos usando heurística, e o **General Problem Solver (GPS)**.
-   **Sistemas Especialistas (décadas de 70-80):** Esta foi uma aplicação importante da IA simbólica, extraindo **conhecimento de domínio específico de especialistas na forma de regras**.
    -   **Estrutura:** Esses sistemas usavam lógica simbólica e caminhos complexos, geralmente seguindo o formato: `se [premissas] conclusão`.
    -   **Impacto:** O conhecimento codificado nesses sistemas **preencheu a lacuna entre informação e computação** e representou a **primeira aplicação real da IA** a impactar a indústria.
    -   **Exemplos Notáveis:**
        -   **MYCIN:** Usado para diagnóstico de infecções sanguíneas e recomendação de antibióticos.
        -   **XCON:** Convertia pedidos de clientes em especificações de peças.
        -   **DENDRAL:** Inferia estrutura molecular por espectrometria de massa.
	    -   **SAINT:** Foi um programa inicial (1961) que ajudou a resolver problemas de cálculo, sendo considerado o primeiro exemplo de um sistema especialista.

### 4. Eficácia e Limitações

A IA Simbólica demonstrou ser **eficaz em domínios bem definidos**. No entanto, esta abordagem enfrentou problemas significativos que levaram a períodos conhecidos como "invernos da IA".

-   **Limitações com Incerteza:** As regras determinísticas inerentes ao paradigma simbólico não conseguiam lidar eficazmente com as **incertezas do mundo real**.
-   **Complexidade e Manutenção:** Um problema crítico foi a "explosão combinatória", onde os modelos se tornaram excessivamente complicados e difíceis de ajustar. Rapidamente, as regras tornaram-se muito complexas para serem criadas e mantidas.
-   **Impasse em Programas Extensos:** A complexidade das interações entre os componentes em programas simbólicos grandes, como o SHRDLU, tornava o código difícil de compreender e expandir, representando um impasse na programação de IA.
-   **Falta de Aprendizado Contínuo:** Os sistemas especialistas, por exemplo, não aprendiam com o tempo; em vez disso, era necessário que houvesse atualizações constantes dos modelos lógicos subjacentes, o que aumentava custos e complexidade.