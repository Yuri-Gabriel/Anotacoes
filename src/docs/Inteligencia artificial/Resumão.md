## 1. Sistemas Especialistas

### 1.1. Introdução

Um **Sistema Especialista (SE)** é um programa de computador, uma classe de sistema baseado em conhecimento, que visa **emular a especialização humana** em um domínio específico para resolver problemas complexos. Desenvolvidos principalmente na década de 1970 no campo da Inteligência Artificial (IA), eles se destacam por lidar com informações não numéricas e por sua capacidade de oferecer conclusões e justificativas (explicações) para as decisões tomadas.

A arquitetura geral de um SE é composta por três elementos principais:

1.  **Base de Conhecimento (Base de Regras):** Contém o conhecimento do domínio, geralmente na forma de **regras de produção** (estrutura "SE condição, ENTÃO conclusão/ação"), quadros ou redes semânticas. É o módulo central do sistema.
    
2.  **Máquina de Inferência (Motor de Inferência):** É o componente que processa o conhecimento da Base de Conhecimento, aplicando as regras aos dados de entrada (fatos) para chegar a uma conclusão ou solução.
    
3.  **Interface com o Usuário:** Permite a interação entre o usuário e o sistema, incluindo a capacidade de o sistema justificar seu raciocínio ("porquê") e coletar novos fatos.
    

### 1.2. Programação em Lógica

A **Programação em Lógica** (como em linguagens como **Prolog** e **Lisp**) tem um papel histórico fundamental no desenvolvimento de Sistemas Especialistas. Em contraste com a programação tradicional, onde o conhecimento está embutido tanto nas instruções quanto nas estruturas de dados, a programação em lógica e os SEs separam explicitamente o conhecimento (Base de Regras) do mecanismo de controle (Máquina de Inferência).

-   **Lógica de Predicados:** A introdução de comandos de lógica de predicados (como no Prolog) foi crucial, pois permitiu o desenvolvimento de sistemas que utilizam esquemas de raciocínio. O conhecimento é representado por fatos e regras lógicas, tornando o código mais declarativo e focado no que o sistema deve saber, em vez de como ele deve processar a informação passo a passo.
    
-   **Representação de Conhecimento:** Em um SE, a programação em lógica facilita a representação do conhecimento através de regras do tipo , que são a base do raciocínio.
    

### 1.3. Métodos de Inferência

Os **Métodos de Inferência** são as estratégias usadas pelo Motor de Inferência para analisar logicamente os dados de entrada e percorrer a Base de Conhecimento, buscando a solução ou uma conclusão. Os dois principais métodos são:

1.  **Encadeamento para Frente (Forward Chaining):**
    
    -   **Funcionamento:** Começa pelos **dados** (fatos conhecidos) e avança em direção às conclusões.
        
    -   **Lógica:** "SE este fato é verdadeiro, ENTÃO podemos concluir aquilo."
        
    -   **Aplicação:** Útil para problemas onde todos os dados de entrada estão disponíveis no início, como monitoramento e previsão. O sistema busca todas as conclusões possíveis a partir dos fatos iniciais.
        
2.  **Encadeamento para Trás (Backward Chaining):**
    
    -   **Funcionamento:** Começa pelo **objetivo** (hipótese ou conclusão que se deseja provar) e trabalha retroativamente, buscando os fatos ou regras necessários para suportar essa conclusão.
        
    -   **Lógica:** "Para provar esta conclusão, PRECISO verificar se estes fatos são verdadeiros."
        
    -   **Aplicação:** Ideal para problemas de diagnóstico, onde o objetivo é identificar a causa (como o sistema **MYCIN**, um dos primeiros SEs de sucesso para diagnóstico médico). O sistema faz perguntas específicas ao usuário para obter os fatos de que precisa.
        
## 2. Redes Neurais

### 2.1. Introdução

**Redes Neurais Artificiais (RNAs)** são modelos computacionais inspirados na estrutura e função do cérebro biológico. São um subconjunto do **Aprendizado de Máquina (Machine Learning)** e estão no núcleo dos modelos de **Aprendizado Profundo (Deep Learning)**. Elas são projetadas para **aprender por meio de exemplos**, ajustando suas conexões internas (pesos) para mapear entradas para saídas desejadas.

Uma RNA é composta por **neurônios artificiais** organizados em **camadas**:

-   **Camada de Entrada:** Recebe os dados brutos do problema.
    
