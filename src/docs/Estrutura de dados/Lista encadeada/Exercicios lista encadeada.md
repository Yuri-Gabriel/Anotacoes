## Exercicios lista encadeada

1 ) Adicione indexação à lista encadeada abaixo e uma função paga pegar um elemento em um indice específico.

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
		if(this.inicio == null) {
			this.inicio = novo_no;
			this.fim = novo_no;
		} else {
			this.fim.setProximo(novo_no);
			this.fim = novo_no;
		}
	}
	
	public boolean temProximo() {
		if(this.inicio == null) {
			return false;
		} else if (this.atual == null) {
			this.atual = this.inicio;
			return true;
		} else {
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

2 ) Reaproveitando o codigo da questão anterior, crie uma função para remover um elemento em  qualquer posição da lista.

3 ) Crie uma função similar à `exibir()` mas que use recursividade para percorrer a lista.

4 ) Crie uma função que retorne a própria lista encadeada, porém, invertida.

Exemplo:
``` mermaid
	graph LR;
		A[10] --> B[20];
		B --> C[8];
		C --> D[56];
```

``` mermaid
	graph LR;
			D[56] --> C[8];
			C --> B[20];
			B --> A[10]
```

5 ) Crie uma função para inverter a posição de dois nós da lista.

Exemplo:
``` mermaid
	graph LR;
		A[10] --> B[20];
		B --> C[8];
		C --> D[56];
```

``` mermaid
	graph LR;
			A[10] --> B[8];
			B --> C[20];
			C --> D[56];
```

6 ) Crie uma função para ordenar a lista.

Exemplo:
``` mermaid
	graph LR;
		A[10] --> B[20];
		B --> C[8];
		C --> D[56];
```
``` mermaid
	graph LR;
		A[8] --> B[10];
		B --> C[20];
		C --> D[56];
```