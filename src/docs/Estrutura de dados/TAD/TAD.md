# TAD

## O que é?

_TAD_ é uma sigla para o termo _**T**ipo **A**bstrato de **D**ado_, cujo objetivo é abstrair a implementação do código para o usuário final, que pode ser tanto o usuário da aplicação, quanto outro desenvolvedor.

## Exemplo

Imagine que estamos fazendo um sistema bem simples para gerenciar um carrinho de compras, onde podemos adicionar/remover um produto e realizar o pagamento, mas agora vem o questionamento, o usuário final precisa saber como que esses procedimentos são realizados? Não, para ele só importa se vai conseguir realizar essas ações sem dificuldades ou quais funções ele deve chamar para realizar certa funcionalidade e é nessa hora que entra o TAD, onde é abstraído toda a lógica por trás do programa.

``` Java

public class Produto {
	public String nome;
	public double preco;
	public int quantidade;
	
	public Produto(String nome, double preco) {
		this.nome = nome;
		this.preco = preco;
		this.quantidade = 0;
	}
}

public class Carrinho {
	private Produto[] lista;
	
	public Carrinho() {
		this.lista = new Produto[10];
	}
	
	public void verCarrinho() {
		System.out.println("-----------------");
		System.out.println("Sua lista: ");
		for(Produto p : this.lista) {
			System.out.println("- " + p.getNome() + " x " + p.getQuantidade());
		}
		System.out.println("-----------------");
	}
	
	public void adicionarProduto(Produto produto) {
		int index = 0;
		for(Produto p : this.lista) {
			if(p.equals(produto)) {
				p.quantidade++;
				System.out.println("Produto " + produto.nome + " adicionado ao carrinho!");
				return;
			}
			index++;
		}
		
		if(this.lista.length - 1 == index) {
			System.out.println("Seu carrinho já está cheio!!!");
			return;
		}

		this.lista[index] = produto;
		System.out.println("Produto " + produto.nome + " adicionado ao carrinho!");
	}

	public void remover(Produto produto) {
		if(this.lista[0]  == null)  { 
			System.out.println("O carrinho está vazio");  
			return;  
		}
		
		for (int i = 0; i < this.lista.length; i++) {
	        if (this.lista[i] != null && this.lista[i].equals(produto)) {
	            // Apaga o produto da lista e move todos os produtos seguintes uma posição para trás
	            for (int j = i + 1; j < this.lista.length; j++) {
	                this.lista[j - 1] = this.lista[j];
	            }
	            this.lista[this.lista.length - 1] = null; // limpa o último
	            System.out.println("Produto " + produto.nome + " removido do carrinho!");
	            return;
	        }
        }
    }
	
	public void pagar() {
		if(this.lista[0] == null) {
			System.out.println("O carrinho está vazio");
			return;
		}
		
		this.lista = new Produto[10];
		System.out.println("Pagamento realizado com sucesso");
		this.verCarrinho();
	}
}

public class Programa {
	public static void main(String[] args) {
		Carrinho carrinho = new Carrinho();
		
		Produto livro1 = new Produto("Codigo limpo", 50.0);
		Produto livro2 = new Produto("Sistemas operacionais", 200.0);
		Produto teclado = new Produto("Teclado logitech", 60.0);
		
		carrinho.adicionarProduto(livro1);
		carrinho.adicionarProduto(livro2);
		carrinho.adicionarProduto(teclado);
		carrinho.remover(livro2);
		carrinho.pagar();
	}
}

```

No código acima temos a implementação do carrinho de compras, onde os itens são armazenados em um array que guarda instâncias do objeto _Produto_, notem que não seria nada agradável deixar para o usuário o trabalho de manipular diretamente a lista e é para isso o nosso TAD _Carrinho_ serve, para simplificar as operações.