-   **Camadas Intermediárias (Ocultas):** Onde ocorre a maior parte do processamento, transformando a entrada de maneiras cada vez mais complexas.
    
-   **Camada de Saída:** Produz o resultado final (classificação, regressão, etc.).
    

### 2.2. O Perceptron

O **Perceptron**, introduzido em 1957 por Frank Rosenblatt, é o modelo de rede neural artificial mais simples e fundamental, consistindo em um único neurônio.

-   Funcionamento: Recebe múltiplas entradas, cada uma associada a um peso (wi​). As entradas são multiplicadas pelos seus pesos, somadas, e o resultado é passado por uma função de ativação (geralmente uma função degrau) que determina a saída (binária, 0 ou 1).
    
-   **Aprendizado:** O algoritmo do Perceptron ajusta os pesos (em um processo de aprendizado supervisionado) para minimizar a diferença entre a saída calculada e a saída esperada.
    
-   **Limitação:** O Perceptron só consegue resolver problemas que são **linearmente separáveis**, ou seja, aqueles cujas classes de dados podem ser separadas por uma única linha reta (ou um hiperplano em dimensões superiores).
    

### 2.3. O Problema do OU-Exclusivo (XOR)

O **Problema do OU-Exclusivo (XOR)** é um marco histórico, pois evidenciou a principal limitação do Perceptron simples.

-   Função XOR: A função lógica XOR retorna Verdadeiro apenas quando uma das entradas é Verdadeira e a outra é Falsa (mas não ambas).
    
    | Entrada 1 | Entrada 2 | Saída XOR |
    | :---: | :---: | :---: |
    | 0 | 0 | 0 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 0 |
    
-   **Inseparabilidade Linear:** Ao tentar plotar esses dados em um gráfico 2D, é impossível traçar uma única linha reta que separe as saídas 1 (True) das saídas 0 (False).
    
-   **Consequência:** Essa inseparabilidade provou que um Perceptron simples era incapaz de modelar o problema XOR, o que levou a um período de desinteresse (o chamado "inverno da IA") em pesquisa de Redes Neurais. A solução para este problema exigiu o desenvolvimento de arquiteturas mais complexas.
    

### 2.4. Redes com Múltiplas Camadas (Multi-Layer Perceptron - MLP)

A solução para o problema do XOR e para outros problemas não-linearmente separáveis foi a introdução de **Redes com Múltiplas Camadas**, como o **Multi-Layer Perceptron (MLP)**.

-   **Estrutura:** O MLP é composto por uma camada de entrada, **uma ou mais camadas ocultas** e uma camada de saída.
    
-   **Poder de Representação:** A adição de camadas ocultas, combinada com funções de ativação não-lineares (como a _sigmoide_ ou _ReLU_), permite que a rede aprenda a fazer **separações não-lineares** complexas no espaço de dados, resolvendo o problema do XOR e outros. As camadas ocultas atuam como **extratoras de características** dos dados de entrada.
    

### 2.5. O Algoritmo Backpropagation

Para que as redes com múltiplas camadas pudessem ser efetivamente treinadas, foi necessário desenvolver um algoritmo capaz de ajustar os pesos em todas as camadas, e não apenas na camada de saída. Esse algoritmo é o **Backpropagation** (Retropropagação do Erro), formalizado em 1986.

-   **Aprendizado Supervisionado:** O Backpropagation é a regra de treinamento padrão para MLPs e se insere no contexto de aprendizado supervisionado.
    
-   **Funcionamento:**
    
    1.  **Propagação para Frente (Forward Pass):** Um padrão de entrada é apresentado à rede, e a atividade flui da entrada para a saída, gerando uma resposta.
        
    2.  **Cálculo do Erro:** O valor de saída obtido é comparado com o valor de saída esperado (rótulo), e o **erro** é calculado (usando uma função de erro diferenciável).
        
    3.  **Retropropagação (Backward Pass):** O erro é propagado **de volta** da camada de saída para as camadas ocultas (e depois para a camada de entrada). Durante essa propagação reversa, o algoritmo calcula o **gradiente** do erro em relação a cada peso na rede.
        
    4.  **Ajuste de Pesos:** Os pesos são atualizados iterativamente na direção oposta ao gradiente (Descida do Gradiente), a fim de **minimizar a função de erro**.
        

Esse processo cíclico (Forward Pass  Erro  Backward Pass  Ajuste de Pesos) é repetido até que o erro caia abaixo de um limite preestabelecido ou o número máximo de iterações seja atingido.