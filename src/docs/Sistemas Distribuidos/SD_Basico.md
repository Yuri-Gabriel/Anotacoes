### 1. Fundamentos e Definições de Sistemas Distribuídos

Um Sistema Distribuído é, essencialmente, um **conjunto de máquinas autônomas que cooperam para oferecer um serviço único**. Ele se apresenta a seus usuários como um sistema único e coerente. Seus componentes (hardware ou software), interligados em rede, comunicam-se e coordenam ações apenas por meio de envio de mensagens.

#### Objetivos
Os principais objetivos de um SD são:
*   Conectar usuários.
*   Compartilhar recursos.
*   Dividir tarefas computacionais.

#### Desafios e Limitações
O fato de os programas rodarem em múltiplas máquinas introduz desafios significativos em comparação com sistemas centralizados, como:
*   Latência de rede.
*   Perda de pacotes.
*   Inconsistência de relógios.
*   Heterogeneidade de hardware/software.
*   Possibilidade de falhas parciais.

#### Propriedades Desejáveis e Trade-offs
Ao projetar um SD, é crucial buscar propriedades como:
1.  **Transparência:** A capacidade de o sistema "esconder" os detalhes da distribuição do ponto de vista do usuário, oferecendo a visão de um sistema centralizado. Isso inclui encapsular detalhes como Localização, Migração, Replicação, Concorrência e Paralelismo.
2.  **Escalabilidade:** Capacidade de crescer em capacidade e complexidade.
3.  **Disponibilidade:** O serviço estar acessível quando requisitado.
4.  **Consistência:** O grau em que diferentes réplicas apresentam os mesmos dados.

Um princípio central é que **nem todas essas propriedades podem ser maximizadas ao mesmo tempo**. A famosa tensão entre consistência e disponibilidade em face de partições de rede é conhecida como o **Teorema CAP**.

---

### 2. Conceitos de Hardware e a Taxonomia de Flynn

Um SD pressupõe a existência de diversos processadores, cuja organização é classificada pela **Taxonomia de Flynn**, que considera o Fluxo de Instruções e o Fluxo de Dados.

| Instruções / Dados | Único (Single Data) | Múltiplo (Multiple Data) |
| :--- | :--- | :--- |
| **Único (Single Instruction)** | SISD | SIMD |
| **Múltiplo (Multiple Instruction)** | MISD | MIMD |

#### Detalhamento das Categorias
*   **SISD (Single Instruction, Single Data):** Computadores de Von Neumann, como microprocessadores tradicionais.
*   **SIMD (Single Instruction, Multiple Data):** Utiliza uma única Unidade de Controle com múltiplas Unidades Lógicas e Aritméticas (ULA). É usada para processamento multimídia, como a extensão SSE em Intel Core i7. O modelo SIMD se subdivide em Processadores Vetoriais e Vetor de Processadores.
*   **MISD (Multiple Instruction, Single Data):** Não existem computadores que operem neste modelo atualmente.
*   **MIMD (Multiple Instruction, Multiple Data):** É a categoria mais comum no estudo dos Sistemas Distribuídos, envolvendo múltiplos processadores e múltiplos computadores.

#### Classificação do MIMD
O MIMD se desdobra em:
*   **Máquinas Multi-processadas:** Classificadas quanto ao tempo de acesso à memória (UMA - Uniform Memory Access, NUMA - NonUniform Memory Access, COMA - Cache Only Memory Access).
*   **Múltiplos Computadores:** Incluem MPP (Massive Parallel Processors, hardware específico) e Cluster Of Workstations (computadores convencionais e servidores conectados em rede).

A comunicação CPU-CPU nesses sistemas geralmente tem um tráfego reduzido comparado ao CPU-Memória.

---

### 3. Conceitos de Software e Arquiteturas

O software em SD é classificado quanto ao acoplamento.

#### Software Fortemente Acoplado
A rede é vista como um **"sistema único" (Uniprocessador Virtual)**. O Kernel é o mesmo em todos os dispositivos, e os processos se comunicam de forma "global", independentemente da localização.

