A abordagem **CI/CD** (sigla em inglês para **Integração Contínua e Entrega/Implantação Contínuas**) é uma prática fundamental do **DevOps**. Seu propósito principal é **otimizar e acelerar o ciclo de vida de desenvolvimento de software**, automatizando a construção, os testes e a implantação de mudanças no código.

O CI/CD é melhor explicado como um **fluxo de trabalho automatizado** que substitui as etapas manuais por _pipelines_ que constroem, testam e implantam software de forma confiável. Para implementar o CI/CD, as equipes de operações e desenvolvimento devem trabalhar em conjunto, seguindo princípios ágeis, com uma abordagem de **DevOps** ou **Engenharia de Confiabilidade de Sites (SRE)**.

## Componentes do Pipeline de CI/CD

O pipeline de CI/CD é composto por duas práticas inter-relacionadas, "CI" (Integração Contínua) e "CD" (Entrega Contínua ou Implantação Contínua).

### 1. CI: Integração Contínua (Continuous Integration)

"CI" sempre se refere à Integração Contínua. É a prática de **integrar, de forma automática e frequente, mudanças** a um repositório de código-fonte compartilhado.

**Processo e Benefícios da CI:**

-   **Automação e Frequência:** É um processo de automação que consolida as mudanças no código em uma ramificação (ou "tronco") compartilhada com mais frequência.
-   **Testes Automáticos:** À medida que as atualizações são feitas, **etapas de teste automatizadas** são acionadas para garantir a confiabilidade do código consolidado. Normalmente, são executados **testes automáticos de unidade e integração** para verificar se as mudanças não danificaram o aplicativo.
-   **Detecção de Erros:** Um dos benefícios é que, caso os testes automatizados identifiquem um conflito, é **mais fácil corrigir tais _bugs_ de forma mais rápida e frequente**.
-   **Contexto:** A CI resolve o problema de ter muitos desenvolvedores trabalhando simultaneamente, fazendo alterações que podem ser conflitantes se o código não for consolidado com frequência.

### 2. CD: Entrega Contínua e Implantação Contínua

"CD" refere-se à entrega contínua e/ou à implantação contínua. Ambos os conceitos estão relacionados e tratam da **automação dos estágios subsequentes** do _pipeline_ de CI/CD.

#### Entrega Contínua (Continuous Delivery)

A entrega contínua refere-se à automação da liberação do código validado para um repositório.

-   **Preparação para Produção:** O processo garante que o código testado esteja **sempre pronto para a implantação** em qualquer ambiente.
-   **Etapas Automatizadas:** Todos os estágios (da consolidação das mudanças no código à disponibilização de versões prontas para a produção) envolvem a automação de testes e da liberação do código.
-   **Repositório:** O código é carregado em um repositório (como GitHub ou um registro de containers).
-   **Implantação Manual:** Com a entrega contínua, a equipe de operações pode **implantar a aplicação em produção rapidamente**. As implantações podem ser **acionadas manualmente**. O objetivo é ter uma base de código **sempre pronta para a implantação** em produção, com o mínimo de esforço.

#### Implantação Contínua (Continuous Deployment)

A implantação contínua é uma **extensão da entrega contínua**.

-   **Liberação Automática:** Refere-se à **liberação automática das mudanças** feitas por desenvolvedores, do repositório até a produção, onde podem ser usadas por clientes.
-   **Sem Interferência Manual:** A CD elimina a necessidade de intervenção humana manual no estágio final do _pipeline_ antes da entrada em produção. O código é implantado automaticamente quando critérios predefinidos são atendidos e validados.
-   **Velocidade:** Mudanças feitas pelos desenvolvedores em uma aplicação na nuvem podem entrar em vigor **em questão de minutos**, caso passem em todos os testes automatizados.
-   **Requisito de Teste:** É **altamente dependente de uma automação bem desenvolvida dos testes**, o que requer um investimento inicial considerável.

_Nota:_ Embora seja possível fazer CI sem CD, não é possível fazer CD (Entrega ou Implantação Contínua) sem ter as práticas de CI implementadas.

## 3. Por que o CI/CD é Importante (Benefícios)

O CI/CD é crucial porque **acelera a entrega de software**, minimiza o tempo de inatividade e **melhora a qualidade do produto** através da automação.

Benefício

Detalhe

**Qualidade e Menos Erros**

As empresas evitam _bugs_ e falhas no código. Menos erros chegam à produção, resultando em uma **melhor experiência e maior satisfação do cliente**. A automação de _builds_ e testes garante que os _bugs_ sejam detectados e corrigidos prontamente.

**Velocidade e Eficiência**

Otimiza a produtividade, aumenta a eficiência e simplifica os fluxos de trabalho. As versões atualizadas do código são disponibilizadas mais rápido.

**Tempo de Valor Acelerado**

