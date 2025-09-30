# Lista Encadeada

Pronto, agora que já vimos TAD e recursividade estamos prontos para começar de fato a aprender como implementar estruturas de dados como as listas encadeadas, mas o que são essas listas?

Lista encadeada é o nome dado a estrutura de dado onde os elementos estão ligado de maneira adjacente e manipulação deles fica a escolha do desenvolvedor, ou seja, ele decide se terá como inserir no começo ou apenas no final, se ela será indexada ou não, se será possível apagar elementos no meio ou apenas no começo/final, entre outras funcionalidades.

``` mermaid
	graph LR;
		A["Maria"];
		A --> B["João"];
		B --> C["Vitor"];
		C --> D["Julia"];
```

## Como implementar?

A implementação de uma simples lista encadeada se resume a duas classes principais, uma classe para guardar um valor, os nós da lista, e outra classe para gerenciar esses nós, vamos ao exemplo:

``` Java

public class No {
	public int valor;
	public No proximo;

	// construtor, getters e setters
}

public class Lista {
	public No inicio
	public No fim;
	public No atual;

	public Lista() {
		this.inicio = new No();
		this.fim = new No();
		this.atual = new No();
	}

	public void add(int valor) {
		No novo_no = new No();
		novo_no.setValor(valor);
		if(this.inicio == null) { // Se a lista estiver vazia, tanto o inicio quanto o fim possuem o mesmo valor
			this.inicio = novo_no;
			this.fim = novo_no;
		} else { // senão, o novo nó se torna o próximo do ultimo e ele recebe esse novo nó
			this.fim.setProximo(novo_no);
			this.fim = novo_no;
		}
	}
	
	public boolean temProximo() {
		if(this.inicio == null) { // Lista vazia
			return false;
		} else if (this.atual == null) { // se o atual for vazio, ele recebe o primeiro elemento
			this.atual = this.inicio;
			return true;
		} else { // senão, ele verifica se o atual possui um próximo e faz ele (o atual) receber esse outro nó
			boolean temProximo = this.atual.getProximo() != null;
			this.atual = this.atual.getProximo();
			return temProximo;
		}
	}

	public void exibir() {
		this.atual = this.inicio;
		while(this.temProximo()) {
			System.out.println(this.atual.getValor());
		}
	}
}

```

Acima temos o exemplo de uma implementação de lista encadeada bem simples, apenas com as funções de adicionar um novo valor, exibir no terminal e uma que nos possibilita percorrer a lista. Para facilitar o entendimento do procedimento de inserir um novo valor na lista, fiz uma imagem para ilustrar melhor esse processo, onde fazemos o próximo elemento do ultimo ser esse novo nó e atualizamos a instancia que guardamos o ultimo nó.

![Com_Ponteiros](https://drive.google.com/thumbnail?id=1lFwB1f0P2xLzv8j9_QiwUmWU2fCJSDEz&sz=w600)

Outra função que pode dar um nó na cabeça é a `temProximo()` que é utilizada para nos auxiliar a percorrer a lista, mas se analisarmos com calma, fica fácil de entender. 

``` Java

public boolean temProximo() {
		if(this.inicio == null) { // Lista vazia
			return false;
		} else if (this.atual == null) { // se o atual for vazio, ele recebe o primeiro elemento
			this.atual = this.inicio;
			return true;
		} else { // senão, ele verifica se o atual possui um próximo e faz ele (o atual) receber esse outro nó
			boolean temProximo = this.atual.getProximo() != null;
			this.atual = this.atual.getProximo();
			return temProximo;
		}
	}
	
```

Primeiro ela verifica se a lista está vazia, mas caso não esteja, ela verifica de o nó atual está vazio e caso esteja faz ele receber o primeiro nó da lista, porém, caso o nó atual já tenha um valor, ela verifica se existe um nó seguinte e atualiza o atual, fazendo ele receber o seu nó seguinte. Essa função sozinha não tem muita utilidade, mas quando a combinamos com while, conseguimos percorrer toda a nossa lista, como o foreach presente na classe `LinkedList` do java.

![fluxograma_tem_proximo](https://drive.google.com/thumbnail?id=1NWKWgSp3hXk2Axu7LrUJOxWQaTVoZHkX&sz=w600)

