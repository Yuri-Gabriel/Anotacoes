# IA Conexionista

As Redes Neurais Artificiais (RNAs) são um campo fundamental da Inteligência Artificial (IA), constituindo a base da **IA Conexionista** e do **Deep Learning** (Aprendizado Profundo). Elas se destacam pela capacidade de aprender a partir de dados e são inspiradas no funcionamento do cérebro humano.

## 1. Fundamentos e Inspiração Biológica

Uma rede neural é essencialmente um sistema de unidades de processamento simples, chamadas **neurônios artificiais**, que são interconectadas para formar uma ferramenta complexa e robusta de aquisição de conhecimento.

### Neurônio e Processamento

O modelo do neurônio artificial, proposto por **McCulloch e Pitts em 1943**, possui uma natureza originalmente binária.

-   **Entrada e Pesos:** Em uma rede neural, o conhecimento é armazenado na forma de **pesos das conexões** (sinapses) entre os neurônios. A aprendizagem ocorre com o ajuste desses pesos, indicando o nível de influência (positivo ou excitatório, ou negativo ou inibitório) de um neurônio no próximo.
-   **Função de Ativação:** O neurônio artificial recebe o valor da **junção aditiva** (campo local induzido) e aplica uma função de ativação ($\phi$) para gerar sua saída. A **função sigmoide** é frequentemente utilizada porque é diferenciável e exibe um balanceamento entre comportamento linear e não-linear, sendo importante para a teoria das redes neurais.

## 2. História e Evolução

A pesquisa em redes neurais faz parte da história da IA, tendo passado por períodos de grande entusiasmo e declínio, muitas vezes chamados de "Invernos da IA".

| Ano | Evento Chave |
|:---:|:---:|
| **1943** | **Redes Neurais Artificiais** e lógica matemática são relacionadas (McCulloch/Pitts). |
| **1949** | **Princípio de aprendizagem de Hebb**: "células que disparam juntas se conectam". |
| **1958** | O **Perceptron** (Rosenblatt) é proposto como o primeiro modelo para aprendizagem supervisionada e um classificador linear. |
| **1969** | O livro _Perceptrons_ (Minsky/Papert) demonstra a incapacidade dos modelos lineares em resolver o problema **XOR**, levando ao declínio da pesquisa em redes neurais. |
| **1982-1986** | **Revitalização do Conexionismo** e da tecnologia neural e estatística. A **backpropagation** é disseminada (Rumelhart, Hinton, Williams), permitindo o treinamento de redes multicamadas mais poderosas. A Rede de Hopfield introduz memórias associativas.
| **2006 em diante** | **Deep Learning** ganha destaque com pré-treinamento não supervisionado em camadas de redes profundas (Hinton et al.). |

## 3. Deep Learning (Aprendizado Profundo)

O Deep Learning é uma subárea do Machine Learning que utiliza redes neurais. O termo "deep" (profundo) refere-se ao **número de camadas ocultas** (ou níveis de análise) na arquitetura da rede.

O Deep Learning permite processar grandes volumes de dados para descobrir relacionamentos e padrões que, muitas vezes, não são detectáveis por humanos. É uma abordagem que imita os processos do cérebro e tem impulsionado a maior parte da inovação na IA na última década.

### Retropropagação (Backpropagation)

O avanço na **retropropagação** (backpropagation) foi fundamental para o Deep Learning. Esta técnica sofisticada ajusta os pesos sinápticos de forma mais eficiente. O processo envolve o cálculo do erro na camada de saída e a propagação desse erro para trás na rede para otimizar gradualmente os pesos.

## 4. Tipologias Comuns de Redes Neurais

As redes neurais são classificadas de acordo com sua topologia, que define como os neurônios estão dispostos e interconectados.

### A. Redes Alimentadas Adiante (Feed-forward Networks)

Neste tipo de rede, os neurônios são organizados em camadas, e o fluxo de informação é sempre **unidirecional**, da camada de entrada para a camada de saída. Não há ciclos (realimentação).

-   **Multilayer Perceptron (MLP):** Redes feed-forward que possuem uma ou mais **camadas ocultas** entre as camadas de entrada e saída. Estas camadas ocultas permitem que a rede capture a não-linearidade dos dados, algo que as redes Perceptron de camada única não conseguiam fazer.