#### Software Fracamente Acoplado
Máquinas e usuários são **independentes** entre si. A interação é limitada a mensagens entre dispositivos. É típico em Sistemas Operacionais de Rede, onde cada estação tem seu próprio SO. Em caso de falha de comunicação, os computadores mantêm a operação baseada em recursos locais.

#### Estilos de Arquitetura

1.  **Cliente-Servidor (C-S)**: Clientes interagem com servidores, que tipicamente estão em computadores distintos. Servidores podem atuar como clientes de outros servidores. Um desafio é a escalabilidade. Em redes locais de alta qualidade, a comunicação pode ser baseada em um protocolo simples **Request-Reply**, que é não orientado à conexão e exige que as operações sejam **idempotentes**.
2.  **Peer-to-Peer (P2P)**: Todos os processos envolvidos possuem funções semelhantes e interagem de forma cooperativa e simétrica. Cada processo atua simultaneamente como cliente e servidor.
3.  **Sistemas Híbridos:** Combinam C-S e P2P, como servidores de borda e sistemas distribuídos colaborativos (ex: torrent).

Os SDs modernos enfrentam desafios como Computação Móvel, Internet of Things (IoT), Computação em Nuvem e Segurança, pois os nós não são mais estáticos.

---

### 4. Comunicação e Sincronismo

A comunicação em SDs opera por troca de mensagens e protocolos, especialmente em Multi-Computadores sem memória compartilhada.

#### Mecanismos de Comunicação
A comunicação pode ocorrer por:
*   **Troca de mensagens** (*message passing*).
*   **Chamadas remotas (RPC/gRPC)**: Tendem a ser síncronas e criam acoplamento temporal.
*   **Filas (*message queues*)**: Suportam comunicação assíncrona, desacoplam remetente e receptor e ajudam na absorção de picos de carga.
*   **Compartilhamento de dados** em camadas intermediárias (ex.: caches distribuídos).

Protocolos (Orientados ou Não Orientados a Conexão), serialização (JSON, Protobuf), *timeouts*, *retries* e padrões de *backoff* são essenciais para garantir a confiabilidade em redes não-confiáveis.

#### Modelos de Camadas (OSI e TCP/IP)
A complexidade dos sistemas de comunicação exige a organização das tarefas em protocolos de diversos "níveis" ou **camadas**.

*   **Modelo OSI (Open Systems Interconnection):** Dividido em sete camadas para reduzir o tráfego entre elas e definir funções inequívocas.
    *   **1. Física (Physical):** Onde a comunicação efetivamente ocorre (interfaces mecânica, elétrica).
    *   **2. Enlace (Data Link):** Transforma a camada física em um ambiente livre de erros (controle de fluxo).
    *   **3. Rede (Network):** Interliga diferentes "padrões de rede" e controla a operação (roteamento).
    *   **4. Transporte (Transport):** Primeira camada fim a fim; estabelece Qualidade de Serviço (QoS), conexões e multiplexação.
    *   **5. Sessão (Session):** Determina pontos de checagem intermediária, controle de fluxo e sincronização.
    *   **6. Apresentação (Presentation):** Lida com sintaxe e semântica (criptografia, compactação, estruturas de dados).
    *   **7. Aplicação (Application):** Lida com aplicações associadas à comunicação de dados (Telnet, FTP, WEB Server).

*   **Modelo TCP/IP:** É o padrão de mercado, mais simples de implementar em LANs e WANs. Possui menos camadas. A camada de Aplicação do TCP/IP incorpora as funções das três camadas superiores do OSI (Sessão, Apresentação e Aplicação).

#### Endereçamento
O endereçamento diferenciado ocorre em três camadas do modelo OSI:
1.  **Enlace:** Identifica o dispositivo no segmento local da rede.
2.  **Rede:** Identifica o dispositivo dentro da rede (inclusive WAN).
3.  **Transporte:** Identifica o **processo/thread** envolvido na comunicação.