É possível levar produtos e novas funcionalidades ao mercado mais rapidamente, reduzindo custos e dando à empresa uma **vantagem competitiva**.

**Feedback e Adaptação**

Com a capacidade de agilizar a integração de atualizações, é possível **incorporar o _feedback_ dos usuários** de maneira mais frequente e eficaz.

**Recuperação de Falhas**

O CI/CD torna mais fácil corrigir problemas e **recuperar-se de incidentes** (reduzindo o MTTR - _Mean Time To Resolution_). Atualizações pequenas e frequentes facilitam a identificação e correção de _bugs_, ou o _rollback_ da mudança.

**Redução de _Burnout_**

A pesquisa indica que a CD **reduz mensuravelmente a dor de implantação e o _burnout_ da equipe**.

## 4. Elementos Fundamentais do Pipeline de CI/CD

Para garantir a máxima eficiência no ciclo de desenvolvimento, a infraestrutura de CI/CD deve incluir elementos fundamentais:

-   **Repositório de Fonte Única (SCM):** Deve abrigar todos os arquivos, _scripts_, código-fonte, estrutura de banco de dados, bibliotecas, arquivos de propriedades e **controle de versão** necessários para criar as _builds_.
-   **Check-ins Frequentes:** Ocorre na ramificação principal.
-   **Builds Automatizadas:** _Builds_ automáticas a partir de comandos únicos.
-   **Testes Contínuos:** _Builds_ autoteste, com testes contínuos.
-   **Alterações Pequenas:** Iterações frequentes com pequenas mudanças.
-   **Previsibilidade:** Implantações previsíveis a qualquer momento, sendo de baixo risco e rotina.
-   **Ambientes:** Ambientes de teste estáveis e ambientes que **clonam a produção**.
-   **Visibilidade Máxima:** Visibilidade máxima para todos os desenvolvedores.

## 5. CI/CD e o Ecossistema DevOps e Segurança

O _pipeline_ de CI/CD é uma parte **essencial da metodologia DevOps**, que busca fortalecer a integração e a colaboração entre as equipes de desenvolvimento e operações, por meio do aumento da automação.

### Segurança de CI/CD (DevSecOps)

A segurança é uma responsabilidade compartilhada e integrada do início ao fim do _pipeline_ (mentalidade DevSecOps).

-   **Definição:** A segurança de CI/CD protege os _pipelines_ de códigos com a **automação de verificações e testes** para evitar vulnerabilidades na entrega do software.
-   **Proteção:** Incorporar a segurança ajuda a **proteger os códigos de ataques, evitar vazamentos de dados** e garantir a conformidade com as políticas.
-   **Riscos:** A ausência de segurança adequada pode expor o _pipeline_ a riscos, como exposição de dados confidenciais, uso de componentes de terceiros não confiáveis ou acesso não autorizado a repositórios de código-fonte.

### Engenharia de Plataforma

A engenharia de plataformas é uma disciplina **complementar ao DevOps** que surgiu para lidar com os desafios de escalabilidade.

-   Ela busca maneiras mais eficazes de automatizar a entrega de aplicações, melhorar a colaboração e a comunicação, e, mais importante, **redirecionar as habilidades dos desenvolvedores** para onde seu esforço é mais necessário.

## 6. Ferramentas de CI/CD

As ferramentas de CI/CD ajudam a equipe a automatizar o desenvolvimento, a implantação e os testes. Algumas ferramentas lidam apenas com a CI, outras com a CD, e algumas são especializadas em testes contínuos.

-   **Nativas em Nuvem/Kubernetes:** **Tekton Pipelines** é um _framework_ de CI/CD para plataformas Kubernetes que proporciona uma experiência nativa em nuvem. O **Red Hat OpenShift Pipelines** também executa cada etapa em um _container_ próprio, permitindo escalabilidade independente.
-   **Soluções _Open Source_**: **Jenkins** (para CI ou hub de CD completo), **Spinnaker** (para ambientes _multicloud_), **GoCD** (voltado para modelagem e visualização), **Concourse** e **Screwdriver**.
-   **Padrões de Mercado:** Os principais provedores de nuvem pública, **GitLab**, CircleCI, Travis CI e Atlassian Bamboo, oferecem soluções.
-   **Ferramentas de Suporte:** Ferramentas essenciais para DevOps, como automação de configuração (**Ansible**, Chef, Puppet), _runtimes_ de _containers_ (Docker, rkt, cri-o) e orquestração de _containers_ (**Kubernetes**), aparecem em vários fluxos de trabalho de CI/CD.
    -   O **Red Hat Ansible Automation Platform**, que usa uma linguagem comum baseada em YAML e abordagem de estado desejado, pode ser usado tanto nas operações cotidianas quanto no _pipeline_ de CI/CD, ajudando a implantar ambientes consistentes de desenvolvimento, teste e produção.