### B. Redes Recorrentes (Recurrent Neural Networks - RNNs)

Nas RNNs, ocorre **realimentação**, o que significa que a saída de um neurônio pode ser aplicada como entrada no próprio neurônio ou em outros neurônios de camadas anteriores, formando um ciclo. As RNNs são projetadas para processar entradas anteriores ao longo do tempo, sendo úteis na previsão de palavras, como em aplicativos de mensagens.

### C. Redes Neurais Convolucionais (Convolutional Neural Networks - CNNs)

As CNNs são modelos de Deep Learning que analisam os dados seção por seção, através de **convoluções**.

-   Elas são inspiradas na forma como os neurônios do córtex visual processam imagens.
-   São ideais para aplicações complexas de **reconhecimento de imagem** (Visão Computacional) e Processamento de Linguagem Natural (NLP).

### D. Redes Adversárias Generativas (Generative Adversarial Networks - GANs)

As GANs, desenvolvidas por Ian Goodfellow em 2014, são modelos de Deep Learning onde duas redes neurais competem entre si: um **Gerador** que cria novas saídas (como fotos ou frases) e um **Discriminador** que as avalia. Através de um ciclo de feedback, as GANs buscam tornar as criações o mais realistas possível. Elas têm sido usadas para criação de conteúdo (como a venda de arte por US$ 432.000) e, infelizmente, para _deepfakes_.

### E. Outros Modelos

-   **Redes de Função de Base Radial (RBF):** Diferentes das MLPs, as RBFs usam funções de base radial como função de ativação, têm uma única camada oculta e neurônios de saída lineares. São aplicadas em **classificação de padrões** e **aproximação de função**.
-   **Mapas Auto-Organizáveis (SOM) / Redes de Kohonen:** Utilizam **aprendizagem não supervisionada** e um algoritmo competitivo onde os neurônios competem com base na similaridade com o padrão de entrada. São usadas para **clusterização** de dados, formando agrupamentos de dados semelhantes.
-   **Rede de Hopfield:** Uma rede recorrente que funciona como uma **memória associativa**, capaz de armazenar padrões. É aplicada em **classificação/reconhecimento de padrões** e **otimização**.

## 5. Processos de Aprendizagem

A capacidade de uma rede neural de aprender e melhorar seu desempenho é uma característica principal.

1.  **Aprendizagem Supervisionada:** O modelo usa dados **rotulados** (etiquetados), onde a resposta correta é conhecida. É a abordagem mais comum e requer grandes quantidades de dados para refinar o modelo e produzir resultados mais precisos.
2.  **Aprendizagem Não Supervisionada:** O modelo usa dados **não rotulados** para detectar padrões sem uma resposta de saída conhecida. O agrupamento (_clustering_) é a abordagem mais comum (ex: agrupamento k-means).
3.  **Aprendizagem Semissupervisionada:** Uma mistura das abordagens anteriores, usada quando se tem uma pequena quantidade de dados não rotulados que podem ser transformados em dados supervisionados (_pseudorrotulagem_).
4.  **Aprendizagem por Reforço:** O sistema é treinado através de tentativa e erro, sendo **recompensado** por previsões corretas e "punido" (reforço negativo) por erros. Essa abordagem foi fundamental para realizações como o AlphaGo.

## 6. Aplicações e Desafios

As redes neurais e o Deep Learning impulsionaram avanços significativos em diversas áreas:

-   **Reconhecimento de Padrões:** Como visão computacional (ex: AlexNet em 2012, reconhecimento de imagem).
-   **Processamento de Linguagem Natural (NLP):** Chatbots, tradução automática (como o Google Tradutor, que mudou para Deep Learning em 2016).
-   **Sistemas de Recomendação:** Como os usados pela Netflix.
-   **Saúde:** Detecção precoce de doenças como o Mal de Alzheimer a partir de exames e auxílio no desenvolvimento de novos medicamentos.
-   **Robótica:** Aplicações de IA, como a aprendizagem por reforço, permitem que robôs aprendam a navegar em ambientes e realizar tarefas complexas.

Apesar do poder das redes neurais, elas apresentam desafios:

-   **Caixa-Preta (_Black Box_):** Modelos de Deep Learning complexos (com muitas camadas ocultas) são difíceis de interpretar e compreender. Isso é uma limitação em áreas que exigem transparência (como diagnóstico médico ou regulamentação). A pesquisa em **Explicabilidade** busca sistemas para entender o funcionamento interno desses modelos.
-   **Dependência de Dados:** O sucesso de uma rede depende da **qualidade e quantidade de dados** disponíveis para treinamento.
-   **Superadaptação (_Overfitting_) / Super-treinamento:** Se a rede for treinada com um número excessivo de ciclos ou dados insuficientes, ela pode "memorizar" os padrões de treinamento, perdendo a capacidade de generalização para dados novos.
-   **Ausência de Arquitetura Ótima:** A configuração ideal (número de camadas e neurônios) de uma rede MLP, por exemplo, é muitas vezes determinada por tentativa e erro.
O Perceptron (Perceptron Algorithm) é um marco fundamental na história das Redes Neurais Artificiais (RNA) e da Inteligência Artificial (IA), sendo o primeiro modelo de aprendizado supervisionado a ganhar notoriedade.

## 7. Perceptron


O **Perceptron**, proposto por Frank Rosenblatt em 1958, é o modelo mais fundamental e simples de um **Neurônio Artificial**, sendo a base para as **Redes Neurais** mais complexas. Ele simula a capacidade de um neurônio biológico de receber múltiplos sinais, processá-los e emitir uma única resposta binária (como 'sim' ou 'não', '1' ou '0').

A função principal de um Perceptron simples é atuar como um **classificador linear binário**, o que significa que ele pode separar dados em duas classes se esses dados forem **linearmente separáveis** (ou seja, se for possível traçar uma linha reta, um plano ou um hiperplano que separe perfeitamente as duas classes no espaço).

Aqui está a explicação detalhada de sua estrutura, funcionamento e processo de aprendizado:

----------

## 1. Estrutura e Cálculo de Saída

O Perceptron é composto por três componentes principais que trabalham juntos para gerar uma saída a partir de um conjunto de entradas.

### A. Entradas ($x_i$)

São os dados de entrada, representados como um vetor $X = (x_1, x_2, x_3 ... x_n)$. Podem ser valores numéricos que representam características ou atributos de um objeto.

### B. Pesos Sinápticos ($w_i$)

Cada entrada $x_i$ está associada a um **peso** $w_i$ .

-   **Função:** Os pesos determinam a **importância** ou a **influência** de cada entrada no resultado final. Um peso maior significa que a entrada correspondente é mais relevante para a decisão do Perceptron.
    
-   **Inicialização:** No início, os pesos são geralmente inicializados com valores aleatórios pequenos.
    

### C. Soma Ponderada (Função Combinadora / Somadora)

A primeira etapa de processamento dentro do neurônio é calcular a **soma ponderada** das entradas. Isso envolve multiplicar cada entrada pelo seu respectivo peso e somar todos esses produtos, adicionando um termo chamado **Bias** ($b$).

#### Fórmula da Soma Ponderada:

$$
	u = \sum_{i = 1}^{n} (w_i x_i) + b
$$

-   **Viés ($b$):** O **Bias** (ou Viés) é um valor constante (como se fosse uma entrada com valor fixo de 1 e um peso $w_i$). Ele não depende de nenhuma entrada. Sua função é deslocar a linha (ou plano) de decisão para cima ou para baixo, permitindo que o Perceptron separe classes que não passam pela origem, aumentando sua flexibilidade.
    

### D. Função de Ativação (Função Degrau)

A soma ponderada ($u$) é então passada para uma **Função de Ativação** (também chamada de função de transferência), que toma a decisão final. Para o Perceptron simples, a função de ativação mais comum é a **Função Degrau** (ou _Heaviside_), que transforma a soma em uma saída binária (0 ou 1).

#### Fórmula da Saída ($\hat{y}$):

$$
	\hat{y} = f(u) =
		\begin{cases}
			1, & \text{se } u \ge 0 \\
			0, & \text{se } u < 0
		\end{cases}
$$