#### Sincronismo
A sincronização envolve:
*   **Tempo:** Utiliza relógios físicos (NTP) e relógios lógicos (Lamport, relógios vetoriais) para ordenar eventos e detectar causalidade.
*   **Execução:** Usa mecanismos como *locks*, semáforos, barreiras, *futures/promises* e modelos *actor* ou *event-driven* para controlar a concorrência e o acesso a recursos compartilhados.

---

### 5. Grupos, Processos e Threads

#### Processos e Threads
*   **Processo:** Uma instância de execução com seu próprio espaço de endereçamento. Oferecem maior isolamento, mas a comunicação entre eles (IPC) é mais custosa.
*   **Thread:** Uma linha de execução dentro de um processo que compartilha memória e recursos com outras *threads* do mesmo processo. Permitem paralelismo leve (*overhead* menor que processos), mas exigem cuidado extra com sincronização para evitar condições de corrida.

#### Grupos
O termo "Grupos" refere-se a agrupamentos lógicos ou operacionais, como um grupo de réplicas que mantêm o mesmo estado. Em SDs, o gerenciamento de grupo é crucial para detectar falhas, gerenciar ingressos/saídas e reconfigurar o sistema.
Modelos modernos, como **corrotinas**, *green threads* e *runtimes* assíncronos, são utilizados para reduzir o custo de contexto e simplificar a programação assíncrona.

---

### 6. Segurança

A segurança é fundamental para proteger os pipelines de código e os dados. Envolve proteção técnica e práticas organizacionais.

#### Pilares da Segurança
*   **Confidencialidade:** Garantida por criptografia (TLS para tráfego, criptografia em repouso).
*   **Integridade:** Garantida por assinaturas e *checksums*.
*   **Autenticação/Autorização:** Uso de OAuth, JWT, certificados X.509 e controles de acesso baseados em papéis.

A gestão de chaves (*secrets*, rotação de chaves) e a aplicação do **princípio do menor privilégio** são práticas essenciais. Além disso, a segurança envolve modelagem de ameaças, revisão de código, testes de penetração, *logging* e monitoramento contínuo.

Em arquiteturas distribuídas, é crucial proteger os canais internos entre serviços (ex: mTLS, *service mesh*) e garantir que falhas de autenticação/autorização não causem negação de serviço. O conceito de **DevSecOps** integra a segurança como responsabilidade compartilhada desde o início do ciclo de vida de TI.

---

### 7. Serviços e Tolerância a Falhas

#### Serviços
Serviços expõem funcionalidades por interfaces bem definidas, abrangendo desde monolitos modularizados até arquiteturas de microsserviços. Um serviço ideal deve:
*   Definir um contrato (API) claro.
*   Ser **observável** (telemetria, métricas, logs, traces).
*   Possuir *health checks*.
*   Poder ser implantado/atualizado de forma independente.

Padrões importantes incluem *service discovery* (clientes localizam instâncias), *API gateways* (unificam roteamento e segurança) e design para escalabilidade (serviços *stateless* quando possível). Para a liberação de mudanças, são vitais as estratégias de *deploy* como **blue/green** e **canary**. A orquestração (como o Kubernetes) e a resiliência (*timeouts, circuit breakers*) são preocupações práticas.

#### Tolerância a Falhas
A tolerância a falhas é a capacidade de o sistema continuar operando mesmo quando componentes falham.

**Estratégias Comuns:**
*   **Redundância e Replicação:** Uso de múltiplas réplicas (primário/secundário, multi-master).
*   **Detecção e Recuperação Automática:** Uso de *health checks* e orquestradores que reiniciam instâncias.
*   **Algoritmos de Consenso:** Empregados para coordenar réplicas e garantir propriedades (Paxos, Raft).
*   **Mecanismos de Isolamento:** Como *bulkheads* e *circuit breakers*, para evitar a cascata de falhas.
*   **Idempotência:** Garantia de que operações podem ser reexecutadas com segurança.
*   **Persistência de Estado:** Através de *checkpoints*, logs de transações (WAL) e *backups*, reduzindo RPO/RTO (Recovery Point/Time Objective).

Um design eficaz também inclui testes de **chaos engineering** (introdução proposital de falhas para validar o comportamento do sistema) e definição de SLAs/SLOs claros.