-   **Decisão:** Se a soma ponderada for **maior ou igual a 0**, o Perceptron "dispara" e a saída é **1** (pertence à classe). Se for **menor que 0**, a saída é **0** (não pertence à classe). A condição $u = 0$ define a **linha de decisão** (fronteira de separação).
    

----------

## 2. O Processo de Aprendizado (Treinamento)

O Perceptron aprende a classificar ajustando continuamente seus pesos e o bias com base nos erros cometidos. Isso é um processo de **aprendizado supervisionado**, onde ele usa exemplos de treinamento com a resposta correta (o **rótulo** ou **saída desejada**, $y$) para corrigir seus parâmetros.

O processo de treinamento é iterativo e consiste nos seguintes passos:

### A. Inicialização

Os pesos ($w_i$) e o Bias ($b$) são inicializados com valores aleatórios ou zero.

### B. Iteração (Época)

O conjunto de treinamento é percorrido várias vezes (várias **épocas**). Para cada exemplo de entrada:

1.  **Cálculo da Saída:** Calcula-se a soma ponderada ($u$) e a saída prevista ($\hat{y}$) do Perceptron.
    
2.  Cálculo do Erro: O erro ($e$) é calculado como a diferença entre a saída desejada ($y$) e a saída prevista ($\hat{y}$​):

$$
	e = y - \hat{y}
$$
   
   -   Se $e = 0$, o Perceptron acertou, e não há correção.
        
   -   Se $e \neq 0$, o Perceptron errou, e os pesos devem ser ajustados.
        
3.  **Atualização dos Pesos (Regra Delta ou Regra do Perceptron):** O Perceptron usa o erro para atualizar os pesos e o bias, buscando reduzir o erro na próxima iteração.

#### Fórmula de Atualização (para cada peso $w_i$):

$$
	w_{i(\text{novo})} = w_{i(\text{antigo})} + \eta \cdot e \cdot x_i
$$

E o Bias é atualizado de forma semelhante (considerando $x_{b} = 1$):

$$
	b_{(\text{novo})} = b_{(\text{antigo})} + \eta \cdot e
$$

-   **Taxa de Aprendizado ($\eta$ - _eta_):** É um parâmetro crucial (geralmente um valor entre 0 e 1) que controla o **tamanho do passo** dado nas atualizações.
    
    -   Uma  pequena significa aprendizado mais lento e estável.
        
    -   Uma  grande significa aprendizado mais rápido, mas pode "saltar" o ponto ideal.
        
![fluxograma_tem_proximo](https://drive.google.com/thumbnail?id=1IjbDjSJJyJWa9Jv4GsAlkDDRT9vlu4bA&sz=w800)


### C. Convergência

O processo se repete até que o Perceptron não cometa mais erros em todo o conjunto de treinamento, ou até que um número máximo de épocas seja alcançado. Quando o algoritmo converge, significa que ele encontrou os pesos e o bias ideais que definem a linha de decisão capaz de separar as duas classes.

----------

## 3. Limitações e Evolução

Embora seja um marco, o Perceptron simples tem uma limitação fundamental:

-   **Linearmente Separável:** Ele só pode resolver problemas onde os dados são **linearmente separáveis**. O exemplo clássico de um problema que o Perceptron simples _não pode_ resolver é o operador lógico **XOR (OU Exclusivo)**, pois ele requer uma fronteira de decisão não linear.
    

A solução para esta limitação é o **Perceptron de Múltiplas Camadas (MLP)**.

### Perceptron de Múltiplas Camadas (MLP)

O MLP é uma arquitetura que conecta vários Perceptrons em camadas:

1.  **Camada de Entrada:** Recebe os dados.
    
2.  **Camadas Ocultas:** Uma ou mais camadas intermediárias onde o processamento não linear ocorre. Estas camadas permitem que a rede aprenda relações complexas e não lineares.
    
3.  **Camada de Saída:** Produz o resultado final.
    

Com a adição das camadas ocultas e o uso de funções de ativação não lineares (como a Sigmoid ou ReLU), o MLP (que forma uma **Rede Neural _Feed-Forward_**) pode resolver problemas complexos e não lineares, como o XOR. O treinamento do MLP usa um algoritmo mais sofisticado chamado **Retropropagação (Backpropagation)**.